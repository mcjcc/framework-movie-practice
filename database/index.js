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
  title: {type: Sequelize.STRING, unique: true},
  original_title: Sequelize.STRING,
  original_language: Sequelize.STRING,
  overview: Sequelize.TEXT,
  release_date: Sequelize.DATE,
  vote_average: Sequelize.FLOAT,
  popularity: Sequelize.FLOAT,
  watched: Sequelize.BOOLEAN
},
{timestamps: false});

Movie.sync({force: true});

var saveMovie = function(movie) {

  return Movie.create(movie)
       .then(() => {
         console.log('movie saved!');
         return 'movie saved again!';
       })
       .then((msg) =>{
         console.log('this is msg from the previous then', msg);
         return;
       })
       .catch((error) => {
         console.error('movie not saved', error);
       })
}

var getAllMovies = function() {
  console.log('inside getAllMovies');
  return Movie.findAll()
       .then((movies) => {
         // console.log('movies inside db.getAllMovies', movies);
         return movies;
       })
       .catch((error) => {
         return error;
       });
}

module.exports.db = db;
module.exports.saveMovie = saveMovie;
module.exports.getAllMovies = getAllMovies;
