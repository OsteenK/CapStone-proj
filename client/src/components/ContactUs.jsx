import React, { useState } from "react";
import "./ContactUs.css";
import NavBar from "./NavBar";
import Footer from "./Footer";


const ContactUs = () => {
  // States
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  // Event Handlers
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value
    })
  }
  // console.log(formData)

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Do something with form data
      fetch("http://localhost:3000/contact-us", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      alert("Your message has been sent!");
      // Reset the form
      setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
      });
    } catch (error) {
      console.error("An error occurred:", error);
      alert("There was an error submitting your message. Please try again.");
    }
  };

  return (
    <div >
      <NavBar/>
      <div class="contact container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="">Contact Us</div>
          </div>
        </div>
      </div>

      <div className="row p-5">
        <div className="col  ">
          <h1>
            Queries? Feedback? <br />
            Comments?
          </h1>
          <p>
            We'd love to hear from you! Send us your message by filling out the
            form.
          </p>
          <h1> Information</h1>
          <p>
            At our organization, we make it easy for you to connect with
            charities and make a difference. Simply reach out to us and we will
            help you find the right organizations to support their mission.
          </p>
          <h1>Contact Info</h1>
          <p>Address: Moi Ave, Bihi Towers, RM45, P.O Box 000-00</p>
          <p>
            Call:{" "}
            <a href="tel:+25472913433">+254-7291-34-33, +254-4565-34-23</a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:givehopecharities@gmail.com">
              givehopecharities@gmail.com
            </a>
          </p>
        </div>
        <div className="col ps-3 pe-3">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-4 mb-4">
              <input
                type="text"
                className="form-control  "
                id="name"
                placeholder="Name*"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mt-4 mb-4">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email*"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mt-4 mb-4">
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="Subject*"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mt-4 mb-4">
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
      </div>
      <Footer />
       </div>
  );
};

export default ContactUs;
