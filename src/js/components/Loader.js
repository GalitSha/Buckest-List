import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Styles from './Styles.css'


export class Loader extends Component {
  static propTypes = {
    show: PropTypes.bool.isRequired
  };

  render() {
    if (!this.props.show){
      return null
    }
    return (
      <div className={Styles.loader}>
        <h1>Loading...</h1>
      </div>
    );
  }
}