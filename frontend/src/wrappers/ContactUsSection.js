// import GoogleMap from "../components/google-map";
import ContactForm from "../components/contact/ContactForm";
import ContactService from "../components/contact/ContactService";

const ContactUsSection = () => {
 

  return (
    <div className="contact-area pt-50 pb-100">
      <div className="container">
        <div className="custom-row-2">
          <ContactService/>

          <ContactForm/>
          
        </div>
        <div className="contact-map mb-10 pt-20">
          {/* <GoogleMap lat={28.723465905623414} lng={77.12422076144072} /> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
