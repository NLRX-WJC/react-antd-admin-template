const users = {
  "admin-token": {
    role: "admin",
    name: "难凉热血",
    avatar: "https://s1.ax1x.com/2020/04/28/J5hUaT.jpg",
  },
  "editor-token": {
    role: "editor",
    name: "Normal Editor",
    avatar: "https://s1.ax1x.com/2020/04/28/J5hUaT.jpg",
  },
};

export default {
  userInfo: (config) => {
    const token = config.body;
    const userInfo = users[token];
    if (!userInfo) {
      return {
        status: 1,
        message: "获取用户信息失败",
      };
    }
    return {
      status: 0,
      userInfo,
    };
  },
};
