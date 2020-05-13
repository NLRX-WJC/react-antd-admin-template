import React, { Component } from "react";
import { Form, Input, DatePicker, Select, Rate, Modal } from "antd";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");
class EditForm extends Component {
  render() {
    const {
      visible,
      onCancel,
      onOk,
      form,
      confirmLoading,
      currentRowData,
    } = this.props;
    const { getFieldDecorator } = form;
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
        <Form {...formItemLayout}>
          <Form.Item label="序号:">
            {getFieldDecorator("id", {
              initialValue: id,
            })(<Input disabled />)}
          </Form.Item>
          <Form.Item label="标题:">
            {getFieldDecorator("title", {
              rules: [{ required: true, message: "请输入标题!" }],
              initialValue: title,
            })(<Input placeholder="标题" />)}
          </Form.Item>
          <Form.Item label="作者:">
            {getFieldDecorator("author", {
              initialValue: author,
            })(<Input disabled />)}
          </Form.Item>
          <Form.Item label="阅读量:">
            {getFieldDecorator("readings", {
              initialValue: readings,
            })(<Input disabled />)}
          </Form.Item>
          <Form.Item label="推荐指数:">
            {getFieldDecorator("star", {
              initialValue: star.length,
            })(<Rate count={3} />)}
          </Form.Item>
          <Form.Item label="状态:">
            {getFieldDecorator("status", {
              initialValue: status,
            })(
              <Select style={{ width: 120 }}>
                <Select.Option value="published">published</Select.Option>
                <Select.Option value="draft">draft</Select.Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="时间:">
            {getFieldDecorator("date", {
              rules: [{ type: 'object', required: true, message: '请选择时间!' }],
              initialValue: moment(date || "YYYY-MM-DD HH:mm:ss"),
            })(<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />)}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default Form.create({ name: "EditForm" })(EditForm);
