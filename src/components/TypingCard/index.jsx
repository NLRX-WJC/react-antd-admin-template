import React from "react";
import { Card } from "antd";
import Typing from "@/utils/typing";

class TypingCard extends React.Component {
  static defaultProps = {
    title: "何时使用",
    source: "",
    height: 136,
  };
  componentDidMount() {
    const typing = new Typing({
      source: this.source,
      output: this.output,
      delay: 30,
    });
    typing.start();
  }
  render() {
    return (
      <Card
        hoverable
        bordered={false}
        className="card-item"
        title={this.props.title}
        style={{ minHeight: this.props.height }}
        id={this.props.id}
      >
        <div
          style={{ display: "none" }}
          ref={(el) => (this.source = el)}
          dangerouslySetInnerHTML={{ __html: this.props.source }}
        />
        <div ref={(el) => (this.output = el)} />
      </Card>
    );
  }
}

export default TypingCard;
