// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Global/content.css';
// Assets
//import './css/Content.css';

class Content extends Component {
  static propTypes = {
    body: PropTypes.object.isRequired
  };

  render() {
    const { body } = this.props;

    return (
      <div className="Content margenes-contenido">
        {body}
      </div>
    );
  }
}

export default Content;
