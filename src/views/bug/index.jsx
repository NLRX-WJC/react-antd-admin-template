import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Collapse, Button,} from "antd";
import TypingCard from "@/components/TypingCard";
import { timestampToTime } from "@/utils"

const { Column } = Table;
const { Panel } = Collapse;

const obj = {};

class Bug extends Component {
  jsError = () => {
    console.log(obj.a.length);
  };
  render() {
    const cardContent = `此页面是用来展示通过项目内埋点收集到的异常信息。你可以点击不同种类报错按钮，来观察捕获到的不同的错误信息`;
    const { bugList } = this.props
    return (
      <div className="app-container">
        <TypingCard title="Bug收集" source={cardContent} />
        <br />
        <Collapse defaultActiveKey={["1"]}> 
          <Panel header="报错" key="1">
            <Button type="primary" onClick={this.jsError}>jsError</Button>
          </Panel>
        </Collapse>
        <br />
        <Table
          bordered
          rowKey={(record) => record.timestamp}
          dataSource={bugList}
          pagination={false}
        >
          <Column title="序号" dataIndex="id" key="id" width={60} render={(text,record,index) => index+1}/>
          <Column title="监控指标" dataIndex="kind" key="kind" width={80} />
          <Column title="错误类型" dataIndex="errorType" key="errorType" width={80} />
          <Column title="url" dataIndex="url" key="url" width={150} />
          <Column title="报错文件" dataIndex="filename" key="filename" width={195} />
          <Column title="错误堆栈" dataIndex="stack" key="stack" width={300} ellipsis={true}/>  
          <Column title="行:列" dataIndex="position" key="position" width={100} />
          <Column title="操作元素" dataIndex="selector" key="selector" width={195} ellipsis={true}/>
          <Column title="userAgent" dataIndex="userAgent" key="userAgent" width={100} />
          <Column title="时间戳" dataIndex="timestamp" key="timestamp" width={150} render={(value) => timestampToTime(value)}/>
        </Table>
      </div>
    );
  }
}

export default connect((state) => state.monitor)(Bug);
