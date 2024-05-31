import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import PersistProvider from "./redux/providers/persist-provider";
import { store } from "./redux/store";

import 'animate.css';
// import 'swiper/swiper-bundle.min.css';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./assets/scss/styles.scss";

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
