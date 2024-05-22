import React from "react";
import "./style.scss";

function ContactMap() {
  return (
    <div className="contactMap">
      <div className="form">
        <form action="#">
          <h3>
            FEEL FREE TO <span>CONTACT US</span>
          </h3>
          <textarea name="" id="" placeholder="Message"></textarea>
          <div className="inputs">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>

          <button>Send Now</button>
        </form>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d759.8912363030124!2d49.8462!3d40.37417!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307daee2cda66f%3A0x99f05ae9b4d92154!2sM.F.Axundov%20a.%20Az%C9%99rbaycan%20Milli%20Kitabxanas%C4%B1!5e0!3m2!1saz!2sus!4v1715421904193!5m2!1saz!2sus"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactMap;
