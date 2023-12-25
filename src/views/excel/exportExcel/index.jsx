import React, { useState, useEffect } from "react";
import {
  Table,
  Tag,
  Form,
  Button,
  Input,
  Radio,
  Select,
  message,
  Collapse,
} from "antd";

import Icon from '@ant-design/icons';
import * as icons from '@ant-design/icons';

import { excelList } from "@/api/excel";
// import { icons } from "antd/es/image/PreviewGroup";


const { Panel } = Collapse;
const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    width: 200,
    align: "center",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: 200,
    align: "center",
  },
  {
    title: "Author",
    key: "author",
    dataIndex: "author",
    width: 100,
    align: "center",
    render: (author) => <Tag key={author}>{author}</Tag>,
  },
  {
    title: "Readings",
    dataIndex: "readings",
    key: "readings",
    width: 195,
    align: "center",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    width: 195,
    align: "center",
  },
];
const Excel = (props) => {

  const [isMounted, setMounted] = useState(false);
  const [state, setState] = useState({
    list: [],
    filename: "excel-file",
    autoWidth: true,
    bookType: "xlsx",
    downloadLoading: false,
    selectedRows: [],
    selectedRowKeys: [],
  });


  const fetchData = () => {
    excelList().then((response) => {
      const list = response.data.data.items;
      setState({ ...state, list });
    });
  };

  useEffect(() => {
    setMounted(true);
    fetchData();
    return () => {
      setMounted(false);
    };
  }, []);

  const onSelectChange = (selectedRowKeys, selectedRows) => {
    setState({ ...state, selectedRows, selectedRowKeys });
  };
  const handleDownload = (type) => {
    if (type === "selected" && state.selectedRowKeys.length === 0) {
      message.error("至少选择一项进行导出");
      return;
    }
    setState({
      ...state,
      downloadLoading: true,
    });
    import("@/lib/Export2Excel").then((excel) => {
      const tHeader = ["Id", "Title", "Author", "Readings", "Date"];
      const filterVal = ["id", "title", "author", "readings", "date"];
      const list = type === "all" ? state.list : state.selectedRows;
      const data = formatJson(filterVal, list);
      excel.export_json_to_excel({
        header: tHeader,
        data,
        filename: state.filename,
        autoWidth: state.autoWidth,
        bookType: state.bookType,
      });
      setState({
        ...state,
        selectedRowKeys: [], // 导出完成后将多选框清空
        downloadLoading: false,
      });
    });
  };
  const formatJson = (filterVal, jsonData) => {
    return jsonData.map(v => filterVal.map(j => v[j]))
  }
  const filenameChange = (e) => {
    setState({
      ...state,
      filename: e.target.value,
    });
  };
  const autoWidthChange = (e) => {
    setState({
      ...state,
      autoWidth: e.target.value,
    });
  };
  const bookTypeChange = (value) => {
    setState({
      ...state,
      bookType: value,
    });
  };
  const { selectedRowKeys } = state;
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <div className="app-container">
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="导出选项" key="1">
          <Form layout="inline">
            <Form.Item label="文件名:">
              <Input
                style={{ width: "250px" }}
                prefix={
                  <Icon component={icons["FileOutlined"]} style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="请输入文件名(默认excel-file)"
                onChange={filenameChange}
              />
            </Form.Item>
            <Form.Item label="单元格宽度是否自适应:">
              <Radio.Group
                onChange={autoWidthChange}
                value={state.autoWidth}
              >
                <Radio value={true}>是</Radio>
                <Radio value={false}>否</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="文件类型:">
              <Select
                defaultValue="xlsx"
                style={{ width: 120 }}
                onChange={bookTypeChange}
              >
                <Select.Option value="xlsx">xlsx</Select.Option>
                <Select.Option value="csv">csv</Select.Option>
                <Select.Option value="txt">txt</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                icon={<Icon component={icons["FileExcelOutlined"]} />}
                onClick={handleDownload.bind(null, "all")}
              >
                全部导出
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                icon={<Icon component={icons["FileExcelOutlined"]} />}
                onClick={handleDownload.bind(null, "selected")}
              >
                导出已选择项
              </Button>
            </Form.Item>
          </Form>
        </Panel>
      </Collapse>
      <br />
      <Table
        bordered
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={state.list}
        pagination={false}
        rowSelection={rowSelection}
        loading={state.downloadLoading}
      />
    </div>
  );
}

export default Excel;
