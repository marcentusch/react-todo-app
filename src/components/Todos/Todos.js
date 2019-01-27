import React, { Component } from 'react';
import Todo from '../Todo/Todo.js';
import PropTypes from 'prop-types';
import './Todos.scss';


class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <Todo key={todo.id} todo={todo} markComplete={this.props.markComplete}> </Todo>
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
