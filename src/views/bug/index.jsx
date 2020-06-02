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
  loadResourceError = () => {
    let img = document.createElement("img");
    img.src = "/images/notExist.jpg";
    let parent  = document.querySelector(".app-container")
    parent.appendChild(img);
  }
  render() {
    const cardContent = `此页面是用来展示通过项目内埋点收集到的异常信息。你可以点击不同种类的异常按钮，来观察捕获到的异常信息。`;
    const { bugList } = this.props
    return (
      <div className="app-container">
        <TypingCard title="Bug收集" source={cardContent} />
        <br />
        <Collapse defaultActiveKey={["1"]}> 
          <Panel header="报错" key="1">
            <Button type="primary" onClick={this.jsError}>jsError</Button>
            <Button type="primary" onClick={this.loadResourceError} style={{marginLeft:"20px"}}>资源加载异常</Button>
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
          <Column title="异常类型" dataIndex="errorType" key="errorType" width={160} />
          <Column title="url" dataIndex="url" key="url" width={150} />
          <Column title="异常信息" dataIndex="desc" key="desc" width={300} ellipsis={true}/>  
          <Column title="异常堆栈" dataIndex="stack" key="stack" width={300} ellipsis={true}/>  
          <Column title="操作元素" dataIndex="selector" key="selector" width={195} ellipsis={true}/>
          <Column title="userAgent" dataIndex="userAgent" key="userAgent" width={100} />
          <Column title="时间" dataIndex="timestamp" key="timestamp" width={100} render={(value) => timestampToTime(value)}/>
        </Table>
      </div>
    );
  }
}

export default connect((state) => state.monitor)(Bug);
