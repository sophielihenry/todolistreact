import React, { Component } from 'react';
import '../App.css'


class TodoItem extends Component {
  getStyle = () => {
  return {
    padding: '10px',
    textAlign: "left",
    fontFamily: 'arial',
    display: "flex",
    justifyContent: "space-between",
    textDecoration: this.props.todo.completed ? 'line-Through' : 'none',
    color: this.props.todo.completed ? 'red' : 'black'
  }
}

  render() {
    const { id, title } = this.props.todo;
    return (
      <div className="todoItem">
        <div style={this.getStyle()}>
          <input type="checkbox"
                  onChange={this.props.markCompleted.bind(this, id)} />
            <div className="todoText">
              { title }
            </div>
            <button className="deleteButton"
                    onClick={this.props.deleteItem.bind(this, id)}>x</button>
        </div>
      </div>
    )
  }
}

export default TodoItem;

