import * as types from "../action-types";
const initState = {
  taglist: [],
};
export default function app(state = initState, action) {
  switch (action.type) {
    case types.TAGSVIEW_ADD_TAGLIST:
      const tag = action.tag;
      if (state.taglist.includes(tag)) {
        return state;
      } else {
        return {
          ...state,
          taglist: [...state.taglist, tag],
        };
      }
    case types.TAGSVIEW_DELETE_TAGLIST:
      return {
        ...state,
        taglist: [...state.taglist.filter((item) => item !== action.tag)],
      };
    case types.TAGSVIEW_EMPTY_TAGLIST:
      return {
        ...state,
        taglist: [],
      };
    default:
      return state;
  }
}
