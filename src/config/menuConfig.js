/**
 * icon:菜单项图标
 * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */
const menuList = [
  {
    title: "首页",
    path: "/dashboard",
    meta: {
      icon: "home",
      roles: ["admin"],
    },
  },
  {
    title: "文档",
    path: "/doc",
    meta: {
      icon: "home",
    },
    children: [
      {
        title: "404",
        path: "/error/404",
        meta: {
          icon: "home",
        },
      },
    ]
  },
];
export default menuList;
