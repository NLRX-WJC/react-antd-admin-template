import React, { Component } from "react";
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
import { tableList, deleteItem,editItem } from "@/api/table";
import EditForm from "./forms/editForm"
const { Column } = Table;
const { Panel } = Collapse;
class TableComponent extends Component {
  _isMounted = false; // 这个变量是用来标志当前组件是否挂载
  state = {
    list: [],
    loading: false,
    total: 0,
    listQuery: {
      pageNumber: 1,
      pageSize: 10,
      title: "",
      star: "",
      status:""
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
  };
  fetchData = () => {
    this.setState({ loading: true });
    tableList(this.state.listQuery).then((response) => {
      this.setState({ loading: false });
      const list = response.data.data.items;
      const total = response.data.data.total;
      if (this._isMounted) {
        this.setState({ list, total });
      }
    });
  };
  componentDidMount() {
    this._isMounted = true;
    this.fetchData();
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  filterTitleChange = (e) => {
    let value = e.target.value
    this.setState((state) => ({
      listQuery: {
        ...state.listQuery,
        title:value,
      }
    }));
  };
  filterStatusChange = (value) => {
    this.setState((state) => ({
      listQuery: {
        ...state.listQuery,
        status:value,
      }
    }));
  };
  filterStarChange  = (value) => {
    this.setState((state) => ({
      listQuery: {
        ...state.listQuery,
        star:value,
      }
    }));
  };
  changePage = (pageNumber, pageSize) => {
    this.setState(
      (state) => ({
        listQuery: {
          ...state.listQuery,
          pageNumber,
        },
      }),
      () => {
        this.fetchData();
      }
    );
  };
  changePageSize = (current, pageSize) => {
    this.setState(
      (state) => ({
        listQuery: {
          ...state.listQuery,
          pageNumber: 1,
          pageSize,
        },
      }),
      () => {
        this.fetchData();
      }
    );
  };
  handleDelete = (row) => {
    deleteItem({id:row.id}).then(res => {
      message.success("删除成功")
      this.fetchData();
    })
  }
  handleEdit = (row) => {
    this.setState({
      currentRowData:Object.assign({}, row),
      editModalVisible: true,
    });
  };

  handleOk = _ => {
    const { form } = this.formRef.props;
    form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      const values = {
        ...fieldsValue,
        'star': "".padStart(fieldsValue['star'], '★'),
        'date': fieldsValue['date'].format('YYYY-MM-DD HH:mm:ss'),
      };
      this.setState({ editModalLoading: true, });
      editItem(values).then((response) => {
        form.resetFields();
        this.setState({ editModalVisible: false, editModalLoading: false });
        message.success("编辑成功!")
        this.fetchData()
      }).catch(e => {
        message.success("编辑失败,请重试!")
      })
      
    });
  };

  handleCancel = _ => {
    this.setState({
      editModalVisible: false,
    });
  };
  render() {
    return (
      <div className="app-container">
        <Collapse defaultActiveKey={["1"]}>
          <Panel header="筛选" key="1">
            <Form layout="inline">
              <Form.Item label="标题:">
                <Input onChange={this.filterTitleChange} />
              </Form.Item>
              <Form.Item label="类型:">
                <Select
                  style={{ width: 120 }}
                  onChange={this.filterStatusChange}>
                  <Select.Option value="published">published</Select.Option>
                  <Select.Option value="draft">draft</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="推荐指数:">
                <Select
                  style={{ width: 120 }}
                  onChange={this.filterStarChange}>
                  <Select.Option value={1}>★</Select.Option>
                  <Select.Option value={2}>★★</Select.Option>
                  <Select.Option value={3}>★★★</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Button type="primary" icon="search" onClick={this.fetchData}>
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
          dataSource={this.state.list}
          loading={this.state.loading}
          pagination={false}
        >
          <Column title="序号" dataIndex="id" key="id" width={200} align="center" sorter={(a, b) => a.id - b.id}/>
          <Column title="标题" dataIndex="title" key="title" width={200} align="center"/>
          <Column title="作者" dataIndex="author" key="author" width={100} align="center"/>
          <Column title="阅读量" dataIndex="readings" key="readings" width={195} align="center"/>
          <Column title="推荐指数" dataIndex="star" key="star" width={195} align="center"/>
          <Column title="状态" dataIndex="status" key="status" width={195} align="center" render={(status) => {
            let color =
              status === "published" ? "green" : status === "deleted" ? "red" : "";
            return (
              <Tag color={color} key={status}>
                {status}
              </Tag>
            );
          }}/>
          <Column title="时间" dataIndex="date" key="date" width={195} align="center"/>
          <Column title="操作" key="action" width={195} align="center"render={(text, row) => (
            <span>
              <Button type="primary" shape="circle" icon="edit" title="编辑" onClick={this.handleEdit.bind(null,row)}/>
              <Divider type="vertical" />
              <Button type="primary" shape="circle" icon="delete" title="删除" onClick={this.handleDelete.bind(null,row)}/>
            </span>
          )}/>
        </Table>
        <br />
        <Pagination
          total={this.state.total}
          pageSizeOptions={["10", "20", "40"]}
          showTotal={(total) => `共${total}条数据`}
          onChange={this.changePage}
          current={this.state.listQuery.pageNumber}
          onShowSizeChange={this.changePageSize}
          showSizeChanger
          showQuickJumper
          hideOnSinglePage={true}
        />
        <EditForm
          currentRowData={this.state.currentRowData}
          wrappedComponentRef={formRef => this.formRef = formRef}
          visible={this.state.editModalVisible}
          confirmLoading={this.state.editModalLoading}
          onCancel={this.handleCancel}
          onOk={this.handleOk}
        />  
      </div>
    );
  }
}

export default TableComponent;
