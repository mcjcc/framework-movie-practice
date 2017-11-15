import React from 'react';
import ReactDOM  from 'react-dom';

import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies
    };
  }



  search(term) {
    console.log('search!!!!!!!!! from index.jsx');
    console.log('term', term);
    console.log('this.state', this.state);
    if (term !== '') {
      var searched = movies.filter((movieObj) => {
        return movieObj.title.includes(term) || movieObj.title.toLowerCase().includes(term);
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

  render() {
    return (
      <div>

        <Search onSearch={this.search.bind(this)} />
        {
          this.state.movies.map(function(movie, index){
            return (<Movie key={index} title={movie.title}/>);
          })
        }
      </div>
    );
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
