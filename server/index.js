const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const movieAPI = require('../lib/movieAPI');

const db = require('../database');


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });


// var movies = [
//   {title: 'Mean Girls', watched: false, info: {year: '1995', runtime: '107 min', metascore: '46', imdbRating: '6.2'}},
//   {title: 'Hackers', watched: true, info: {year: '3252', runtime: '127 min', metascore: '60', imdbRating: '7.4'}},
//   {title: 'The Grey', watched: false, info:{year: '4363', runtime: '87 min', metascore: '59', imdbRating: '5.7'}},
//   {title: 'Sunshine', watched: true, info:{year: '2536', runtime: '97 min', metascore: '25', imdbRating: '1.4'}},
//   {title: 'Ex Machina', watched: false, info:{year: '854', runtime: '121 min', metascore: '98', imdbRating: '9.8'}},
// ];

var movies = [];

app.get('/movies', function(req, res) {
  let localMovies = [];

  // retrieve movies from dbs
  db.getAllMovies()
  .then((movies)=>{
    console.log('movies.forEach', movies);
    movies.forEach(function(movie){
      console.log('movie:  ', movie);
      console.log('movie.dataValues.title:  ', movie.dataValues.title);
      console.log('movie.title:  ', movie.title);
      // console.log('movies.movie.dataValues', movie.movie.dataValues);
      let newMovieObj = {
        title: movie.title,
        details: {
          original_language: movie.original_language,
          original_title: movie.original_title,
          overview: movie.overview,
          release_date: movie.release_date,
          vote_average: movie.vote_average,
          popularity: movie.popularity
        },
        watched: false
      };
      localMovies.push(newMovieObj);
    });
    res.send(localMovies);
  })
});

app.post('/movie', function(req, res) {

});

app.get('/load', function(req, res) {
  movieAPI.retrieveMovies(function(error, response){
    if(error) {
      res.send('error');
    } else {
      res.statusCode = 200;
      var parsedData = JSON.parse(response.body);

      Promise.all(
        parsedData.results.map(function(movie) {
        let newMovieObj = {
          title: movie.title,
          original_language: movie.original_language,
          original_title: movie.original_title,
          overview: movie.overview,
          release_date: movie.release_date,
          vote_average: movie.vote_average,
          popularity: movie.popularity,
          watched: false
        }
        return db.saveMovie(newMovieObj);
      })
    ).then(() => {
      console.log('promise all responded');
      res.send('data saved');

    });

      // Promise.all(parsedData.results)
    }
  });
});
