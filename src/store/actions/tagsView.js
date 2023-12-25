import * as types from "../action-types";
export const addTag = (tag) => {
  // console.log('add tag %0',tag);
  return {
    type: types.TAGSVIEW_ADD_TAG,
    tag
  };
};

export const emptyTaglist = () => {
  return {
    type: types.TAGSVIEW_EMPTY_TAGLIST
  };
};

export const deleteTag = (tag) => {
  // console.log('deleteTag tag %0',tag);
  return {
    type: types.TAGSVIEW_DELETE_TAG,
    tag
  };
};

export const closeOtherTags = (tag) => {
  return {
    type: types.TAGSVIEW_CLOSE_OTHER_TAGS,
    tag
  };
};