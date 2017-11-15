import React from 'react';
import ReactDOM  from 'react-dom';

import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';

var movies = [
  {title: 'Mean Girls', watched: false},
  {title: 'Hackers', watched: true},
  {title: 'The Grey', watched: false},
  {title: 'Sunshine', watched: true},
  {title: 'Ex Machina', watched: false},
];

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      displayWatched: true
    };
  }

  componentWillMount() {

    this.setState({movies:movies});
  }

  search(term) {
    console.log('search!!!!!!!!! from index.jsx');
    console.log('term', term);
    console.log('this.state', this.state);
    term = term.toLowerCase();
    if (term !== '') {
      var searched = this.state.movies.filter((movieObj) => {
        return movieObj.title.toLowerCase().includes(term);
      });

      this.setState({
        movies: searched
      })
    } else {
      this.setState({
        movies: movies
      })
    }
  }


  toggleWatch(movie, index) {
    console.log('toggle movie:', movie);

    // console.log('statemovies[index]', this.state.movies[index]);
    this.state.movies[index].watched = !this.state.movies[index].watched;

    this.setState({
      movies: this.state.movies
    });
  }

  showWatched() {
    this.setState({
      displayWatched: true
    });
  }

  showUnwatched() {
    this.setState({
      displayWatched: false
    });
  }

  render() {
    var movies;
    console.log('this.state.movies', this.state.movies);
    var toggleWatch = this.toggleWatch.bind(this);
    var displayWatched = this.state.displayWatched;

    if (this.state.movies.length > 0) {
      var movies = this.state.movies.map(function(movie, index){
        return (<Movie key={index} index={index} title={movie.title} watched={movie.watched} displayWatched={displayWatched} onToggle={toggleWatch} /> );
      });
    } else {
      var movies = 'Sorry no movies found!';
    }

    return (
      <div>

        <AddMovie />
        <Search onSearch={this.search.bind(this)} />
        <br /><br />
        <div>
          <button onClick={this.showWatched.bind(this)}>Watched</button>   <button onClick={this.showUnwatched.bind(this)}>To Watch</button>
          <br />
          {movies}
        </div>
      </div>
    );
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
