import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import style from './App.css';
import Filter from "../components/Filter";

@connect(
  state => ({
    todos: state.todos
  })
)
export default class App extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const { todos, actions } = this.props;

    return (
      <div className={style.normal}>
        <Filter/>
      </div>
    );
  }
}
