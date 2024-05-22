import React from "react";
import "./style.scss";

function ContactSection() {
  return (
    <div className="contactSection">
      <div className="contact">
        <div className="header">
          <h2>GET IN TOUCH</h2>
          <p>
            Large online bookstores offer used books for sale, too. Individuals
            wishing to sell their used Books
          </p>
        </div>
      </div>
      <div className="contactIcons">
        <div className="icons">
          <div className="icon">
            <i className="fa-light fa-phone-volume"></i>
          </div>
          <h3>CALL US AT</h3>
          <p>0032 987 65 432</p>
          <p>+00 123 45 678</p>
        </div>
        <div className="icons">
          <div className="icon">
            <i className="fa-light fa-location-dot"></i>
          </div>
          <h3>MAIL US AT</h3>
          <p>info@example.com</p>
          <p>abc@ebook.com</p>
        </div>
        <div className="icons">
          <div className="icon">
            <i className="fa-light fa-envelope"></i>
          </div>
          <h3>FIND US AT</h3>
          <p>
            Quisque ultricies luctus <br />
            nisi non dapibus ullam
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
