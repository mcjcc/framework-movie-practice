var Sequelize = require('sequelize');


var db = new Sequelize('Movie', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})


// test if db is running
db.authenticate()
         .then(() => {
           console.log('mysql connected!!!');
         })
         .catch((error) => {
           console.error('UNABLE TO CONNECT TO THE DB', error);
         });


const Movie = db.define('movie', {
  title: Sequelize.STRING,
  original_title: Sequelize.STRING,
  original_language: Sequelize.STRING,
  overview: Sequelize.TEXT,
  release_date: Sequelize.DATE,
  vote_average: Sequelize.FLOAT,
  popularity: Sequelize.FLOAT,
  watched: Sequelize.BOOLEAN
});

var saveMovie = function(movie) {
  Movie.create(movie)
       .then(() => {
         console.log('movie saved!')
       })
}

var getAllMovies = function(callback) {
  Movie.findAll()
       .then((movies) => {
         callback(movies);
       });

}
module.exports.db = db;
module.exports.saveMovie = saveMovie;
