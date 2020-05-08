import React, { Component } from "react";
import { Table } from "antd";
import UploadExcelComponent from "@/components/UploadExcel";
class UploadExcel extends Component {
  state = {
    tableData: [],
    tableHeader: [],
  };
  handleSuccess = ({ results, header }) => {
    this.setState({
      tableData: results,
      tableHeader: header,
    });
  };
  render() {
    return (
      <div className="app-container">
        <UploadExcelComponent uploadSuccess={this.handleSuccess} />
        <br />
        <Table
          bordered
          columns={this.state.tableHeader.map((item) => ({
            title: item,
            dataIndex: item,
            key: item,
            width: 195,
            align: "center",
          }))}
          dataSource={this.state.tableData}
        />
      </div>
    );
  }
}

export default UploadExcel;
