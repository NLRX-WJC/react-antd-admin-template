import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, Icon, Input, Button, message, Spin } from "antd";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import "./index.less";
import { login, getUserInfo } from "@/store/actions";

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
      .then((data) => {})
      .catch((error) => {
        message.error(error);
      });
  };

  render() {
    // 如果用户已经登陆, 自动跳转到管理界面
    const { token } = this.props;
    if (token) {
      return <Redirect to="/dashboard" />;
    }
    const { getFieldDecorator } = this.props.form;
    return (
      <DocumentTitle title={"用户登录"}>
        <div className="login-container">
          <Form onSubmit={this.handleSubmit} className="content">
            <div className="title">
              <h2>用户登录</h2>
            </div>
            <Spin spinning={this.state.loading} tip="加载中...">
              <Form.Item>
                {getFieldDecorator("username", {
                  rules: [{ required: true, whitespace: true, message: "用户名必须输入", }],
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
              <Form.Item>
                <span>账号 : admin 密码 : 随便填</span>
                <br />
                <span>账号 : guest 密码 : 随便填</span>
              </Form.Item>
            </Spin>
          </Form>
        </div>
      </DocumentTitle>
    );
  }
}

const WrapLogin = Form.create()(Login);

export default connect((state) => state.user, { login, getUserInfo })(
  WrapLogin
);
