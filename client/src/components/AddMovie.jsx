import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addMovieTerm: ''
    };
  }

  onInputChange(e) {
    console.log(e.target.value);
    this.setState({addMovieTerm: e.target.value});
  }

  onAddHandler(e) {
    this.props.onAdd(this.state.addMovieTerm);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Enter a movie title..." onChange={this.onInputChange.bind(this)}  />
        <button type="submit" onClick={this.onAddHandler.bind(this)}>Add Movie!</button>
      </div>
    )
  }
}

export default AddMovie;
