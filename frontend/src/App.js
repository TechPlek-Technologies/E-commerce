// library imports
import { useDispatch, useSelector } from "react-redux";
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
import Cart from "./page/Cart";
import Compare from "./page/Compare";
import Wishlist from "./page/Wishlist";
import Shop from "./page/Shop";
import { fetchProducts } from "./redux/slice/product-silce";
import { setLoading } from "./redux/slice/loading-slice";
import DiabetesCare from "./page/DiabetesCare";
import HairProblems from "./page/HairProblems";
import ProductDetails from "./page/ProductDetails";
import Checkout from "./page/Checkout";
import ShippingPolicy from "./page/ShippingPolicy";
import Blog from "./page/Blog";
import BlogDetails from "./page/BlogDetails";
import { fetchBlogs } from "./redux/slice/blog-slice";
import SwipeableEdgeDrawer from "./Drawer";
import BlogCategory from "./page/BlogCategory";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.loading);

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([
        dispatch(fetchSettings()),
        dispatch(fetchPages()),
        dispatch(fetchProducts()),
        dispatch(fetchBlogs()),
      ]);
      dispatch(setLoading(false));
    };

    fetchData();
  }, [dispatch, loading]);

  const color = useSetting("color");
  useEffect(() => {
    if (color) {
      const cssVariables = generateCssVariables(color);
      const styleElement = document.createElement("style");
      styleElement.innerHTML = cssVariables;
      document.head.appendChild(styleElement);
    }else{
      setLoading(false)
    }
  }, [color,dispatch]);


  if (loading) {
    return (
      <div className="flone-preloader-wrapper">
        <div className="flone-preloader">
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
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
              <Route path={"/product/:slug"} element={<ProductDetails />} />
              <Route path={"/checkout"} element={<Checkout />} />
              <Route path={"/"} element={<Home />} />
              <Route path={"/home"} element={<Home />} />
              <Route path={"/login-register"} element={<LoginRegister />} />
              <Route path={"/my-account"} element={<MyAccount />} />
              <Route path={"/about"} element={<About />} />
              <Route path={"/privacy-policy"} element={<Privacy />} />
              <Route
                path={"/terms-and-conditions"}
                element={<TermsAndCondition />}
              />
              <Route
                path={"/cancellation-refund-policy"}
                element={<Refund />}
              />
              <Route path={"/contact-us"} element={<ContactUs />} />
              <Route path={"/cart"} element={<Cart />} />
              <Route path={"/compare"} element={<Compare />} />
              <Route path={"/wishlist"} element={<Wishlist />} />
              <Route path={"/shop"} element={<Shop />} />
              <Route path={"/diabetes-care"} element={<DiabetesCare />} />
              <Route path={"/hair-problems"} element={<HairProblems />} />
              <Route path={"/shipping-and-delivery-policy"} element={<ShippingPolicy />} />
              <Route path={"/blog"} element={<Blog />} />
              <Route path={"/blog/:slug"} element={<BlogDetails/>} />
              <Route path={"/blog/category/:category"} element={<BlogCategory/>} />
            </Routes>
          </Suspense>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
