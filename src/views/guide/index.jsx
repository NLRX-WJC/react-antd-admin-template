import React, { Component } from "react";
import Driver from "driver.js"; // import driver.js
import "driver.js/dist/driver.min.css"; // import driver.js css
import { Button } from "antd";
import steps from "./steps";
class Guide extends Component {
  state = {
    driver: null,
  };
  guide = () => {
    this.state.driver.defineSteps(steps);
    this.state.driver.start();
  };
  componentDidMount() {
    this.setState({
      driver: new Driver({
        className: "scoped-class",
        opacity: 0.75,
        doneBtnText: "完成", // Text on the final button
        closeBtnText: "关闭", // Text on the close button for this step
        nextBtnText: "下一步", // Next button text for this step
        prevBtnText: "上一步", // Previous button text for this step
      }),
    });
  }
  render() {
    return (
      <div className="app-container">
        <p className="warn-content">
          <a href="https://github.com/kamranahmedse/driver.js" target="_blank">
            driver.js.
          </a>
        </p>
        <Button type="primary" onClick={this.guide}>
          打开引导
        </Button>
      </div>
    );
  }
}

export default Guide;
