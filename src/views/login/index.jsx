import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, Icon, Input, Button, message, Spin } from "antd";
import { connect } from "react-redux";
import "./index.less";
import { login, getUserInfo } from "@/store/actions";
const Item = Form.Item;

class Login extends Component {
  state = {
    loading: false,
  };
  handleSubmit = (event) => {
    // 阻止事件的默认行为
    event.preventDefault();

    // 对所有表单字段进行检验
    this.props.form.validateFields(async (err, values) => {
      // 检验成功
      if (!err) {
        const { username, password } = values;
        this.login(username, password);
      } else {
        console.log("检验失败!");
      }
    });
  };
  login = (username, password) => {
    const { login } = this.props;
    // 登录完成后 发送请求 调用接口获取用户信息
    this.setState({ loading: true });
    login(username, password)
      .then((data) => {
        // this.setState({ loading: false });
        message.success("登录成功");
        this.getUserInfo(data.token);
      })
      .catch((error) => {
        this.setState({ loading: false });
        message.error(error);
      });
  };
  // 获取用户信息
  getUserInfo = (token) => {
    const { getUserInfo } = this.props;
    getUserInfo(token)
      .then((data) => {
        localStorage.setItem("userInfo", JSON.stringify(data.userInfo));
      })
      .catch((error) => {
        message.error(error);
      });
  };

  /*
  对密码进行自定义验证
  */
  /*
   用户名/密码的的合法性要求
     1). 必须输入
     2). 必须大于等于4位
     3). 必须小于等于12位
     4). 必须是英文、数字或下划线组成
    */
  validatePwd = (rule, value, callback) => {
    console.log("validatePwd()", rule, value);
    if (!value) {
      callback("密码必须输入");
    } else if (value.length < 4) {
      callback("密码长度不能小于4位");
    } else if (value.length > 12) {
      callback("密码长度不能大于12位");
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      callback("密码必须是英文、数字或下划线组成");
    } else {
      callback(); // 验证通过
    }
    // callback('xxxx') // 验证失败, 并指定提示的文本
  };

  render() {
    // 如果用户已经登陆, 自动跳转到管理界面
    const { token } = this.props;
    if (token) {
      return <Redirect to="/home" />;
    }

    const { getFieldDecorator } = this.props.form;

    return (
      <div className="login-container">
        <Form onSubmit={this.handleSubmit} className="content">
          <div className="title"><h2>用户登录</h2></div>
          <Spin spinning={this.state.loading} tip="加载中...">
            <Form.Item>
              {/*
                  用户名/密码的的合法性要求
                1). 必须输入
                2). 必须大于等于4位
                3). 必须小于等于12位
                4). 必须是英文、数字或下划线组成
               */}
              {getFieldDecorator("username", {
                // 配置对象: 属性名是特定的一些名称
                // 声明式验证: 直接使用别人定义好的验证规则进行验证
                rules: [
                  {
                    required: true,
                    whitespace: true,
                    message: "用户名必须输入",
                  },
                  { min: 4, message: "用户名至少4位" },
                  { max: 12, message: "用户名最多12位" },
                  {
                    pattern: /^[a-zA-Z0-9_]+$/,
                    message: "用户名必须是英文、数字或下划线组成",
                  },
                ],
                initialValue: "admin", // 初始值
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="用户名"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  {
                    validator: this.validatePwd,
                  },
                ],
                initialValue: "123456", // 初始值
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="密码"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>
          </Spin>
        </Form>
      </div>
    );
  }
}

const WrapLogin = Form.create()(Login);

export default connect((state) => state.user, { login, getUserInfo })(
  WrapLogin
);
