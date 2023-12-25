import React, { Component } from "react";
import { Form, Input, DatePicker, Select, Rate, Modal } from "antd";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");
const EditForm = ({
  visible,
  onCancel,
  onOk,
  form,
  confirmLoading,
  currentRowData,
}) => {

  const { id, author, date, readings, star, status, title } = currentRowData;
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
      <Form {...formItemLayout} initialValues={{
        id: id, author: author, date: moment(date || "YYYY-MM-DD HH:mm:ss"), readings: readings, star: star.length, status: status, title: title
      }}>
        <Form.Item name="id" label="序号:">
          <Input disabled />
        </Form.Item>
        <Form.Item name="title" label="标题:" rules={[{ required: true, message: "请输入标题!" }]}>
          <Input placeholder="标题" />
        </Form.Item>
        <Form.Item name="author" label="作者:">
          <Input disabled />
        </Form.Item>
        <Form.Item name="readings" label="阅读量:">
          <Input disabled />
        </Form.Item>
        <Form.Item name="star" label="推荐指数:">
          <Rate count={3} />
        </Form.Item>
        <Form.Item name="status" label="状态:">
          <Select style={{ width: 120 }}>
            <Select.Option value="published">published</Select.Option>
            <Select.Option value="draft">draft</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="date" label="时间:" rules={[{ type: 'object', required: true, message: '请选择时间!' }]}>
          <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default EditForm;




