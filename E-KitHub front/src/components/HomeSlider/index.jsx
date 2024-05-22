import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

function HomeSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <>
      <div className="sliderImage">
        <Slider {...settings}>
          <div>
            <div className="bckImage1">
              <div className="text">
               
                <h1>A Paradise for <span> Book Lovers</span></h1>
                <p>
                Welcome to the Library, where every page holds a new adventure. Explore the world of books today<br /> and embark on a journey of knowledge and imagination!
                </p>
                <button>Read More</button>
              </div>
              <div className="bookImg">
                <img
                  src="https://eyecix.com/html/ereaders/extra-images/banner-thumb.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <div className="bckImage2">
              <div className="text2">
              <h1>
                  The Best Books
                </h1>
                <h2>Your e-book In Simple Way</h2>
                <p>
                Welcome to the Library, where every page holds a new adventure. Explore the world of books today<br /> and embark on a journey of knowledge and imagination!
                </p>
                <button>Read More</button>
              </div>
              <div className="imgGirl">
                <img
                  src="https://eyecix.com/html/ereaders/extra-images/banner-thumb2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default HomeSlider;
