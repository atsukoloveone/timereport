import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { addTodoIfNeeded } from '../actions';

import { button } from 'react-bootstrap';

class AddTodo extends React.Component {
  render() {
    let input;
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {　return }
          this.props.dispatch(addTodo(input.value))
          this.props.dispatch(addTodoIfNeeded(input.value))
          //↑ActionCreatorからActionを取得し、Storeに渡している
          input.value = ''
        }}>
          <input ref={node => {
            input = node
          }} />
          <button type="submit" class="btn btn-primary">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(AddTodo);
