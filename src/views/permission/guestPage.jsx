import React from 'react';
import TypingCard from '@/components/TypingCard'
const GuestPage = () => {
  const cardContent = `这个页面只有guest角色才可以访问，admin角色看不到`
  return ( 
    <div className="app-container">
      <TypingCard title='游客页面' source={cardContent}/>
    </div>
  );
}
 
export default GuestPage;