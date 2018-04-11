import React, { PropTypes } from 'react';
import MenuItem from 'material-ui/MenuItem';

// Todoの実体は<li>~</li>
class Todo extends React.Component {
    
  render() {
          console.log("Todo");
          console.log(this);
    return (
      <MenuItem
        value={this.props.actionId} primaryText={this.props.name}
         />
    );
  }
}

// 制約の指定
Todo.propTypes = {
  name: PropTypes.string.isRequired
};

export default Todo;
