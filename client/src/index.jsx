import React from 'react';
import ReactDOM  from 'react-dom';

import $ from 'jquery';
import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';

// var movies = [
//   {title: 'Mean Girls', watched: false, info: {year: '1995', runtime: '107 min', metascore: '46', imdbRating: '6.2'}},
//   {title: 'Hackers', watched: true, info: {year: '3252', runtime: '127 min', metascore: '60', imdbRating: '7.4'}},
//   {title: 'The Grey', watched: false, info:{year: '4363', runtime: '87 min', metascore: '59', imdbRating: '5.7'}},
//   {title: 'Sunshine', watched: true, info:{year: '2536', runtime: '97 min', metascore: '25', imdbRating: '1.4'}},
//   {title: 'Ex Machina', watched: false, info:{year: '854', runtime: '121 min', metascore: '98', imdbRating: '9.8'}},
// ];
var movies;

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      displayWatched: true,
      loading: true
    };
  }

  componentDidMount() {
    // hit /movies (get) endpoint and on complete, set state movies with the response.body object
    // var setState = this.setState.bind(this);
    $.ajax({
      url: '/movies',
      method: 'GET',
    }).done(function(data){
      movies = data;
      console.log(data);
      this.setState({movies:movies, loading: false});
    }.bind(this));
    // this.setState({movies:movies});
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

    if (this.state.loading === true) {
      return (<div>Loading...</div>);
    }

    if (this.state.movies.length > 0 && this.state.loading === false) {
      var movies = this.state.movies.map(function(movie, index){
        return (<Movie key={index} index={index} title={movie.title} watched={movie.watched} displayWatched={displayWatched} onToggle={toggleWatch} movieInfo={movie.info}/> );
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
