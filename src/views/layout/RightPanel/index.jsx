import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Drawer, Switch, Row, Col, Divider, Alert, Button } from "antd";
import Icon from '@ant-design/icons'
import * as icons from '@ant-design/icons';

import { toggleSettingPanel, changeSetting } from "@/store/actions";
import clip from "@/utils/clipboard";

const RightPanel = (props) => {

  const state = {
    ...useSelector(state => state.app),
    ...useSelector(state => state.settings),
  };


  const {
    settingPanelVisible,
    sidebarLogo: defaultSidebarLogo,
    fixedHeader: defaultFixedHeader,
    tagsView: defaultTagsView,
  } = state;

  const dispatch = useDispatch();

  const [sidebarLogo, setSidebarLogo] = useState(defaultSidebarLogo);
  const [fixedHeader, setFixedHeader] = useState(defaultFixedHeader);
  const [tagsView, setTagsView] = useState(defaultTagsView);


  const handleToggleSettingPanel = () => {
    dispatch(toggleSettingPanel())
  };

  const handleChangeSetting = (setting) => {
    dispatch(changeSetting(setting))
  }

  const sidebarLogoChange = (checked) => {
    setSidebarLogo(checked);
    handleChangeSetting({ key: "sidebarLogo", value: checked });
  };

  const fixedHeaderChange = (checked) => {
    setFixedHeader(checked);
    handleChangeSetting({ key: "fixedHeader", value: checked });
  };

  const tagsViewChange = (checked) => {
    setTagsView(checked);
    handleChangeSetting({ key: "tagsView", value: checked });
  };

  const handleCopy = (e) => {
    let config = `
    export default {
      showSettings: true,
      sidebarLogo: ${sidebarLogo},
      fixedHeader: ${fixedHeader},
      tagsView: ${tagsView},
    }
    `;
    clip(config, e);
  };

  return (
    <div className="rightSettings">
      <Drawer
        title="系统设置"
        placement="right"
        width={350}
        onClose={handleToggleSettingPanel}
        open={settingPanelVisible}
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
              onChange={sidebarLogoChange}
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
              onChange={fixedHeaderChange}
            />
          </Col>
        </Row>
        <Divider dashed />
        <Row>
          <Col span={12}>
            <span>开启 Tags-View</span>
          </Col>
          <Col span={12}>
            <Switch
              checkedChildren="开"
              unCheckedChildren="关"
              defaultChecked={tagsView}
              onChange={tagsViewChange}
            />
          </Col>
        </Row>
        <Divider dashed />
        <Row>
          <Col span={24}>
            <Alert
              message="开发者请注意:"
              description="配置栏只在开发环境用于预览，生产环境不会展现，请拷贝后手动修改/src/defaultSettings.js配置文件"
              type="warning"
              showIcon
              icon={<Icon component={icons["NotificationOutlined"]} />}
              style={{ marginBottom: "16px" }}
            />
            <Button style={{ width: "100%" }} icon={<Icon component={icons["CopyOutlined"]} />} onClick={handleCopy}>
              拷贝配置
            </Button>
          </Col>
        </Row>
      </Drawer>
    </div>
  );
};



export default RightPanel;
