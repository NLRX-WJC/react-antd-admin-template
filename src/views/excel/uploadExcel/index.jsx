import React, { useState } from "react";
import { Table } from "antd";
import UploadExcelComponent from "@/components/UploadExcel";
const UploadExcel = (props) => {

  const [state, setState] = useState({
    tableData: [],
    tableHeader: [],
  });

  const handleSuccess = ({ results, header }) => {
    setState({
      ...state,
      tableData: results,
      tableHeader: header,
    });
  };
  return (
    <div className="app-container">
      <UploadExcelComponent uploadSuccess={handleSuccess} />
      <br />
      <Table
        bordered
        columns={state.tableHeader.map((item) => ({
          title: item,
          dataIndex: item,
          key: item,
          width: 195,
          align: "center",
        }))}
        dataSource={state.tableData}
      />
    </div>
  );
}

export default UploadExcel;
