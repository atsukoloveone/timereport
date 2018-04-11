import React, { PropTypes } from 'react';
import Todo from './Activity';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

// TodoListの実体は<ul>~</ul>
// リストの中の<li>~</li>はTodoコンポーネントを使用している
class ActivityList extends React.Component {
  render() {
    return (
        <SelectField
          floatingLabelText="Aktivitet name:"
          value={this.state.value}
          onChange={this.handleChange}
        >
        {this.props.activities.map(activity =>
          <Activity
            key={activity.actionId}
            {...activity}
            onClick={() => this.props.onActivityClick(activity.actionId)}
          />
        )}        
        </SelectField>   
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
