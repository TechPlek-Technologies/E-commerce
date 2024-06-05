import { Link } from "react-router-dom";
import ScrollTopBtn from "../components/footer/ScrollTopBtn";
import { useAllSetting } from "../utils/setting-utils";

const Footer = () => {
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

  return (
    <footer className="main-footer bg-green text-white">
      <div className="container">
        <div className="footer-top-newsletter py-80 mb-75">
          <div className="section-title">
            <h2>Newsletter Subscribe</h2>
          </div>
          <form onSubmit={(e) => e.preventDefault()} action="#">
            <input type="email" placeholder="Email Address" required="" />
            <button className="theme-btn">
              subscribe now <i className="fas fa-angle-double-right" />
            </button>
          </form>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 order-md-1">
            <div className="footer-widget about-widget text-center">
              <div className="footer-logo mb-30">
                <Link href="/">
                  <a>
                    <img
                      alt={logo ? logo[0].name : "Logo"}
                      src={logo ? logo[0].url : ""}
                    />
                  </a>
                </Link>
              </div>
              <p>{description ? description : ""}</p>
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
                  <Link to={process.env.PUBLIC_URL + "/cancellation-refund-policy"}>
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
                  <Link href="/">
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
                  <Link href="/shop">
                    <a>Shop</a>
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/hair-problems"}>
                    <a>Shop By Concern</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
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
                    For Doctor Consultation <br /> {phoneFooter ? phoneFooter : ""} <br /> Timing
                    - 12:00 - 4:00 p.m{" "}
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
