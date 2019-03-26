import React, { Component } from 'react';
import '../App.css'

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  onChange = (e) => this.setState({ title: e.target.value });

  render() {
    return (
  // remember to put input and button inside form div
      <form onSubmit= {this.onSubmit} className="form">
        <input
          type="text"
          name="title"
          style={{ flex: '10', padding: '5px' }}
          placeholder="add in a new todo"
          value={this.state.title}
          onChange={this.onChange}
          className="addTodoInput"
          autoComplete="off"
        />
        <button type="submit" className="submitButton">add</button>
      </form>
    )
  }
}

export default AddTodo
