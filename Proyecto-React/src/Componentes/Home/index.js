// Dependencies
import React, { Component } from 'react';
import CardGroup from './CardGroup';


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Are you looking for a job? <i>This is the right place to start...</i></h1>
        <CardGroup/>
      </div>
    );
  }
}

export default Home;
