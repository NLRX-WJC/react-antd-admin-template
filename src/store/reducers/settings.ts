import * as types from "../action-types";
import defaultSettings from "@/defaultSettings";
import { AnyAction } from "redux";
const { showSettings, sidebarLogo, fixedHeader, tagsView } = defaultSettings;

export interface ISettinsState {
  showSettings: boolean;
  sidebarLogo: boolean;
  fixedHeader: boolean;
  tagsView: boolean;
}

const initState: ISettinsState = {
  showSettings: showSettings,
  sidebarLogo: sidebarLogo,
  fixedHeader: fixedHeader,
  tagsView: tagsView,
};

export default function settings(
  state: ISettinsState = initState,
  action: AnyAction
): ISettinsState {
  switch (action.type) {
    case types.SETTINGS_CHANGE_SETTINGS:
      const { key, value } = action;
      if (state.hasOwnProperty(key)) {
        return {
          ...state,
          [key]: value,
        };
      }
      return state;
    default:
      return state;
  }
}
