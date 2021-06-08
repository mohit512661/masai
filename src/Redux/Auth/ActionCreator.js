import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./ActionTypes";

export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error
  };
};
