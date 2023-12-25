import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, message, Spin } from "antd";
import Icon from '@ant-design/icons'
import * as icons from '@ant-design/icons';
import DocumentTitle from "react-document-title";
import "./index.less";
// import login from "../../mock/login";

import { login, getUserInfo } from '@/store/actions'


const Login = ({ login, getUserInfo }) => {
  const { token } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);

  const handleLogin = (username, password) => {

    // console.log(`handleLogin, username:${username}, password:${password}, login:${login}`);
    // 登录完成后 发送请求 调用接口获取用户信息
    setLoading(true);
    dispatch(login(username, password))
      .then((data) => {
        console.log(`登录成功，data:${data}`)
        message.success("登录成功");
        handleUserInfo(data.token);
      })
      .catch((error) => {
        console.log("登录失败，error:${error}")
        setLoading(false);
        message.error(error);
      });
  };

  // 获取用户信息
  const handleUserInfo = (token) => {
    dispatch(getUserInfo(token))
      .then((data) => { })
      .catch((error) => {
        message.error(error);
      });
  };

  const handleSubmit = (event) => {
    // 阻止事件的默认行为
    event.preventDefault();

    // console.log("handleSubmit!");

    // 对所有表单字段进行检验
    form.validateFields().then((values) => {
      // 检验成功
      console.log("handleSubmit! fields no error");
      const { username, password } = values;
      handleLogin(username, password);

    })

  };

  if (token) {
    return <Navigate to="/dashboard" replace />
  }
  return (
    <DocumentTitle title={"用户登录"} forceRender>
      <div className="login-container">
        <Form className="content" form={form}>
          <div className="title">
            <h2>用户登录</h2>
          </div>
          <Spin spinning={loading} tip="登录中...">
            <Form.Item name="username" initialValue={"admin"} rules={[
              {
                required: true,
                whitespace: true,
                message: "请输入用户名",
              },
            ]}>

              <Input
                prefix={
                  <Icon component={icons["UserOutlined"]} style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="用户名"
              />

            </Form.Item>
            <Form.Item name="password" initialValue={"123456"} rules={[
              {
                required: true,
                whitespace: true,
                message: "请输入密码",
              },
            ]}>

              <Input
                prefix={
                  <Icon component={icons["LockOutlined"]} style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button" onClick={handleSubmit}
              >
                登录
              </Button>
            </Form.Item>
            <Form.Item>
              <span>账号 : admin 密码 : 随便填</span>
              <br />
              <span>账号 : editor 密码 : 随便填</span>
              <br />
              <span>账号 : guest 密码 : 随便填</span>
            </Form.Item>
          </Spin>
        </Form>
      </div>
    </DocumentTitle>
  );
};

const WrapLogin = ({ token }) => {
  // console.log(`WrapLogin, login:${login}`);
  return (<Login token={token} login={login} getUserInfo={getUserInfo} />)
};

export default WrapLogin;


