import React, { Component } from 'react';
import PropTypes from 'prop-types'


class TodoItem extends Component {
  getStyle = () => {
  return {
    padding: '10px',
    // borderBottom: '1px solid green',
    textAlign: "center",
    fontFamily: 'arial',
    textDecoration: this.props.todo.completed ? 'line-Through' : 'none'
  }
}

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <input type="checkbox"
                onChange={this.props.markCompleted.bind(this, id)} />
          { title }
          <button onClick={this.props.deleteItem.bind(this, id)}>x</button>
      </div>
    )
  }
}


TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem;

