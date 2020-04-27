const tokens = {
  admin: 'admin-token',
  editor:  'editor-token'
}

const users = {
  admin: {
    role: "admin",
    name: "难凉热血",
    token: "admin-token",
  },
  editor: {
    role: "editor",
    name: "Normal Editor",
    token: "editor-token",
  },
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
      data: token,
    };
  },
  logout: (_) => {
    return {
      status: 0,
      data: "success",
    };
  },
};
