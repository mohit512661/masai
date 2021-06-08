import { Link } from "react-router-dom";

export function Routes() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Link to="/">Home</Link>
      <Link to="/todo">Todo Page</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}
