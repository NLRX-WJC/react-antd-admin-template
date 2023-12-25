import React, { useState, useEffect } from "react";
import { Table, Tag } from "antd";
import { transactionList } from "@/api/remoteSearch";

const columns = [
  {
    title: "Order_No",
    dataIndex: "order_no",
    key: "order_no",
    width: 200,
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    width: 195,
    render: text => (`$${text}`),
  },
  {
    title: "Status",
    key: "tag",
    dataIndex: "tag",
    width: 100,
    render: (tag) => (
      <Tag color={tag === "pending" ? "magenta" : "green"} key={tag}>
        {tag}
      </Tag>
    ),
  },
];

const TransactionTable = (props) => {

  const [state, setState] = useState({
    list: [],
  });


  const fetchData = () => {
    transactionList().then((response) => {
      const list = response.data.data.items.slice(0, 13);
      setState({ list });
    });
  };

  useEffect(() => {
    fetchData();

  }, []);

  return (
    <Table
      columns={columns}
      dataSource={state.list}
      pagination={false}
    />
  );
}

export default TransactionTable;
