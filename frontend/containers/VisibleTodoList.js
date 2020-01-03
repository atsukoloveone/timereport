import { connect } from "react-redux";
import { toggleTodoDb, getTodosIfNeeded } from "../actions/index";
import TodoList from "../components/TodoList";

// フィルタリング状態によってTODOリストの絞り込みを行う
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter((t) => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter((t) => !t.completed);
    default:
      return todos;
  }
};

// StateをViewのプロパティに落としこむ
const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todoApp.todos, state.todoApp.visibilityFilter),
});

// ViewからStateにイベントを伝える
const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => {
    // ActionCreatorからActionを取得し、Storeに渡す
    dispatch(toggleTodoDb(id));
  },
  getTodosIfNeeded: () => dispatch(getTodosIfNeeded()),
});

// つなぎこみ
const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
// ViewにはReact.jsで用意したTodoListを使用する

export default VisibleTodoList;
