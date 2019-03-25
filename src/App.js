import React, { Component } from 'react';
import Todos from './components/Todos.js';
import TodoItem from './components/Todoitem.js';
import './App.css'

class App extends Component {

  state = {
    todos: [
    {
      title: "wash up",
      completed: false
    },
    {
      title: "dinner",
      completed: false
      }
    ]
  }


  render() {
    return (
      <div className="App">
          <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
