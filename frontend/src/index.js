import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import PersistProvider from "./redux/providers/persist-provider";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistProvider>
        <App />
      </PersistProvider>
    </Provider>
  </React.StrictMode>
);
