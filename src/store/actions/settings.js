import * as types from "../action-types";
export const changeSetting = (data) => {
  return {
    type: types.SETTINGS_CHANGE_SETTINGS,
    ...data,
  };
};
