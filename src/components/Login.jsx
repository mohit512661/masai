import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginSuccess, loginFailure } from "../Redux/Auth/ActionCreator";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin" && password === "admin") {
      dispatch(loginSuccess("faketokenaccepted"));
    } else {
      dispatch(loginFailure("error occured"));
    }
  };
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  if (isAuth) {
    return <Redirect to="/todo" />;
  }
  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="enter username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="enter password"
        />
        <input type="submit" value="Login" />
      </form>
    </>
  );
}
