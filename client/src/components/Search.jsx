import React from 'react';

// search will be a stateful component

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Search for a movie..."/>
        <button>Search!</button>
      </div>
    );
  }
}

export default Search;
