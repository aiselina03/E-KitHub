import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="foot1">
          <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
          <p>
            Welcome to the Library, where every page holds a new adventure.
            Explore the world of books today and embark on a journey of
            knowledge and imagination!
          </p>
          <div className="mail">
            <input type="text" placeholder="Enter Your Email Address" />
            <button>Subscribe</button>
          </div>

          <div className="logos">
            <img src="/src/components/logo/ekithubağ.png" alt="" />
          </div>
        </div>
        <div className="foot2">
          <p> 2024, All Right Reserved - by<span> <Link to={"/"}> E-KitHub</Link></span></p>
          <div className="social">
            <a href="https://www.facebook.com/">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://az.instagram.com/">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://az.linkedin.com/">
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a href="https://www.youtube.com/">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
