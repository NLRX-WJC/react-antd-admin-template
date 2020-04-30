/**
 * icon:菜单项图标
 * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */
const menuList = [
  {
    title: "首页",
    path: "/dashboard",
    icon: "home",
    roles: ["admin"],
  },
  {
    title: "图表",
    path: "/charts",
    icon: "area-chart",
    roles: ["admin"],
    children: [
      {
        title: "键盘图表",
        path: "/charts/keyboard",
      },
      {
        title: "折线图",
        path: "/charts/line",
      },
      {
        title: "混合图表",
        path: "/charts/mix-chart",
      },
    ],
  },
  {
    title: "文档",
    path: "/doc",
    icon: "home",
    roles: ["aaa"]
  },
];
export default menuList;
