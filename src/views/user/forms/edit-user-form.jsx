import React, { Component } from "react";
import { Form, Input, Select, Modal } from "antd";
const { TextArea } = Input;
const EditUserForm = ({
  visible,
  onCancel,
  onOk,
  confirmLoading,
  currentRowData,
  formRef,
}) => {

  const { id, name, role, description } = currentRowData;

  const [form] = Form.useForm();

  const formItemLayout = {
    labelCol: {
      sm: { span: 4 },
    },
    wrapperCol: {
      sm: { span: 16 },
    },
  };
  return (
    <Modal
      title="编辑"
      visible={visible}
      onCancel={onCancel}
      onOk={onOk}
      confirmLoading={confirmLoading}
    >
      <Form form={form} ref={formRef} {...formItemLayout} initialValues={{
        id: id, name: name, role: role, description: description
      }}>
        <Form.Item name="id" label="用户ID:">
          <Input disabled />
        </Form.Item>
        <Form.Item name="name" label="用户名称:" rules={[{ required: true, message: "请输入用户名称!" }]}>
          <Input placeholder="请输入用户名称" />
        </Form.Item>
        <Form.Item name="role" label="用户角色:">
          <Select style={{ width: 120 }} disabled={id === "admin"}>
            <Select.Option value="admin">admin</Select.Option>
            <Select.Option value="editor">editor</Select.Option>
            <Select.Option value="guest">guest</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="description" label="用户描述:">
          <TextArea rows={4} placeholder="请输入用户描述" />
        </Form.Item>
      </Form>
    </Modal>
  );

}

export default EditUserForm;

