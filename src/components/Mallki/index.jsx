import React from "react";
import { PropTypes } from "prop-types";
import "./index.less";
const Mallki = (props) => {
  const { className, text } = props;
  return (
    <a className={`mallki ${className}`} href="#/">
      {text}
      <span data-letters={text} />
      <span data-letters={text} />
    </a>
  );
};

Mallki.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

Mallki.defaultProps = {
  className: "",
  text: "vue-element-admin",
};

export default Mallki;
