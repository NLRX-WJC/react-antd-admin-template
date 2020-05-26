import { combineReducers } from "redux";
import user, { IUserState } from "./user";
import app, { IAppState } from "./app";
import settings, { ISettinsState } from "./settings";
import tagsView, { ITagsViewState } from "./tagsView";

interface IRootState {
  user: IUserState;
  app: IAppState;
  settings: ISettinsState;
  tagsView: ITagsViewState;
}
export default combineReducers<IRootState>({
  user,
  app,
  settings,
  tagsView,
});
