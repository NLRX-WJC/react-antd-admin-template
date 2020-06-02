import * as types from "../action-types";
export const addBug = (bug) => {
  return {
    type: types.BUG_ADD_BUG,
    bug
  };
};