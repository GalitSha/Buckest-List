import React, {Component} from 'react';
import Styles from './Styles.css'

export class HeaderTitle extends Component {
  render() {
    return (
      <div className={Styles.headerTitle}>
        <h1>InnRoad</h1>
      </div>
    );
  }
}