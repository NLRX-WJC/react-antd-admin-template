import React from "react";
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
const Markdown = () => {
  return (
    <Editor
      initialValue="hello 难凉热血!"
      previewStyle="vertical"
      height="600px"
      initialEditType="markdown"
      useCommandShortcut={true}
    />
  );
};

export default Markdown;
