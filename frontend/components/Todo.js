import React from "react";
import PropTypes from "prop-types";

// Todoの実体は<li>~</li>
function Todo() {
  return (
    <li
      onClick={this.props.onClick}
      style={{
        textDecoration: this.props.completed ? "line-through" : "none",
      }}
    >
      {this.props.id} {this.props.text}
    </li>
  );
}

// 制約の指定
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
