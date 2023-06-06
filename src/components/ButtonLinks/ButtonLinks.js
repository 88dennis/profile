import React from "react";
import "./ButtonLinks.css";
import iconLinkedIn from "../../images/linkedin-icon-8.png";
import iconGitHub from "../../images/githublogo.png";
import iconSalesforce from "../../images/salesforceicon.png";


const ButtonLinks = (props) => {
  return (
    <div className="buttonLinksWrap">
      <div className="buttonLinksCont">
        {/* <header className="buttonLinksHeader"><h1>{props.profilegreet}</h1></header> */}
        <section className="buttonLinksContent">
          {props.children}
          {/* 
<button onClick={()=>props.handlePageChange("home")} className="buttonLinksbtn"><Link to="/home">
<img className="iconsimg" src={iconHome} alt="cookie.png" /></Link></button> */}

          <button className="buttonLinksbtn">
            <a
              href="https://www.linkedin.com/in/dennissarmiento80/"
              target="_blank"
              rel="noreferrer"
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
              rel="noreferrer"
            >
              <img className="iconsimg" src={iconGitHub} alt="githublogo.png" />
            </a>
          </button>

          <button title="salesforce" className="buttonLinksbtn">
            <a
              href="https://trailblazer.me/id/dmsarmiento"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="iconsimg"
                src={iconSalesforce}
                alt="salesforceicon.png"
              />
            </a>
          </button>

          {/* <button className="resumebtn" onClick={props.modalResumeClick}>
Resume</button> */}

          <a
            href="https://drive.google.com/file/d/1SOWGtlP6diTdTNII81kFhHLiUcZgsuJX/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
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
};

export default ButtonLinks;
