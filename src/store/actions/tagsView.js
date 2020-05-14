import * as types from "../action-types";
export const addTaglist = (tag) => {
  return {
    type: types.TAGSVIEW_ADD_TAGLIST,
    tag
  };
};

export const emptyTaglist = () => {
  return {
    type: types.TAGSVIEW_EMPTY_TAGLIST
  };
};

export const deleteTaglist = (tag) => {
  return {
    type: types.TAGSVIEW_DELETE_TAGLIST,
    tag
  };
};