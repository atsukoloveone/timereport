import React from 'react';
import { connect } from 'react-redux';
import { addActivity } from '../actions';
import { addActivityIfNeeded } from '../actions';
import {Form, FormGroup, ControlLabel, Button} from 'react-bootstrap';



class AddActivity extends React.Component {
  render() {
    let input;
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {　return }
          this.props.dispatch(addActivity(input.value))
          this.props.dispatch(addActivityIfNeeded(input.value))
          //↑ActionCreatorからActionを取得し、Storeに渡している
          input.value = ''
        }}>
          <input ref={node => {
            input = node
          }} />
          <Button type="submit" class="btn btn-large btn-primary">
            Add Activity
          </Button>
        </form>
      </div>
    );
  }
}

export default connect()(AddActivity);
