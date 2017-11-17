import React from 'react';

var MovieDetails = (props) => {
  var displayInfo = props.displayDetails ? 'displayDetails' : '';

  return (
    <div className={`${displayInfo} movieDetails`}>
      <div><strong>Original Title:</strong>{props.details.original_title}</div>
      <div><strong>Release Date:</strong>{props.details.release_date}</div>
      <div><strong>Vote Average:</strong>{props.details.vote_average}</div>
      <div><strong>Popularity:</strong>{props.details.popularity}</div>
      <div><strong>Overview:</strong>{props.details.overview}</div>
    </div>
  );
}

export default MovieDetails;
