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
  const { settingsData, loading, error } = useSelector(
    (state) => state.settings
  );

  useEffect(() => {
    dispatch(fetchSettings());
  }, [dispatch]);

  useEffect(() => {
    if (settingsData) {
      const cssVariables = generateCssVariables(settingsData.settings.color);
      const styleElement = document.createElement("style");
      styleElement.innerHTML = cssVariables;
      document.head.appendChild(styleElement);

    }
  }, [settingsData]);

  console.log(error, loading, settingsData);
  console.log(useSetting("favicon"));
  // const favicon = useSetting("favicon")[0]?.url;
  return (
    <>
      <SEO favicon={""}>
        <Router></Router>
      </SEO>
    </>
  );
}

export default App;
