import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { deleteActivity, deleteActivityIfNeeded } from '../actions/activity';
import { Button} from 'react-bootstrap';

class ActivityList extends React.Component {
state = {
    value: 1,
  };

    handleChange = (event, index, value) => {
        this.setState({value})
    
    };
   render() {
    return (
     
    <div> 
        <form onSubmit={e => {
    console.log("DeleteActivity");
    console.log(this);  
          e.preventDefault()
          if (!this.state.value) {　return }
          this.props.dispatch(deleteActivity(this.state.value))
          this.props.dispatch(deleteActivityIfNeeded(this.state.value))
      
        }}>
            
        <SelectField
          floatingLabelText="Aktivitet name:"
          value={this.state.value}
          onChange={this.handleChange}
        >
        {this.props.activities.map(activity =>
      <MenuItem
         key={activity.actionId} value={activity.actionId} primaryText={activity.name}
         />        

        )}        
        </SelectField>
        <Button
                type="submit"
                bsStyle="danger">Delete
              </Button>
        </form>
         </div>
    );
  }
}

// 制約の指定
ActivityList.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.shape({
    actionId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onActivityClick: PropTypes.func.isRequired
};

//export default ActivityList;
export default connect()(ActivityList);