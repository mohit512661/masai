import { ADD_TODO } from "./ActionTypes";

export function addTodo(payload) {
  return {
    type: ADD_TODO,
    payload
  };
}
