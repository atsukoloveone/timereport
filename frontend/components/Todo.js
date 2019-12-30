import React from "react";
import PropTypes from "prop-types";

// Todoの実体は<li>~</li>
const Todo = (props) => {
  return (
    <li
      onClick={props.onClick}
      style={{
        textDecoration: props.completed ? "line-through" : "none",
      }}
    >
      {props.id} {props.text}
    </li>
  );
};

// 制約の指定
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
