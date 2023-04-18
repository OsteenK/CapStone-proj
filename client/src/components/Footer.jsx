import React from 'react';
import './Footer.css';
// import GiveHopeLogo from './give-hope-logo.png';

function Footer() {
    return (
      <footer>
        <div className="logo-container">
          <img src="/give-hope-logo.png" alt="Give Hope Logo" />
          <p>
          Every member of Give Hope is dedicated to breaking down barriers to education for girls around the world. We can achieve this by not just providing sanitary towels, but also providing clean water and sanitation facilities.

Join us in the movement for gender equality. Every donation, big or small, can make a difference.
            <a href="/join-us">Join us</a>
          </p>
        </div>
        <div className="contact-container">
          <h3>Contact Us</h3>
          <p>Email: info@givehope.org</p>
          <p>Telephone: 555-555-5555</p>
          <p>Address: 123 Main Street, Anytown USA</p>
          <a href="/get-in-touch">Get in touch</a>
        </div>
      </footer>
    );
  }

export default Footer;