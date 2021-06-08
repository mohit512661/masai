import { Route, Switch } from "react-router-dom";
import { Login } from "../components/Login";
import { TodoPage } from "../components/TodoPage";
import { Routes } from "./Routes";

export function Main() {
  return (
    <>
      <Routes />
      <Switch>
        <Route exact path="/">
          <h1>Home Page</h1>
        </Route>
        <Route exact path="/todo">
          <TodoPage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route>
          <h1>Page not found</h1>
        </Route>
      </Switch>
    </>
  );
}
