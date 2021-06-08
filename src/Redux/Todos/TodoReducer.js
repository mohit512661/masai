import { loadData, saveData } from "../../utils/localStorage";
import { ADD_TODO } from "./ActionTypes";

const initState = {
  todo: loadData("todo") || []
};
export const TodoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      const updatedData = [...state.todo, payload];
      saveData("todo", updatedData);
      return {
        ...state,
        todo: updatedData
      };
    default:
      return state;
  }
};
