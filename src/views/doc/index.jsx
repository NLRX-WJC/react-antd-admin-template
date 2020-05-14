import React from 'react';
import TypingCard from '@/components/TypingCard'
const Doc = () => {
  const cardContent = `
    开发文档请戳这里 <a href="https://nlrx-wjc.github.io/react-antd-admin-template-doc/" target="_blank">react-antd-admin-template开发文档</a>。
    目前正在编写完善中...
  `
  return (
    <div className="app-container">
      <TypingCard title='开发文档' source={cardContent}/>
    </div>
  );
}

export default Doc;