import * as types from "../action-types";
import { IMenuConfig } from "@/config/menuConfig";
import { AnyAction } from "redux";
export interface ITagsViewState {
  taglist: IMenuConfig[];
}
const initState = {
  taglist: [],
};
export default function app(
  state: ITagsViewState = initState,
  action: AnyAction
): ITagsViewState {
  switch (action.type) {
    case types.TAGSVIEW_ADD_TAG:
      const tag = action.tag;
      if (state.taglist.includes(tag)) {
        return state;
      } else {
        return {
          ...state,
          taglist: [...state.taglist, tag],
        };
      }
    case types.TAGSVIEW_DELETE_TAG:
      return {
        ...state,
        taglist: [...state.taglist.filter((item) => item !== action.tag)],
      };
    case types.TAGSVIEW_EMPTY_TAGLIST:
      return {
        ...state,
        taglist: [
          ...state.taglist.filter((item) => item.path === "/dashboard"),
        ],
      };
    case types.TAGSVIEW_CLOSE_OTHER_TAGS:
      return {
        ...state,
        taglist: [
          ...state.taglist.filter(
            (item) => item.path === "/dashboard" || item === action.tag
          ),
        ],
      };
    default:
      return state;
  }
}
