import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

console.log(store.getState());
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </Provider>,
  rootElement
);
