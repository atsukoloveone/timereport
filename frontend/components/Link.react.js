import React from "react";
import PropTypes from "prop-types";

// Linkの実体は<span>~</span>もしくは<a>~</a>
const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal",
  NORMAL1: "normal1",
};
export default class Link extends React.Component {
  constructor(props) {
    super(props);

    // this.onMouseEnter = this.onMouseEnter.bind(this);
    // this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
      class: STATUS.NORMAL,
    };
  }

  // onMouseEnter()  {
  onMouseEnter = () => {
    this.setState({ class: STATUS.HOVERED });
  };

  // onMouseLeave()  {
  onMouseLeave = () => {
    this.setState({ class: STATUS.NORMAL });
  };

  render() {
    return (
      <a
        className={this.state.class}
        href={this.props.page || "#"}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {this.props.children}
      </a>
    );
  }
}
Link.propTypes = {
  page: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
