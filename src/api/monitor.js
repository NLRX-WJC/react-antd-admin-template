import request from "@/utils/request";

export function tracker(data) {
  return request({
    url: "/monitor",
    method: "post",
    data,
  });
}
