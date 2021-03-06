import { loadData, saveData } from "../../utils/localStorage";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./ActionTypes";

const token = loadData("token");
const initState = {
  isAuth: token ? true : false,
  token: ""
};

export const AuthReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      saveData("token", payload);
      return {
        ...state,
        isAuth: true,
        token: payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuth: false
      };
    default:
      return state;
  }
};
