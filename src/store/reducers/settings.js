import * as types from "../action-types";
import defaultSettings from "@/defaultSettings";
const { showSettings, sidebarLogo, fixedHeader, tagsView } = defaultSettings;

const initState = {
  showSettings: showSettings,
  sidebarLogo: sidebarLogo,
  fixedHeader: fixedHeader,
  tagsView: tagsView,
};
export default function settings(state = initState, action) {
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
