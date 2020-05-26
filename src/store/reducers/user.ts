import * as types from "../action-types";
import { getToken } from "@/utils/auth";
import { AnyAction } from "redux";

export interface IUserState {
  name: string;
  role: string;
  avatar: string;
  token: string;
}

const initUserInfo: IUserState = {
  name: "",
  role: "",
  avatar: "",
  token: getToken(),
};

export default function user(
  state: IUserState = initUserInfo,
  action: AnyAction
): IUserState {
  switch (action.type) {
    case types.USER_SET_USER_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case types.USER_SET_USER_INFO:
      return {
        ...state,
        name: action.name,
        role: action.role,
        avatar: action.avatar,
      };
    case types.USER_RESET_USER:
      return {
        name: "",
        role: "",
        avatar: "",
        token: "",
      };
    default:
      return state;
  }
}
