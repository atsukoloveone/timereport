import React, { PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


class ActivityList extends React.Component {
state = {
    value: 1,
  };

    handleChange = (event, index, value) => this.setState({value});
   render() {
    console.log("ActivityList");
    console.log(this);          
    return (
     
    <div>        
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

export default ActivityList;
