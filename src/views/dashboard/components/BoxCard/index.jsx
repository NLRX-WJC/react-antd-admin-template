
import { useSelector } from "react-redux";

import { Card, Progress } from "antd";
import PanThumb from '@/components/PanThumb'
import Mallki from '@/components//Mallki'
import './index.less'

const BoxCard = (props) => {
  // const { avatar } = props
  const { avatar } = useSelector(state => state.user);
  return (
    <div className="box-card-component">
      <Card
        cover={
          <img
            alt="example"
            src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png"
            style={{ height: "480px" }}
          />
        }
      >
        <div style={{ position: 'relative' }}>
          <PanThumb image={avatar} className="panThumb" />
          <Mallki className="mallki-text" text="难凉热血" />
          <div style={{ paddingTop: "35px" }} className="progress-item">
            <span>Vue</span>
            <Progress percent={70} />
          </div>
          <div className="progress-item">
            <span>JavaScript</span>
            <Progress percent={18} />
          </div>
          <div className="progress-item">
            <span>Css</span>
            <Progress percent={12} />
          </div>
          <div className="progress-item">
            <span>ESLint</span>
            <Progress percent={100} />
          </div>
        </div>
      </Card>
    </div>
  );
}

// state.user
export default BoxCard;