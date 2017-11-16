import React from 'react';

import MovieDetails from './MovieDetails.jsx';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInfo: false
    }
  }

  displayInfoHandler(e) {
    this.setState({
      displayInfo: !this.state.displayInfo
    });
  }

  watchBtnHandler(e) {
    this.props.onToggle(this, this.props.index);
  }

  render () {
    var watched = this.props.watched ? 'watched' : '';
    var displayWatched = this.props.displayWatched ? 'showWatched' : 'showUnwatched';

    return (
      <div className={`${watched} ${displayWatched} movieItem`} >
        <span className="title" onClick={this.displayInfoHandler.bind(this)}>{this.props.title}</span>
        <button className={watched} onClick={this.watchBtnHandler.bind(this)}>Watched!</button>
        <MovieDetails details={this.props.movieDetails} displayDetails={this.state.displayInfo}  />
      </div>
    );
  }
}

export default Movie;
