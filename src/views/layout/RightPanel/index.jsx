import React, { Component } from "react";
import { connect } from "react-redux";
import { Drawer, Switch, Row, Col, Divider } from "antd";
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
          width={300}
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
            <span style={{ color: "red" }}>注:这个功能还没完成</span>
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
