import React, { PropTypes } from 'react';
import Todo from './Todo';
import Activity from './Activity';
import SelectField from 'material-ui/SelectField';
// TodoListの実体は<ul>~</ul>
// リストの中の<li>~</li>はTodoコンポーネントを使用している
class TodoList extends React.Component {
  render() {
  this.state = {
    value: 1,
  };
    console.log("TodoList");
    console.log(this);
      this.handleChange = (event, index, value) => this.setState({value});
    return (

        <SelectField
          floatingLabelText="Aktivitet name:"
          value={this.state.value}
          onChange={this.handleChange}
        >
        {this.props.todos.map(todo =>
          <Todo
            key={todo.actionId}
            {...todo}
           
          />
        )}        
        </SelectField>   
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
