import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';

class Todo extends Component {


  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;

    return (
      <div className="todoItem">
        <h3 style={this.getStyle()}> 
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
          { title } 
        </h3>
      </div>
    )
  }
}

// Here we define proptype to make props like todo object required 
Todo.propTypes = {
  todo: PropTypes.object.isRequired
}


export default Todo;
