import React from "react";
import RichTextEditor from "@/components/RichTextEditor";
import TypingCard from "@/components/TypingCard";

const RichTextEditorDemo = () => {
  const cardContent = `
    此页面用到的富文本编辑器是<a href="https://github.com/jpuri/react-draft-wysiwyg">react-draft-wysiwyg</a>。
  `
  return (
    <div className="app-container">
      <TypingCard title="新手引导" source={cardContent} />
      <br />
      <RichTextEditor />
    </div>
  );
};

export default RichTextEditorDemo;
