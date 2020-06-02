
import getLastEvent from '../utils/getLastEvent';
import getSelector from '../utils/getSelector';
import tracker from '../utils/tracker';

// 定义的错误类型码
const ERROR_RUNTIME = 1
const ERROR_SCRIPT = 2
const ERROR_STYLE = 3
const ERROR_IMAGE = 4
const ERROR_AUDIO = 5
const ERROR_VIDEO = 6
const ERROR_CONSOLE = 7
const ERROR_TRY_CATHC = 8

const LOAD_ERROR_TYPE = {
  SCRIPT: ERROR_SCRIPT,
  LINK: ERROR_STYLE,
  IMG: ERROR_IMAGE,
  AUDIO: ERROR_AUDIO,
  VIDEO: ERROR_VIDEO
}

const JS_TRACKER_ERROR_DISPLAY_MAP = {
  1: 'JS_RUNTIME_ERROR',
  2: 'SCRIPT_LOAD_ERROR',
  3: 'CSS_LOAD_ERROR',
  4: 'IMAGE_LOAD_ERROR',
  5: 'AUDIO_LOAD_ERROR',
  6: 'VIDEO_LOAD_ERROR',
  7: 'CONSOLE_ERROR',
  8: 'TRY_CATCH_ERROR'
}

export function injectJsError() {
    //监听全局未捕获的错误
    window.addEventListener('error', function (event) {//错误事件对象
        let lastEvent = getLastEvent();//最后一个交互事件
        //这是一个脚本加载错误
        const errorTarget = event.target
        if (errorTarget !== window && errorTarget.nodeName && LOAD_ERROR_TYPE[errorTarget.nodeName.toUpperCase()]) {
          tracker.send({
            kind: 'stability',//监控指标的大类
            errorType: JS_TRACKER_ERROR_DISPLAY_MAP[LOAD_ERROR_TYPE[errorTarget.nodeName.toUpperCase()]],//js或css资源加载错误
            desc: errorTarget.baseURI + '@' + (errorTarget.src || errorTarget.href),
            stack: 'no stack',
            selector: getSelector(errorTarget) //代表最后一个操作的元素
          });
        } else {
          const { message, filename, lineno, colno, error } = event;
          tracker.send({
            kind: 'stability',//监控指标的大类
            errorType: JS_TRACKER_ERROR_DISPLAY_MAP[ERROR_RUNTIME],//JS执行错误
            desc:`${message} at ${filename}:${lineno}:${colno}`,
            stack: error && error.stack ? error.stack : 'no stack',
            selector: lastEvent ? getSelector(lastEvent.path) : '' //代表最后一个操作的元素
          });
        }
    }, true);
    window.addEventListener('unhandledrejection', (event) => {
        let lastEvent = getLastEvent();//最后一个交互事件
        let message;
        let filename;
        let lineno = 0;
        let colno = 0;
        let stack = '';
        let reason = event.reason;
        if (typeof reason === 'string') {
          message = reason;
        } else if (typeof reason === 'object') {//说明是一个错误对象
          message = reason.message;
          if (reason.stack) {
            let matchResult = reason.stack.match(/at\s+(.+):(\d+):(\d+)/);
            filename = matchResult[1];
            lineno = matchResult[2];
            colno = matchResult[3];
          }
          stack = reason.stack;
        }
        tracker.send({
          kind: 'stability',//监控指标的大类
          errorType: JS_TRACKER_ERROR_DISPLAY_MAP[ERROR_RUNTIME],//JS执行错误
          desc:`${message} at ${filename}:${lineno}:${colno}`,
          stack,
          selector: lastEvent ? getSelector(lastEvent.path) : '' //代表最后一个操作的元素
        });
    }, true);
}