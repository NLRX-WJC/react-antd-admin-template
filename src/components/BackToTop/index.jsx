import React, { Component } from "react";
import { PropTypes } from "prop-types";
import './index.less'
class BackToTop extends Component {
  static propTypes = {
    visibilityHeight: PropTypes.number,
    backPosition: PropTypes.number,
    customStyle: PropTypes.object
  };
  static defaultProps = {
    visibilityHeight: 400,
    backPosition: 0,
    customStyle: {
      right: 50+"px",
      bottom: 50+"px",
      width: 40+"px",
      height: 40+"px",
      borderRadius: 4+"px",
      lineHeight: 45+"px",
      background: "#e7eaf1"
    }
  };
  state = {
    visible: false,
    interval: null,
    isMoving: false
  };
  componentWillMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, true);
    if (this.state.interval) {
      clearInterval(this.state.interval);
    }
  }
  handleScroll = () => {
    this.setState({
      visible: window.pageYOffset > this.props.visibilityHeight
    });
  };
  backToTop = () => {
    if (this.state.isMoving) return;
    const start = window.pageYOffset;
    let i = 0;
    this.setState({
      isMoving: true,
      interval: setInterval(() => {
        const next = Math.floor(this.easeInOutQuad(10 * i, start, -start, 500));
        if (next <= this.props.backPosition) {
          window.scrollTo(0, this.props.backPosition);
          clearInterval(this.state.interval);
          this.setState({
            isMoving: false
          });
        } else {
          window.scrollTo(0, next);
        }
        i++;
      }, 16.7)
    });
  };
  easeInOutQuad = (t, b, c, d) => {
    if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
    return (-c / 2) * (--t * (t - 2) - 1) + b;
  };
  render() {
    if (this.state.visible) {
      return (
        <h1>hahaha</h1>
        // <div
        //   style={{right:"50px",bottom:"50px",width:"40px",height:"40px",borderRadius:"4px",lineHeight:"45px",background:"#e7eaf1"}}
        //   className="back-to-ceiling"
        //   click={this.backToTop}
        // >
        //   <svg
        //     width="16"
        //     height="16"
        //     viewBox="0 0 17 17"
        //     xmlns="http://www.w3.org/2000/svg"
        //     className="Icon Icon--backToTopArrow"
        //     aria-hidden="true"
        //     style="height: 16px; width: 16px;"
        //   >
        //     <title>回到顶部</title>
        //     <g>
        //       <path
        //         d="M12.036 15.59c0 .55-.453.995-.997.995H5.032c-.55 0-.997-.445-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29c.39-.39 1.026-.385 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z"
        //         fillRule="evenodd"
        //       />
        //     </g>
        //   </svg>
        // </div>
      );
    } else {
      return null
    }
  }
}

export default BackToTop;
