import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function LearnSection() {
  return (
    <>
      <div className="learnSection">
        <div className="texts">
          <h2>
            <span> READ </span> FROM HOME OR ANY WHERE ELSE IN WORLD
          </h2>
          <p>
            A digital library, also known as an e-library, is a collection of
            documents in an organized digital form, available on the internet or
            on disks. The purpose of an e-library is to store, access, and
            manage magazine articles, books, audio files, images, and video
            files. In the case of e-libraries, various data can be merged
            easily, which helps keep information up-to-date.
          </p>
          <Link to={"/login"}>
            <button>Get Started Now </button>
          </Link>
        </div>
        <div className="compImg"></div>
      </div>
    </>
  );
}

export default LearnSection;
