import React from "react";
import PropTypes from "prop-types";

// Todoの実体は<li>~</li>
const Todo = (props) => (
  <li // eslint-disable-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions, max-len
    onClick={props.onClick}
    style={{
      textDecoration: props.completed ? "line-through" : "none",
    }}
  >
    {props.id}
    {props.text}
  </li>
);

// 制約の指定
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
