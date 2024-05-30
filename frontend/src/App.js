// library imports
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// custom imports
import { fetchSettings } from "./redux/slice/settings-slice";
import { generateCssVariables, useSetting } from "./utils/setting-utils";

// css imports
import "./assets/scss/styles.scss";
import SEO from "./components/Seo";

function App() {
  const dispatch = useDispatch();
  const color=useSetting("color")

  useEffect(() => {
    dispatch(fetchSettings());
  }, [dispatch]);


  useEffect(() => {
    if (color) {
      const cssVariables = generateCssVariables(color);
      const styleElement = document.createElement("style");
      styleElement.innerHTML = cssVariables;
      document.head.appendChild(styleElement);

    }
  }, [color]);
  const favicon=useSetting("favicon");

  return (
    <>
      <SEO favicon={favicon[0].url}>
        <Router></Router>
      </SEO>
    </>
  );
}

export default App;
