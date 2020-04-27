const users = {
  "admin-token": {
    role: "admin",
    name: "难凉热血",
  },
  "editor-token": {
    role: "editor",
    name: "Normal Editor",
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
      data: userInfo,
    };
  },
};
