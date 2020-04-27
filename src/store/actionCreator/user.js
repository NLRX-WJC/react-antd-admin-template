import * as types from "../action-types";
import { reqUserInfo } from "@/api/user";
import { message } from "antd";
export default {
  getUserInfo(token) {
    return async (dispatch) => {
      reqUserInfo(token).then((response) => {
        const { data } = response;
        if (data.status === 0) {
          const userInfo = data.data;
          dispatch(this.setUserInfo(userInfo));
        } else {
          const msg = data.msg;
          message.error(msg);
        }
      });
    };
  },
  setToken(token) {
    return {
      type: types.USER_SET_TOKEN,
      token,
    };
  },
  setUserInfo(userInfo) {
    return {
      type: types.USER_SET_USER_INFO,
      ...userInfo,
    };
  },
  resetUser(userInfo) {
    return {
      type: types.USER_RESET_USER,
    };
  },
};
