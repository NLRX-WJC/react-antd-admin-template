import React from 'react';
import TypingCard from '@/components/TypingCard'
const Doc = () => {
  const cardContent = `
    作者博客请戳这里 <a href="https://nlrx-wjc.github.io/Blog/" target="_blank">难凉热血的博客</a>。
    欢迎大家与我交流，如果觉得博客不错，也麻烦给博客赏个 star 哈。
  `
  return (
    <div className="app-container">
      <TypingCard title='作者博客' source={cardContent}/>
    </div>
  );
}

export default Doc;