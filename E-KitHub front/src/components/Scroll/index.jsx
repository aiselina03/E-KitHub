import React from "react";
import { useState, useEffect } from "react";
import "./style.scss";

function Scroll() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-to-btm" onClick={goToTop}>
      {showTopBtn && (
        <div className="icon-position icon-style">
          <i className="fa-light fa-up"></i>
        </div>
      )}
    </div>
  );
}

export default Scroll;
