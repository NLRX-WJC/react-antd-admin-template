import * as types from "../action-types";
import { AnyAction } from "redux";

export interface IAppState {
  sidebarCollapsed: boolean;
  settingPanelVisible: boolean;
}

const initState: IAppState = {
  sidebarCollapsed: false,
  settingPanelVisible: false,
};

export default function app(
  state: IAppState = initState,
  action: AnyAction
): IAppState {
  switch (action.type) {
    case types.APP_TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarCollapsed: !state.sidebarCollapsed,
      };
    case types.APP_TOGGLE_SETTINGPANEL:
      return {
        ...state,
        settingPanelVisible: !state.settingPanelVisible,
      };
    default:
      return state;
  }
}
