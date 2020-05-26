import * as types from "../action-types";
import { IMenuConfig } from "@/config/menuConfig";
export const addTag = (tag:IMenuConfig) => {
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

export const deleteTag = (tag:IMenuConfig) => {
  return {
    type: types.TAGSVIEW_DELETE_TAG,
    tag
  };
};

export const closeOtherTags = (tag:IMenuConfig) => {
  return {
    type: types.TAGSVIEW_CLOSE_OTHER_TAGS,
    tag
  };
};