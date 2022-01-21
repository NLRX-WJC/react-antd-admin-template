import React from "react";
import TypingCard from "@/components/TypingCard";
export default () => {
  const cardContent = `
    本项目中的菜单权限和路由权限都是基于用户所属角色来分配的，本项目中内置了三种角色，分别是：
    
    <ul>
      <li>管理员 admin:该角色拥有系统内所有菜单和路由的权限。</li>
      <li>编辑员 editor:该角色拥有系统内除用户管理页之外的所有菜单和路由的权限。</li>
      <li>游客 guest:该角色仅拥有Dashboard、作者博客、权限测试和关于作者三个页面的权限。</li>
    </ul>
    
    你可以通过<a href="#/user">用户管理</a>页面，动态的添加或删除用户，以及编辑某个已经存在的用户，例如修改其权限等操作。
  `;
  return (
    <div className="app-container">
      <TypingCard title="权限说明" source={cardContent} />
    </div>
  );
};
