import { combineReducers } from "redux";
import user from "./user";
import app from "./app";

export default combineReducers({
  user,
  app
});
