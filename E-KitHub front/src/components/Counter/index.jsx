import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./style.scss";

function CounterApp() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="counterContainer">
          <div className="counts">
            <div className="count">
              <div className="icon">
              <i className="fa-light fa-file"></i>
              </div>
              <div className="info">
                <h1>
                  {counterOn && (
                    <CountUp start={0} end={1200} duration={3} delay={0.2} />
                  )}
                </h1>
                <p>Pages</p>
              </div>
            </div>
            <div className="count">
              <div className="icon">
              <i className="fa-light fa-book-open-cover"></i>
              </div>
              <div className="info">
                <h1>
                  {counterOn && (
                    <CountUp start={0} end={45} duration={3} delay={0.2} />
                  )}
                </h1>
                <p>Chapters</p>
              </div>
            </div>
            <div className="count">
              <div className="icon">
              <i className="fa-light fa-book-circle-arrow-up"></i>
              </div>
              <div className="info">
                <h1>
                  {counterOn && (
                    <CountUp start={0} end={3550} duration={3} delay={0.2} />
                  )}
                </h1>
                <p>Downloads</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
}

export default CounterApp;
