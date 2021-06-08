import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Todo } from "./Todo";

export function TodoPage() {
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  if (!isAuth) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <h1>Todo Page</h1>
      <Todo />
    </div>
  );
}
