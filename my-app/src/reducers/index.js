import { combineReducers } from "redux";
import submitValue from "./submitValue";
import currencyFetch from "./currencyFetch";

export default combineReducers({
  submitValue,
  currencyFetch
});
