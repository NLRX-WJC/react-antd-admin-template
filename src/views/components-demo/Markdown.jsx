import React from "react";
import { Card } from "antd";
import Markdown from "@/components/Markdown";
import TypingCard from "@/components/TypingCard";

const MarkdownDemo = () => {
  const cardContent = `
    此页面用到的Markdown编辑器是<a href="https://github.com/nhn/tui.editor/tree/master/apps/react-editor" target="_blank">tui.editor(React版)</a>。
  `;
  return (
    <div className="app-container">
      <TypingCard title="新手引导" source={cardContent} />
      <br />
      <Card bordered={false}>
        <Markdown />
      </Card>
    </div>
  );
};

export default MarkdownDemo;
