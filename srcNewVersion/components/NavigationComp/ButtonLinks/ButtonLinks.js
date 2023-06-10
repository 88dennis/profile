import React from "react";
import "./ButtonLinks.css";
import iconLinkedIn from "../../images/linkedin-icon-8.png";
import iconGitHub from "../../images/githublogo.png";


import { Link } from "react-router-dom";

const buttonLinks = (props) => (
  <div className="buttonLinksWrap">
    <div className="buttonLinksCont">
      <section className="buttonLinksContent">
        {/* FROM PAGELINKS */}
        {props.children}

        {/* <button className="buttonLinksbtn">
          <Link to="/HomePage">
            <img className="iconsimg" src={iconHome} alt="cookie.png" />
          </Link>
        </button> */}
  
        <button className="buttonLinksbtn">
          <a
            href="https://www.linkedin.com/in/dennissarmiento80/"
            target="_blank"
          >
            <img
              className="iconsimg"
              src={iconLinkedIn}
              alt="linkedin-icon-8.png"
            />
          </a>
        </button>

        <button className="buttonLinksbtn">
          <a
            href="https://github.com/88dennis"
            target="_blank"
          >
            <img
              className="iconsimg"
              src={iconGitHub}
              alt="linkedin-icon-8.png"
            />
          </a>
        </button>

        {/* <button className="resumebtn" onClick={props.modalResumeClick}>
Resume</button> */}

        <a
          href="https://drive.google.com/file/d/1nwcoWqmfs4Tmwh_Qu04DrU6GXvRNr8T4/view?usp=sharing"
          target="_blank"
        >
          <button className="resumebtn">Resume</button>
        </a>
      </section>

      {/* <section className="buttonLinksBtn">
{props.goBack &&<button onClick={props.onGoBack}>Go Back</button>}
{props.logOut &&<button><a href="/">LOG OUT</a></button>}
</section> */}
    </div>
  </div>
);

export default buttonLinks;
