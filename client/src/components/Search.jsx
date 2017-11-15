import React from 'react';

// search will be a stateful component

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  // on click of the search button,
  // send value of input box

  onInputChange(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }


  onSearch(e) {
    console.log('search button click!');
    e.preventDefault();
    this.props.onSearch(this.state.searchTerm);

  }

  render() {
    return (
      <div>
        <form>
        <input type="text" placeholder="Search for a movie..." onChange={this.onInputChange.bind(this)} />
        <button onSubmit={this.onSearch.bind(this)} onClick={this.onSearch.bind(this)}>Search!</button>
        </form>
      </div>
    );
  }
}

export default Search;
