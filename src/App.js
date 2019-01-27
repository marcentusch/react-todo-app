import React, { Component } from 'react';
import './App.scss';
import Todos from './components/Todos/Todos.js';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Buy bananas',
        completed: false
      },
      {
        id: 2,
        title: 'Flush the toilet',
        completed: true
      },
      {
        id: 3,
        title: 'Make some tea',
        completed: true
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  render() {
    return (
      <div className="App">
        <div className="stage">
          <h1> Todos </h1>
          <Todos todos={this.state.todos} markComplete={this.markComplete} > </Todos>
        </div>
      </div>
    );
  }
}

export default App;
