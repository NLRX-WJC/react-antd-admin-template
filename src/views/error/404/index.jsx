import React, { Component } from "react";
import { Button, Row, Col } from "antd";
import { connect } from "react-redux";
import errImg from '@/assets/images/404.png'
import "./index.less";

/*
前台404页面
 */
class NotFound extends Component {
  goHome = () => {
    this.props.history.replace("/dashboard");
  };

  render() {
    return (
      <Row className="not-found">
        <Col span={12}>
          <img src={errImg} alt="404"/>
        </Col>
        <Col span={12} className="right">
          <h1>404</h1>
          <h2>抱歉，你访问的页面不存在</h2>
          <div>
            <Button type="primary" onClick={this.goHome}>
              回到首页
            </Button>
          </div>
        </Col>
      </Row>
    );
  }
}

export default connect()(NotFound);
