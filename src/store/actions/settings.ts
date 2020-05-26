import * as types from "../action-types";
export interface IChangeSettingData {
  key: string,
  value:string
}
export const changeSetting = (data:IChangeSettingData) => {
  return {
    type: types.SETTINGS_CHANGE_SETTINGS,
    ...data,
  };
};
