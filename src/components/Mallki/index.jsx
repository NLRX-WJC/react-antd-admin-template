import React, { Component } from "react";
import { PropTypes } from "prop-types";
import './index.less'
class Mallki extends Component {
  static propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
  };
  static defaultProps = {
    className: "",
    text: "vue-element-admin",
  };
  render() {
    const { className, text } = this.props;
    return (
      <a className={`mallki ${className}`} href="#/dashboard">
        {text}
        <span data-letters={text} />
        <span data-letters={text} />
      </a>
    );
  }
}

export default Mallki;
