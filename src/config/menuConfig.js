const menuList = [
  {
    title: "首页",
    path: "/home",
    meta: {
      icon: "home",
      isPublic: true,
      hidden: false,
      roles: ["admin"],
    },
  },
  {
    title: "文档",
    path: "/doc",
    meta: {
      icon: "home",
      isPublic: true,
      hidden: true,
      roles: ["editor"],
    },
    // children: [
    //   {
    //     title: "首页",
    //     path: "/home",
    //     meta: {
    //       icon: "home",
    //       isPublic: true,
    //       hidden: false,
    //       roles: ["editor"],
    //     },
    //   },
    //   {
    //     title: "文档",
    //     path: "/doc",
    //   },
    // ]
  },
];
export default menuList;
