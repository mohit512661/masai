import { combineReducers, createStore } from "redux";
import { TodoReducer } from "./Todos/TodoReducer";
import { AuthReducer } from "./Auth/AuthReducer";

const rootReducer = combineReducers({
  AuthReducer,
  TodoReducer
});
export const store = createStore(rootReducer);
