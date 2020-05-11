import React from 'react';
import TypingCard from '@/components/TypingCard'
const Doc = () => {
  const cardContent = `开发文档正在编写中...`
  return (
    <div className="app-container">
      <TypingCard title='开发文档' source={cardContent}/>
    </div>
  );
}

export default Doc;