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

  deleteItem = (id) => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id
      )})

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
          <Todos todos={this.state.todos}
                 markCompleted={this.markCompleted}
                 deleteItem={this.deleteItem}/>
      </div>
    );
  }
}

export default App;
