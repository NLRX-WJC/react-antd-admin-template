import Clipboard from "clipboard";
import { message } from "antd";

function clipboardSuccess() {
  message.success("复制成功");
}

function clipboardError() {
  message.error("复制失败");
}

export default function handleClipboard(text: string, event: MouseEvent) {
  const clipboard = new Clipboard(event.target as Element, {
    text: () => text,
  });
  clipboard.on("success", () => {
    clipboardSuccess();
    clipboard.destroy();
  });
  clipboard.on("error", () => {
    clipboardError();
    clipboard.destroy();
  });
  (clipboard as any).onClick(event);
}
