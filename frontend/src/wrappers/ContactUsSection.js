// import GoogleMap from "../components/google-map";
import ContactForm from "../components/contact/ContactForm";
import ContactService from "../components/contact/ContactService";

const ContactUsSection = () => {
 

  return (
    <div className="contact-area pt-50 pb-5">
      <div className="container">
        <div className="custom-row-2">
          <ContactService/>

          <ContactForm/>
          
        </div>
        <div className="contact-map mb-10 pt-20">
          {/* <GoogleMap lat={28.723465905623414} lng={77.12422076144072} /> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1749.8086479320104!2d77.12777658868993!3d28.70109259657345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03de88553e9b%3A0x4bef949a910c9dc2!2sShiva%20Market!5e0!3m2!1sen!2sin!4v1718168605561!5m2!1sen!2sin" width="100%" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
