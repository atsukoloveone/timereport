import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

// Linkの実体は<span>~</span>もしくは<a>~</a>
const Link = (props) => {
  if (props.active) {
    return <span>{props.children}</span>;
  }

  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        props.onClick();
      }}
    >
      {props.children}
    </Button>
  );
};

// 制約の指定
Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
