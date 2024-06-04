
// library imports
import { useDispatch } from "react-redux";
import { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// language library
import "./i18n";

// custom imports
import { fetchSettings } from "./redux/slice/settings-slice";
import { generateCssVariables, useAllSetting, useSetting } from "./utils/setting-utils";
import ScrollToTop from "./helpers/scroll-to-top";
import Home from "./page/Home";
import { useAllHomeData, useCategory, useHome } from "./utils/home-utils";
import LoginRegister from "./page/LoginRegister";
import MyAccount from "./page/MyAccount";
import About from "./page/About";

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchSettings());
  }, [dispatch]);
  
  const color = useSetting("color");
  
  useEffect(() => {
    if (color) {
      const cssVariables = generateCssVariables(color);
      console.log("vavvvav", cssVariables);
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
                <Route path={"/"} element={<Home />} />
                <Route path={"/home"} element={<Home />} />
                <Route path={"/login-register"} element={<LoginRegister />} />
                <Route path={"/my-account"} element={<MyAccount />} />
                <Route path={"/about"} element={<About />} />
              </Routes>
            </Suspense>
          </ScrollToTop>
        </Router>
    </>
  );
}

export default App;
