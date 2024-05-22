import React, { useEffect, useState } from "react";
import HomeSlider from "../../components/HomeSlider";
import CounterApp from "../../components/Counter";
import LearnSection from "../../components/LearnSection";
import Services from "../../components/Services";
import Books from "../../components/Books";
import Scroll from "../../components/Scroll";
import "./style.scss";

function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2300);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loaderCenter">
          <div className="loader">
            <img src="https://www.msha.gov/sites/default/files/images/loading2.gif" alt="" />
          </div>
        </div>
      ) : (
        <>
          <div className="homePage">
            <HomeSlider />
            <CounterApp></CounterApp>
            <LearnSection />
            <Services />
            <Books />
            <Scroll />
          </div>
        </>
      )}
    </>
  );
}

export default Home;
