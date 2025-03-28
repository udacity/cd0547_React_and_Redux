import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import tweets from "./tweets";
import loadingBar from "./loadingBar";

export default combineReducers({
  authedUser,
  users,
  tweets,
  loadingBar,
});
