import React from "react";
import TypingCard from "@/components/TypingCard";
import draggable from "@/assets/images/draggable.gif";
const Draggable = () => {
  const cardContent = `
    你可以试着拖拽一下左侧导航菜单栏的某一项，它是可以拖拽的哦。
    本Demo是基于<a href="https://github.com/atlassian/react-beautiful-dnd" target="_blank">react-beautiful-dnd</a>。
    <p><img src="${draggable}"/></p>
  `;
  return (
    <div className="app-container">
      <TypingCard title="列表拖拽" source={cardContent} />
    </div>
  );
};

export default Draggable;
