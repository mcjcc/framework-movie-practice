var request = require('request');

var API_KEY = '4e798c75616ea5891024eaeb753d6aa6';

var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=4e798c75616ea5891024eaeb753d6aa6&language=en-US&page=1';

var retrieveMovies = function(callback) {
  request(url, function(error, response, body) {
    if (error) {
      callback(error);
    } else {
      callback(null, response);
    }
  })
}




module.exports.retrieveMovies = retrieveMovies;

 // Write code in movieAPI.js necessary to call the API (you may use the 'now_playing' endpoint) and retrieve movie results
 // Create a new Express GET route called /load in which you make a call to the API. Put the retrieved data into the hardcoded movies array in Express index.js
 // Modify your index.jsx file accordingly to handle the loaded API data. You should not longer have dummy data anywhere.
