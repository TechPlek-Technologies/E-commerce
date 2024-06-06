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
import "./assets/sass/styles.sass";
import "./assets/css/flaticon.min.css";
import "./assets/css/fontawesome-5.14.0.min.css";
import "./assets/css/slick.min.css";
import "./assets/css/style.css";
import "./assets/css/custom.css";

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
} else {
  console.log("Geolocation not supported");
}
function success(position) {
  console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
}

function error() {
  console.log("Unable to retrieve your location");
}

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
