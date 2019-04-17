import React, { Component } from 'react';
import TodoItem from './Todoitem.js'

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
     <TodoItem todo={todo}
               key={todo.id}
               markCompleted={this.props.markCompleted}
               deleteItem={this.props.deleteItem}/>
      ));
    }
  }

export default Todos;







