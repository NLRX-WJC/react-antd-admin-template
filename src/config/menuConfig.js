/**
 * icon:菜单项图标
 * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */
const menuList = [
  {
    title: "首页",
    path: "/dashboard",
    icon: "home",
  },
  {
    title: "开发文档",
    path: "/doc",
    icon: "file",
  },
  {
    title: "引导页",
    path: "/guide",
    icon: "key",
  },
  {
    title: "权限测试",
    path: "/permission",
    icon: "lock",
    children: [
      {
        title: "管理员页面",
        path: "/permission/adminPage",
        roles:["admin"]
      },
      {
        title: "游客页面",
        path: "/permission/guestPage",
        roles:["guest"]
      },
    ],
  },
  {
    title: "组件",
    path: "/components",
    icon: "appstore",
    children: [
      {
        title: "富文本",
        path: "/components/richTextEditor",
      },
      {
        title: "Markdown",
        path: "/components/Markdown",
      },
      {
        title: "拖拽列表",
        path: "/components/draggable",
      },
    ],
  },
  {
    title: "图表",
    path: "/charts",
    icon: "area-chart",
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
    title: "路由嵌套",
    path: "/nested",
    icon: "cluster",
    children: [
      {
        title: "菜单1",
        path: "/nested/menu1",
        children: [
          {
            title: "菜单1-1",
            path: "/nested/menu1/menu1-1",
          },
          {
            title: "菜单1-2",
            path: "/nested/menu1/menu1-2",
            children: [
              {
                title: "菜单1-2-1",
                path: "/nested/menu1/menu1-2/menu1-2-1",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "表格",
    path: "/table",
    icon: "table",
  },
  {
    title: "Excel",
    path: "/excel",
    icon: "file-excel",
    children: [
      {
        title: "导出Excel",
        path: "/excel/export",
      },
      {
        title: "上传Excel",
        path: "/excel/upload",
      }
    ],
  },
  {
    title: "Zip",
    path: "/zip",
    icon: "file-zip",
  },
  {
    title: "剪贴板",
    path: "/clipboard",
    icon: "copy",
  },
  {
    title: "用户管理",
    path: "/user",
    icon: "usergroup-add",
    roles:["admin"]
  },
  {
    title: "关于作者",
    path: "/about",
    icon: "user",
  },
];
export default menuList;
