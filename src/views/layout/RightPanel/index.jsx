import React, { Component } from "react";
import { connect } from "react-redux";
import { Drawer, Switch, Row, Col, Divider, Alert, Icon,Button } from "antd";
import { toggleSettingPanel, changeSetting } from "@/store/actions";
class RightPanel extends Component {
  sidebarLogoChange = (checked) => {
    this.props.changeSetting({ key: "sidebarLogo", value: checked });
  };
  fixedHeaderChange = (checked) => {
    this.props.changeSetting({ key: "fixedHeader", value: checked });
  };
  render() {
    const {
      settingPanelVisible,
      toggleSettingPanel,
      sidebarLogo,
      fixedHeader,
    } = this.props;
    return (
      <div className="rightSettings">
        <Drawer
          title="系统设置"
          placement="right"
          width={350}
          onClose={toggleSettingPanel}
          visible={settingPanelVisible}
        >
          <Row>
            <Col span={12}>
              <span>侧边栏 Logo</span>
            </Col>
            <Col span={12}>
              <Switch
                checkedChildren="开"
                unCheckedChildren="关"
                defaultChecked={sidebarLogo}
                onChange={this.sidebarLogoChange}
              />
            </Col>
          </Row>
          <Divider dashed />
          <Row>
            <Col span={12}>
              <span>固定 Header</span>
            </Col>
            <Col span={12}>
              <Switch
                checkedChildren="开"
                unCheckedChildren="关"
                defaultChecked={fixedHeader}
                onChange={this.fixedHeaderChange}
              />
            </Col>
          </Row>
          <Divider dashed />
          <Row>
            <Col span={24}>
              <Alert
                message="开发者请注意:"
                description="配置栏只在开发环境用于预览，生产环境不会展现，请拷贝后手动修改配置文件"
                type="warning"
                showIcon
                icon={<Icon type="notification" />}
                style={{marginBottom: "16px"}}
              />
              <Button style={{width:"100%"}} icon="copy">拷贝配置</Button>
            </Col>
          </Row>
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.app,
    ...state.settings,
  };
};

export default connect(mapStateToProps, { toggleSettingPanel, changeSetting })(
  RightPanel
);
