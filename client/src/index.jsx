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
  }

  render() {
    return (
      <div>

        <Search />
        {
          this.props.titles.map(function(movie, index){
            return (<Movie key={index} title={movie.title}/>);
          })
        }
      </div>
    );
  }
}

ReactDOM.render( <MovieList titles={movies} />, document.getElementById('app'));
