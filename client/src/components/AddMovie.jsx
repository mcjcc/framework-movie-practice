import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Enter a movie title..." />
        <button type="submit">Add Movie!</button>
      </div>
    )
  }
}

export default AddMovie;
