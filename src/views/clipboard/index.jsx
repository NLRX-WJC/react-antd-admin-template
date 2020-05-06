import React from "react";
import clip from "@/utils/clipboard"; 
import { Button, Row, Col } from "antd";

const text = `
  我是要被复制的文字，
  我是要被复制的文字，
  我是要被复制的文字，
  我是要被复制的文字，
  我是要被复制的文字，
  我是要被复制的文字，
  我是要被复制的文字，
  我是要被复制的文字，
  我是要被复制的文字，
  我是要被复制的文字，
  我是要被复制的文字，
  我是要被复制的文字，
  我是要被复制的文字，
  我是要被复制的文字，
  我是要被复制的文字，
  我是要被复制的文字
  `;
const handleCopy = (text, event) => {
  clip(text, event);
};
const Clipboard = () => {
  return (
    <div className="app-container">
      <h1>点击下方的Copy按钮，可将以下文字复制到剪贴板</h1>
      <br />
      <Row>
        <Col span={12}>{text}</Col>
      </Row>
      <br />
      <Row>
        <Col span={2}>
          <Button
            type="primary"
            icon="copy"
            onClick={(e) => {
              handleCopy(text, e);
            }}
          >
            Copy
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Clipboard;
