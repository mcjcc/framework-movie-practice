import React from 'react';

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
    var displayInfo = this.state.displayInfo ? 'displayInfo' : '';
    return (
      <div className={`${watched} ${displayWatched} movieItem`} >
        <span className="title" onClick={this.displayInfoHandler.bind(this)}>{this.props.title}</span>
        <button className={watched} onClick={this.watchBtnHandler.bind(this)}>Watched!</button>
        <div className={`${displayInfo} movieInfo`}>
          <div><strong>Year:</strong>{this.props.movieInfo.year}</div>
          <div><strong>Runtime:</strong>{this.props.movieInfo.runtime}</div>
          <div><strong>Metascore:</strong>{this.props.movieInfo.year}</div>
          <div><strong>imdbRating:</strong>{this.props.movieInfo.year}</div>
        </div>
      </div>
    );
  }
}

export default Movie;
