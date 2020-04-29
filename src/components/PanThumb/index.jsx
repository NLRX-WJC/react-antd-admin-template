import React, { Component } from "react";
import { PropTypes } from "prop-types";
import "./index.less";
class PanThumb extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    zIndex: PropTypes.number,
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string,
  };
  static defaultProps = {
    width: "150px",
    height: "150px",
    zIndex: 1,
    className:""
  };
  render() {
    const { image, zIndex, width, height,className } = this.props;
    return (
      <div
        className={`pan-item ${className}`}
        style={{
          zIndex,
          height,
          width,
        }}
      >
        <div className="pan-info">
          <div className="pan-info-roles-container">{this.props.children}</div>
        </div>
        <img src={image} className="pan-thumb" alt=""/>
      </div>
    );
  }
}

export default PanThumb;
