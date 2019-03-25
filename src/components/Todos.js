import React, { Component } from 'react';
import TodoItem from './Todoitem.js'
import PropTypes from 'prop-types'

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
     <TodoItem todo={todo}/>
      ));
    }
  }


Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;







