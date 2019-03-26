import React, { Component } from 'react';
import Todos from './components/Todos.js';
import TodoItem from './components/Todoitem.js';
import './App.css'
import Header from './components/Layout/Header.js';
import AddTodo from './components/AddTodo.js';

class App extends Component {

// toggle a todo completed
  markCompleted = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
      }) });
  }

// delete a todo
  deleteItem = (id) => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id
      )})
  }

// add a todo
  addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
}

  state = {
    todos: [
    {
      id: Date.now(),
      title: "wash up",
      completed: false
    },
    ]
  }

  render() {
    return (
      <div className="App">
          <Header />
          <AddTodo addTodo = {this.addTodo} />
          <Todos todos={this.state.todos}
                 markCompleted={this.markCompleted}
                 deleteItem={this.deleteItem}/>

      </div>
    );
  }
}

export default App;
