import { Fragment } from "react";
import SEO from "../components/Seo";
import LayoutOne from "../layouts/LayoutOne";
import ContactUsSection from "../wrappers/ContactUsSection";

const ContactUs = () => {
  return (
    <Fragment>
    <SEO
      titleTemplate="Contact Us"
    />

    <LayoutOne>

        <ContactUsSection/>

    </LayoutOne>
  </Fragment>
  )
}

export default ContactUs;
