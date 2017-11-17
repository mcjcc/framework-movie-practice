const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const movieAPI = require('../lib/movieAPI');

const db = require('../database');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });


var movies = [];

app.get('/movies', function(req, res) {
  let localMovies = [];

  // retrieve movies from dbs
  db.getAllMovies()
  .then((movies)=>{
    console.log('movies.forEach', movies);
    movies.forEach(function(movie){
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
  console.log(req);
  var movieObj = req.body;
  console.log('movieObj', movieObj);
  db.saveMovie(movieObj)
    .then(()=>{
      return;
    });
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

    }
  });
});
