import React, { useState } from "react";
import "../components/ContactUs.css";
import NavBar from "./NavBar";


const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Do something with form data
      console.log("Form submitted!", name, email, subject, message);
      alert("Your message has been sent!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("An error occurred:", error);
      alert("There was an error submitting your message. Please try again.");
    }
  };

  return (
    <div >
      <NavBar/>
      <div class="container-fluid">
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group mt-4 mb-4">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-4 mb-4">
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="Subject*"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="form-group mt-4 mb-4">
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContactUs;
