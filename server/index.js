const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const movieAPI = require('../lib/movieAPI');


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
  res.statusCode = 200;
  res.send(movies);
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

      parsedData.results.forEach(function(movie) {
        movies.push(movie);
      })
      res.send(movies);
    }
  });
});
