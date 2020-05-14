import { combineReducers } from "redux";
import user from "./user";
import app from "./app";
import settings from "./settings";
import tagsView from "./tagsView";

export default combineReducers({
  user,
  app,
  settings,
  tagsView,
});
