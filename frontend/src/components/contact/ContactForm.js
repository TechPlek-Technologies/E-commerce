import { useState } from "react";

const ContactForm = () => {

    const [contactFormInfo, setContactFormInfo] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { id, value } = e.target;
        setContactFormInfo(prevState => ({
          ...prevState,
          [id]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
      
      };

  return (
    <div className="col-12 col-lg-8 col-md-7">
    <div className="contact-form">
      <div className="contact-title mb-30">
        <h2>Contact form</h2>
      </div>
      <form className="contact-form-style" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <input name="name" placeholder="First Name" id="firstName" type="text" required={true} onChange={handleChange}/>
          </div>
          <div className="col-lg-6">
            <input name="name" placeholder="Last Name" id="lastName" type="text" required={true} onChange={handleChange}/>
          </div>
          <div className="col-lg-12">
            <input name="email" placeholder="Email" id="email" type="email" required={true} onChange={handleChange}/>
          </div>
          <div className="col-lg-12">
            <input name="phone" placeholder="Phone Number" id="phoneNumber" type="tel" required={true} onChange={handleChange} />
          </div>
          <div className="col-lg-12">
            <textarea
              name="message"
              placeholder="How can we help you?"
              defaultValue={""}
              id="message"
              required={true} onChange={handleChange}
            />
            <button className="submit" type="submit">
              SEND
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default ContactForm;
