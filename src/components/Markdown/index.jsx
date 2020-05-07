import React from "react";
import { Card } from "antd";
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import TypingCard from "@/components/TypingCard";
const Markdown = () => {
  const cardContent = `此页面用到的Markdown编辑器是<a href="https://github.com/nhn/tui.editor/tree/master/apps/react-editor">tui.editor(React版)</a>`;
  return (
    <div className="app-container">
      <TypingCard title="Markdown编辑器" source={cardContent} />
      <br />
      <Card bordered={false}>
        <Editor
          initialValue="hello 难凉热血!"
          previewStyle="vertical"
          height="600px"
          initialEditType="markdown"
          useCommandShortcut={true}
        />
      </Card>
    </div>
  );
};

export default Markdown;
