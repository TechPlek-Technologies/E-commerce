import { Link } from "react-router-dom";
import ScrollTopBtn from "../components/footer/ScrollTopBtn";
import { useAllSetting } from "../utils/setting-utils";
import axios from "axios";
import { useRef } from "react";
import { setLoading } from "../redux/slice/loading-slice";

const Footer = () => {
  // dyanmic data
  const {
    logo = [],
    copyright = "",
    name = "",
    description = "",
    address = "",
    phoneFooter = "",
    phoneHeader = "",
    email = "",
    social = [],
  } = useAllSetting() || {};


  // static data to be removed 
  // const logo=[{name:"logo",url:"https://vedarma.com/wp-content/uploads/2023/12/Vedarma_logo-1.png" }];
  // const copyright="© 2024 - Vedarma";
  // // const name=""

  // const description="Vedarma Wellness Pvt. Ltd. is a Trusted Ayurvedic and Nutraceuticals Company guiding your journey towards natural, transformative well-being, through high-quality, safe, and effective products."

  // const address="Shiva Market, Pitampura, Delhi 110034";
  // const phoneFooter="+91 9315951993";
  // const phoneHeader="+91 9315951993";
  // const email="contact@vedarma.com";
  // const social={
  //   facebook:"https://www.facebook.com/vedarma1",
  //   instagram:"https://www.instagram.com/vedarma/",
  //   twitter:"https://x.com/vedarma1"

  // }

  // static data end

  const domain = process.env.REACT_APP_URL;
 const subscriberEmail = useRef(null);


  const postData = async () => {
    const response1 = await axios.post(`${domain}/subscribers`, { email:subscriberEmail.current.value || "" });
    if (response1.data.success) {
      setLoading(false);
      console.log("post",response1.data);
    }
    else{
      console.log("error");
    }
  };

  return (
    <footer className="main-footer bg-green text-white">
      <div className="container-fluid px-5">
        <div className="footer-top-newsletter py-45 mb-75">
          <div className="section-title">
            <h2 style={{ fontSize: "42px", fontWeight: "500" }}>
              Newsletter Subscribe
            </h2>
          </div>
          <form onSubmit={(e) => e.preventDefault()} action="#">
            <input type="email" ref={subscriberEmail} placeholder="Email Address" id="post" required="" />
            <button
              className="theme-btn"
              onClick={() => postData()}
            >
              subscribe now <i className="fas fa-angle-double-right" />
            </button>
          </form>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 order-md-1">
            <div className="footer-widget about-widget text-left">
              <div className="footer-logo mb-30">
                <Link href="/" style={{ background: "#204d00" }}>
                  <img
                    style={{ width: "250px" }}
                    alt={logo ? logo[0].name : "Logo"}
                    src={logo ? logo[0].url : ""}
                  />
                </Link>
              </div>
              <p className="mb-70">{description ? description : ""}</p>
              <div className="social-style-two pt-10">
                <Link>
                  <a href={social ? social.facebook : ""}>
                    <i className="fab fa-facebook-f" />
                  </a>
                </Link>
                <Link>
                  <a href={social ? social.instagram : ""}>
                    <i className="fab fa-instagram" />
                  </a>
                </Link>
                <Link>
                  <a href={social ? social.twitter : ""}>
                    <i className="fab fa-twitter" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 order-md-2">
            <div className="footer-widget menu-widget">
              <h4 className="footer-title">INFORMATION</h4>
              <ul>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/cancellation-refund-policy"}
                  >
                    <a>Cancellation & Refund Policy</a>
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/privacy-policy"}>
                    <a>Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/terms-and-conditions"}>
                    <a>Term and Conditions</a>
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL + "/shipping-and-delivery-policy"
                    }
                  >
                    <a>Shipping And Delivery Policy</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 order-md-2">
            <div className="footer-widget menu-widget">
              <h4 className="footer-title">USER HELPFUL</h4>
              <ul>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/about"}>
                    <a>About Us</a>
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/shop"}>
                    <a>Shop</a>
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/hair-problems"}>
                    <a>Shop By Concern</a>
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/blog"}>
                    <a>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/contact-us"}>
                    <a>Contact Us</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 order-md-3">
            <div className="footer-widget contact-widget">
              <h4 className="footer-title">Contact Us</h4>
              <ul>
                <li>
                  <i className="fal fa-map-marker-alt" />
                  {address ? address : ""}
                </li>
                <li>
                  <i className="far fa-phone" />
                  <a href={`calto:${phoneHeader}`}>
                    {phoneHeader ? phoneHeader : ""}
                  </a>
                </li>
                <li>
                  <i className="far fa-phone" />
                  <a href={`calto:${phoneFooter}`}>
                    For Doctor Consultation <br />{" "}
                    {phoneFooter ? phoneFooter : ""} <br /> Timing - 12:00 -
                    4:00 p.m{" "}
                  </a>
                </li>
                <li>
                  <i className="far fa-envelope" />
                  <a href={`mailto:${email}`}>{email ? email : ""}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright-area pt-25 pb-10">
          <p>
            {copyright ? copyright : ""}. All Rights Reserved. Developed by{" "}
            <a href="https://www.techplek.com/">TechPlek Technologies</a>.
          </p>
          <ul className="footer-menu">
            <li>
              <img alt="" src="/assets/img/footer.webp" />
            </li>
          </ul>
          {/* Scroll Top Button */}
          <ScrollTopBtn />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
