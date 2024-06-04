import GoogleMap from "../components/google-map";
import { useAllSetting } from "../utils/setting-utils";

const ContactUsSection = () => {
  const {
    address = "",
    phoneFooter = "",
    phoneHeader = "",
    email = "",
    social = [],
  } = useAllSetting() || {};

  return (
    <div className="contact-area pt-50 pb-100">
      <div className="container">
      <div className="contact-map mb-10">
          <GoogleMap lat={28.723465905623414} lng={77.12422076144072} />
        </div>
        <div className="custom-row-2">
          <div className="col-12 col-lg-4 col-md-5">
            <div className="contact-info-wrap">
              <div className="single-contact-info">
                <div className="contact-icon">
                  <i className="fa fa-phone" />
                </div>
                <div className="contact-info-dec">
                    <h6>Customer Service:​</h6>
                  <p>
                    <a href={`calto:${phoneHeader}`}>
                      {" "}
                      {phoneHeader ? phoneHeader : ""}
                    </a>
                  </p>
                </div>
              </div>
              <div className="single-contact-info">
                <div className="contact-icon">
                  <i className="fa fa-phone" />
                </div>
                <div className="contact-info-dec">
                    <h6>Doctor Consultation:​​</h6>
                  <p>
                    <a href={`calto:${phoneFooter}`}>
                      {phoneFooter ? phoneFooter : ""}
                    </a>
                  </p>
                </div>
              </div>
              <div className="single-contact-info">
                <div className="contact-icon">
                  <i className="fa fa-globe" />
                </div>
                <div className="contact-info-dec">
                <h6>Email:​​</h6>
                  <p>
                    <a href={`mailto:${email}`}>{email ? email : ""}</a>
                  </p>
                </div>
              </div>
              <div className="single-contact-info">
                <div className="contact-icon">
                  <i className="fa fa-map-marker" />
                </div>
                <div className="contact-info-dec">
                    <h6>Location:</h6>
                  <p> {address ? address : ""}</p>
                </div>
              </div>
              <div className="contact-social text-center">
                <h3>Follow Us</h3>
                <ul>
                  <li>
                    <a href={social ? social.facebook : ""}>
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href={social ? social.instagram : ""}>
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href={social ? social.twitter : ""}>
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8 col-md-7">
            <div className="contact-form">
              <div className="contact-title mb-30">
                <h2>Contact form</h2>
              </div>
              <form className="contact-form-style">
                <div className="row">
                  <div className="col-lg-6">
                    <input name="name" placeholder="First Name" type="text" />
                  </div>
                  <div className="col-lg-6">
                    <input name="name" placeholder="Last Name" type="text" />
                  </div>
                  <div className="col-lg-12">
                    <input name="email" placeholder="Email" type="email" />
                  </div>
                  <div className="col-lg-12">
                    <input name="phone" placeholder="Phone Number" type="tel" />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      name="message"
                      placeholder="How can we help you?"
                      defaultValue={""}
                    />
                    <button className="submit" type="submit">
                      SEND
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
