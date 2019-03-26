import React, { Component } from 'react';
import '../App.css'


class TodoItem extends Component {
  getStyle = () => {
  return {
    padding: '10px',
    // borderBottom: '1px solid green',
    textAlign: "center",
    fontFamily: 'arial',
    display: "flex",
    justifyContent: "center",
    justifyContent: "space-between",
    // width: "142px",
    textDecoration: this.props.todo.completed ? 'line-Through' : 'none'
  }
}

  render() {
    const { id, title } = this.props.todo;
    return (
      <div className="todoItem">
        <div style={this.getStyle()}>
          <input type="checkbox"
                  onChange={this.props.markCompleted.bind(this, id)} />
            { title }
            <button onClick={this.props.deleteItem.bind(this, id)}>x</button>
        </div>
      </div>
    )
  }
}

export default TodoItem;

