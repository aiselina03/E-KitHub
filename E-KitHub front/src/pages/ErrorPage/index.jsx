import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";


function ErrorPage() {
  return (
    <>

      <div className="errorPage">
        <h1>404</h1>
        <h2>Oops! This Page is Not Found.</h2>
        <p>
          Sorry for the inconvenience. Go to our homepage or check out our
          latest solution for your finance and insurance needs.
        </p>
        <Link to={"/"}>
          <div className="btn">
            <p>Back to Home</p>
            <div className="opacity"></div>
          </div>
        </Link>
      </div>
 
    </>
  );
}

export default ErrorPage;
