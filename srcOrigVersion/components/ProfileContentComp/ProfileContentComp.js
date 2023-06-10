import React from "react";
import { Link } from "react-router-dom";
import "./ProfileContentComp.css";
import Accordion from "../AccordionComp/AccordionComp";
const ProfileContentComp = ({ handlePageChange }) => {


  // const salesforceURL = () => {
  //   return (
  //     <a target="_blank" href="https://trailblazer.me/id/dmsarmiento">Trailblazer</a>
  //   )
  // }
  return (
    <>
      <div className="my_card_border card mt-3 mb-2 p-4">
        <div className="about_me_div">
          <h6 className="mb-2">Software Engineer</h6>
          <article className="mb-2">
            Working as a Software Engineer at Wells Fargo.
          </article>

          <article className="mb-2">
            I became a Full Stack React Web Developer last 2019, certified at
            the{" "}
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1QhZBQFCtF6s02nv2C6gX8yahuOIoBdQO/view"
              rel="noreferrer"
            >
              University of Washington in Seattle
            </a>
            .
          </article>
          <article className="mb-2">
            As a Software Engineer I've been non-stop in exploring, learning and
            building stuff. In my free time I love to work on creating code
            templates for future project use.{" "}
          </article>

          <h6 className="mb-2">Entrepreneur | Mechanical Engineer.</h6>

          <article className="mb-2">
            I've always been an engineer at heart. Attaining a Bachelor's degree
            in Mechanical Engineering, I am no stranger to engineering
            projects. I thrive working on the complexities of mechanical
            engineering projects through my own contracting company (Frontview
            Manpower Services Co.) and the build-outs for my fastfood business
            (RFC Food Services).
          </article>

          <article className="mb-2">
            My experience with running my companies lend itself well to
            effective teamwork and strategic thinking. You may check my
            applications out on my 
            <Link to="/portfolio" onClick={() => handlePageChange("portfolio")}>
              Portfolio Page
            </Link>{" "}
            or connect and learn more about me by clicking the icons below:
          </article>
          <h6 className="mb-2">Mentor</h6>
          <article className="mb-2">
            Me, my sister and a few great Software Engineers team up to maintain
            a humble Boot Camp. Please visit us at{" "}
            <a target="_blank" href="https://www.upliftcodecamp.com/"
            rel="noreferrer"
            >
              Uplift Code Camp
            </a>
          </article>


        </div>
      </div>


        <div className="my_card_border card mt-3 mb-2 p-4">
      <div className="about_me_div">      

        <h6 className="mb-2">Tech Stack, Skills and Qualifications</h6>

        <br/>


        <Accordion
        title="Full Stack"
        content="HTML 5, CSS, Bootstrap, Javascript, ReactJS, jQuery, Java, Express, Mongodb, Mongoose, Node.js, MySQL, SOQL, Heroku, Git, Github, EJS"
      />
      <Accordion
        title="Salesforce Skills"
        content="CRM, Apex, Aura Components, Lightning Web Components visit my trailhead at <a target='_blank' href='https://trailblazer.me/id/dmsarmiento'>Trailblazer</a>" 
      />
      <Accordion
        title="Other Qualifications"
        // content="
        // <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        // </br>
        // <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        // </br>
        // <p>Lorem ipsum dlor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        // "
        content="AutoCAD, Sketchup, Microsoft Office Suite, Adobe Photoshop"
        
      />
      </div>
      </div>

    </>
  );
};

export default ProfileContentComp;
