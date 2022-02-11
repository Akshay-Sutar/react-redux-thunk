import { combineReducers } from "redux";
import { TodoReducer } from "./todoReducers";

export const reducers = combineReducers({
  todo: TodoReducer,
});
