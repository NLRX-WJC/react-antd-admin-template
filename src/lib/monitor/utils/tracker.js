import { tracker } from "@/api/monitor";
import userAgent from "user-agent";
import store from "@/store";
import { addBug } from "@/store/actions"

function getExtraData() {
  return {
    title: document.title,
    url: window.location.href,
    timestamp: Date.now(),
    userAgent: userAgent.parse(navigator.userAgent).name,
  };
}
//gif图片做上传 图片速度 快没有跨域 问题，
class SendTracker {
  // send(data = {}) {
  //   let extraData = getExtraData();
  //   let logInfo = { ...extraData, ...data };

  //   // 图片打点
  //   const img = new window.Image();
  //   img.src = `${feeTarget}?d=${encodeURIComponent(JSON.stringify(logInfo))}`;
  // }
  send(data = {}) {
    let extraData = getExtraData();
    let logInfo = { ...extraData, ...data };
    tracker(logInfo);
    store.dispatch(addBug(logInfo));
  }
}

export default new SendTracker();
