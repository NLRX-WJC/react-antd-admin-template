import React, { useState, useEffect, useRef } from "react";
import {
  Table,
  Tag,
  Form,
  Button,
  Input,
  Collapse,
  Pagination,
  Divider,
  message,
  Select
} from "antd";

import Icon from '@ant-design/icons'
import * as icons from '@ant-design/icons';

import { tableList, deleteItem, editItem } from "@/api/table";
import EditForm from "./forms/editForm"
const { Column } = Table;
const { Panel } = Collapse;
const TableComponent = (props) => {
  const titleInputRef = useRef(null);
  const statusSelectRef = useRef(null);
  const starSelectRef = useRef(null);


  const [state, setState] = useState({
    list: [],
    loading: false,
    total: 0,
    listQuery: {
      pageNumber: 1,
      pageSize: 10,
      title: "",
      star: "",
      status: ""
    },
    editModalVisible: false,
    editModalLoading: false,
    currentRowData: {
      id: 0,
      author: "",
      date: "",
      readings: 0,
      star: "★",
      status: "published",
      title: ""
    }
  });

  useEffect(() => {
    fetchData();
  }, [state.listQuery, state.editModalVisible]);

  const fetchData = () => {
    setState({ ...state, loading: true });
    tableList(state.listQuery).then((response) => {

      setState({ ...state, loading: false });
      const list = response.data.data.items;
      const total = response.data.data.total;

      const resStr = JSON.stringify(response);

      setState({ ...state, list, total });
    });
  };

  // function stringify(obj) {
  //   let cache = [];
  //   let str = JSON.stringify(obj, function (key, value) {
  //     if (typeof value === "object" && value !== null) {
  //       if (cache.indexOf(value) !== -1) {
  //         // Circular reference found, discard key
  //         return;
  //       }
  //       // Store value in our collection
  //       cache.push(value);
  //     }
  //     return value;
  //   });
  //   cache = null; // reset the cache
  //   return str;
  // }



  const filterTitleChange = (e) => {
    let value = e.target.value
    setState({
      ...state,
      listQuery: {
        ...state.listQuery,
        pageNumber: 1,
        title: value,
      }
    });
  };
  const filterStatusChange = (value) => {
    setState({
      ...state,
      listQuery: {
        ...state.listQuery,
        pageNumber: 1,
        status: value,
      }
    });
  };
  const filterStarChange = (value) => {
    setState({
      ...state,
      listQuery: {
        ...state.listQuery,
        pageNumber: 1,
        star: value,
      }
    });
  };
  const changePage = (pageNumber, pageSize) => {
    setState({
      ...state,
      listQuery: {
        ...state.listQuery,
        pageNumber,
      },
    });

    // fetchData();
  };
  const changePageSize = (current, pageSize) => {
    setState({
      ...state,
      listQuery: {
        ...state.listQuery,
        pageNumber: 1,
        pageSize,
      },
    });

    // fetchData();
  };
  const handleDelete = (row) => {
    deleteItem({ id: row.id }).then(res => {
      message.success("删除成功")
      fetchData();
    })
  }
  const handleEdit = (row) => {
    setState({
      ...state,
      currentRowData: Object.assign({}, row),
      editModalVisible: true,
    });
  };

  const handleOk = _ => {
    const { form } = formRef.props;
    form.validateFields().then((fieldsValue) => {

      const values = {
        ...fieldsValue,
        'star': "".padStart(fieldsValue['star'], '★'),
        'date': fieldsValue['date'].format('YYYY-MM-DD HH:mm:ss'),
      };
      setState({ ...state, editModalLoading: true, });
      editItem(values).then((response) => {
        form.resetFields();
        setState({ ...state, editModalVisible: false, editModalLoading: false });
        message.success("编辑成功!")
        // fetchData()
      }).catch(e => {
        message.success("编辑失败,请重试!")
      })

    });
  };

  const handleCancel = _ => {
    setState({
      ...state,
      editModalVisible: false,
    });
  };
  return (
    <div className="app-container">
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="筛选" key="1">
          <Form layout="inline">
            <Form.Item label="标题:">
              <Input onChange={filterTitleChange} ref={titleInputRef} allowClear />
            </Form.Item>
            <Form.Item label="类型:">
              <Select ref={statusSelectRef}
                style={{ width: 120 }}
                onChange={filterStatusChange} allowClear>
                <Select.Option value="published">published</Select.Option>
                <Select.Option value="draft">draft</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="推荐指数:">
              <Select ref={starSelectRef}
                style={{ width: 120 }}
                onChange={filterStarChange} allowClear>
                <Select.Option value={1}>★</Select.Option>
                <Select.Option value={2}>★★</Select.Option>
                <Select.Option value={3}>★★★</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>

              <Button type="primary" onClick={fetchData}>
                搜索
              </Button>
            </Form.Item>
          </Form>
        </Panel>
      </Collapse>
      <br />
      <Table
        bordered
        rowKey={(record) => record.id}
        dataSource={state.list}
        loading={state.loading}
        pagination={false}
      >
        <Column title="序号" dataIndex="id" key="id" width={200} align="center" sorter={(a, b) => a.id - b.id} />
        <Column title="标题" dataIndex="title" key="title" width={200} align="center" />
        <Column title="作者" dataIndex="author" key="author" width={100} align="center" />
        <Column title="阅读量" dataIndex="readings" key="readings" width={195} align="center" />
        <Column title="推荐指数" dataIndex="star" key="star" width={195} align="center" />
        <Column title="状态" dataIndex="status" key="status" width={195} align="center" render={(status) => {
          let color =
            status === "published" ? "green" : status === "deleted" ? "red" : "";
          return (
            <Tag color={color} key={status}>
              {status}
            </Tag>
          );
        }} />
        <Column title="时间" dataIndex="date" key="date" width={195} align="center" />
        <Column title="操作" key="action" width={195} align="center" render={(text, row) => (
          <span>
            <Button type="primary" shape="circle" icon={<Icon component={icons["EditOutlined"]} />} title="编辑" onClick={handleEdit.bind(null, row)} />
            <Divider type="vertical" />
            <Button type="primary" shape="circle" icon={<Icon component={icons["DeleteOutlined"]} />} title="删除" onClick={handleDelete.bind(null, row)} />
          </span>
        )} />
      </Table>
      <br />
      <Pagination
        total={state.total}
        pageSizeOptions={["10", "20", "40"]}
        showTotal={(total) => `共${total}条数据`}
        onChange={changePage}
        current={state.listQuery.pageNumber}
        onShowSizeChange={changePageSize}
        showSizeChanger
        showQuickJumper
        hideOnSinglePage={true}
      />
      <EditForm
        currentRowData={state.currentRowData}
        wrappedComponentRef={formRef => formRef = formRef}
        visible={state.editModalVisible}
        confirmLoading={state.editModalLoading}
        onCancel={handleCancel}
        onOk={handleOk}
      />
    </div>
  );
}

export default TableComponent;
