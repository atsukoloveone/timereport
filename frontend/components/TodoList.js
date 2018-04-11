import React, { PropTypes } from 'react';
import Todo from './Todo';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


class TodoList extends React.Component {
state = {
    value: 1,
  };

    handleChange = (event, index, value) => this.setState({value});
   render() {
    return (
    <div>        
        <SelectField
          floatingLabelText="Aktivitet name:"
          value={this.state.value}
          onChange={this.handleChange}
        >
        {this.props.todos.map(todo =>
      <MenuItem
         key={todo.actionId} value={todo.actionId} primaryText={todo.name}
         />        

        )}        
        </SelectField>
         </div>
    );
  }
}

// 制約の指定
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    actionId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
