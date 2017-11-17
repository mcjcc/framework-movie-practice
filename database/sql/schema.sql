-- Movies table
-- CREATE DB STATEMENT
CREATE DATABASE Movie;

-- USE DB STATEMENT
USE Movie;

-- CREATE TABLES
CREATE TABLE Movies (
  id INT UNIQUE AUTO_INCREMENT NOT NULL,
  title VARCHAR(50) NOT NULL,
  original_title VARCHAR(50),
  original_language VARCHAR(20),
  overview TEXT,
  release_date DATE,
  vote_average FLOAT(10,3),
  popularity FLOAT(10,3),
  watched BOOLEAN DEFAULT false,

  PRIMARY KEY (id)

);

--
-- let newMovieObj = {
--   title: movie.title,
--   details: {
--     original_language: movie.original_language,
--     original_title: movie.original_title,
--     overview: movie.overview,
--     release_data: movie.release_date,
--     vote_average: movie.vote_average,
--     popularity: movie.popularity
--   },
--   watched: false
-- }
