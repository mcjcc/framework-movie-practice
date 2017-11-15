import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   watched: false
    // }
  }

  watchBtnHandler(e) {
    // this.setState({
    //   watched: !this.state.watched
    // });
    this.props.onToggle(this, this.props.index);
  }


  render () {
    var watched = this.props.watched ? 'watched' : '';
    var displayWatched = this.props.displayWatched ? 'showWatched' : 'showUnwatched';
    return (
      <div className={`${watched} ${displayWatched}`} >
        <span>{this.props.title}</span>
        <button className={watched} onClick={this.watchBtnHandler.bind(this)}>Watched!</button>
      </div>
    );
  }
}

export default Movie;
