import React, {Component} from 'react';
import './Styles.css';
import {HeaderTitle} from "./HeaderTitle";
import connect from "react-redux/es/connect/connect";
import {Card} from "./Card";
import {fetchItems} from "../actions";
import {Loader} from "./Loader";
import PropTypes from 'prop-types'
import Styles from './Styles.css'

const mapStateToProps = state => {
  return {items: state.items}
};

const mapDispatchToProps = dispatch => {
  return {fetchItems: () => dispatch(fetchItems())}
};


class App extends Component {
  static propTypes = {
    fetchItems: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.fetchItems()
  }

  render() {
    return (
      <div>
        <HeaderTitle/>
        <Loader show={this.props.items.length === 0}/>
        <div className={Styles.itemsContainer}>
          {this.props.items.map(item => <Card
            key={`${item.BucketId}-${item.ItemId}`}
            item={item}
          />)}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
