import React, { Component } from 'react';
import Todos from './components/Todos.js';
import TodoItem from './components/Todoitem.js';
import './App.css'

class App extends Component {

  markCompleted = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
  }
    return todo;
  }) });
}

  state = {
    todos: [
    {
      id: '1',
      title: "wash up",
      completed: false
    },
    {
      id: '2',
      title: "dinner",
      completed: false
      }
    ]
  }

  render() {
    return (
      <div className="App">
          <Todos todos={this.state.todos} markCompleted={this.markCompleted}/>
      </div>
    );
  }
}

export default App;
