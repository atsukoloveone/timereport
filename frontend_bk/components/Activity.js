import React from "react";
import PropTypes from "prop-types";
import MenuItem from "material-ui/MenuItem";

// Todoの実体は<li>~</li>
class Activity extends React.Component {
  render() {
    return (
      <MenuItem
        onClick={this.props.onClick}
        value={this.props.id}
        primaryText={this.props.text}
      ></MenuItem>
    );
  }
}

// 制約の指定
Activity.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default Activity;
