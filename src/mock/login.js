const tokens = {
  admin: "admin-token",
  editor: "editor-token",
};

export default {
  login: (config) => {
    const { username } = JSON.parse(config.body);
    const token = tokens[username];
    if (!token) {
      return {
        status: 1,
        message: "用户名或密码错误",
      };
    }
    return {
      status: 0,
      token,
    };
  },
  logout: (_) => {
    return {
      status: 0,
      data: "success",
    };
  },
};
