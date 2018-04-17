import React from 'react';
import { connect } from 'react-redux';
import { deleteActivity } from '../actions/activity';
import { deleteActivityIfNeeded } from '../actions/activity';
import {Form, FormGroup, ControlLabel, Button} from 'react-bootstrap';



class DeleteActivity extends React.Component {
  render() {
    let input;
    return (
             
      <div>
        <form onSubmit={e => {
        console.log( this.context.redux)
          e.preventDefault()
          if (! this.context.redux.getState().value.trim()) {　return }
          this.props.dispatch(deleteActivity( this.context.redux.getState().value))
          // ActionCreatorからActionを取得し、Storeに渡している

        }}>     
          <Button type="submit" className="btn btn-large btn-danger">
            Delete Activity
          </Button>
        </form>
      </div>
    );
  }
}

export default connect()(DeleteActivity);
