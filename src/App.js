import React, { Component } from 'react';
import Todos from './components/Todos.js';
import './App.css'

class App extends Component {

  state = {
    todos: [{
      todoText: "wash up"
      completed: false
    }]
  }


  render() {
    return (
      <div className="App">
        <h1>App</h1>
          <Todos />
      </div>
    );
  }
}

export default App;
