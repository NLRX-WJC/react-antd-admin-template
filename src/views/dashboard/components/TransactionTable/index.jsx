import React, { Component } from "react";
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

class TransactionTable extends Component {
  state = {
    list: [],
  };
  fetchData = () => {
    transactionList().then((response) => {
      const list = response.data.data.items.slice(0, 13);
      this.setState({ list });
    });
  };
  componentDidMount() {
    this.fetchData();
  }
  render() {
    return (
      <Table
        columns={columns}
        dataSource={this.state.list}
        pagination={false}
      />
    );
  }
}

export default TransactionTable;
