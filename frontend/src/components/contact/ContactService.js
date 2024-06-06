import { useAllSetting } from "../../utils/setting-utils";


const ContactService = () => {

    const {
        address = "",
        phoneFooter = "",
        phoneHeader = "",
        email = "",
        social = [],
      } = useAllSetting() || {};

  return (
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
  )
}

export default ContactService;
