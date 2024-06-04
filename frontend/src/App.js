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
import LoginRegister from "./page/LoginRegister";
import MyAccount from "./page/MyAccount";
import About from "./page/About";
import { fetchPages } from "./redux/slice/page-slice";
import Privacy from "./page/Privacy";
import TermsAndCondition from "./page/TermsAndCondition";
import Refund from "./page/Refund";
import ContactUs from "./page/ContactUs";
import { useAllHomeData } from "./utils/home-utils";
import Cart from "./page/Cart";
import Compare from "./page/Compare";
import Wishlist from "./page/Wishlist";
import Shop from "./page/Shop";
import { fetchProducts } from "./redux/slice/product-silce";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSettings());
    dispatch(fetchPages());
    dispatch(fetchProducts());
  }, [dispatch]);

  const color = useSetting("color");


  console.log(useAllHomeData());
//  const page = useAllPage();
//  console.log("page",page);
  
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
                <Route path={"/privacy-policy"} element={<Privacy/>} />
                <Route path={"/terms-and-conditions"} element={<TermsAndCondition/>} />
                <Route path={"/cancellation-refund-policy"} element={<Refund/>} />
                <Route path={"/contact-us"} element={<ContactUs/>} />
              <Route path={"/cart"} element={<Cart />} />
              <Route path={"/compare"} element={<Compare />} />
              <Route path={"/wishlist"} element={<Wishlist />} />
              <Route path={"/shop"} element={<Shop />} />
            </Routes>
          </Suspense>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
