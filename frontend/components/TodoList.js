import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
// TodoListの実体は<ul>~</ul>
// リストの中の<li>~</li>はTodoコンポーネントを使用している
class TodoList extends React.Component {
  componentDidMount() {
    this.props.getTodosIfNeeded();
  }

  render() {
    const { onTodoClick, todos } = this.props;

    return (
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
        ))}
      </ul>
    );
  }
}
// 制約の指定
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  getTodosIfNeeded: PropTypes.func.isRequired,
};

export default TodoList;
