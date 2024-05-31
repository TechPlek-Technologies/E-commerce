// library imports
import { useDispatch } from "react-redux";
import { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// language library
import "./i18n";

// custom imports
import { fetchSettings } from "./redux/slice/settings-slice";
import { generateCssVariables, useSetting } from "./utils/setting-utils";
import ScrollToTop from "./helpers/scroll-to-top";
import Home from "./page/Home";

function App() {
  const dispatch = useDispatch();
  const color = useSetting("color");

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

  return (
    <>
        <Router>
          <ScrollToTop>
            <Suspense
              fallback={
                <div className="flone-preloader-wrapper">
                  <div className="flone-preloader">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
            >
              <Routes>
                <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
                <Route path={process.env.PUBLIC_URL + "/home"} element={<Home />} />
              </Routes>
            </Suspense>
          </ScrollToTop>
        </Router>
    </>
  );
}

export default App;
