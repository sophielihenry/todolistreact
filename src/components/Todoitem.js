import React, { Component } from 'react';
import PropTypes from 'prop-types'


class TodoItem extends Component {
  getStyle = () => {
  return {
    padding: '10px',
    borderBottom: '1px solid green',
    fontFamily: 'arial',
    textDecoration: this.props.todo.completed ? 'line-Through' : 'none'
  }
}

  render() {
    return (
      <div style={this.getStyle()}>
        <p>{ this.props.todo.title }</p>
      </div>
    )
  }
}


TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem;

