import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          style={{ flex: '10', padding: '5px' }}
          placeholder="Add Todo ..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <button type="submit">add</button>
      </form>
    )
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo
