import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Styles from './Styles.css'

export class Card extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className={Styles.item}>
        <div className={Styles.title}>
        {this.props.item.ItemTitle}
        </div>
        <div className={Styles.description}>
        {this.props.item.Description}
        </div>
      </div>
    );
  }
}