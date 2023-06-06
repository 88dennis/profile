import React from "react";
import "./ContactContentComp.css";
import Accordion from "../AccordionComp/AccordionComp";
const ContactContentComp = ({ handlePageChange }) => {
  return (
    <>
      <div className="contact_container col-12 col-md-6 offset-md-3 p-0">
        <div className="my_card_border_contact card mt-3 mb-2 p-4">
          <div className="about_me_div_contact">
            <h6 className="contact_heading mb-2">
              Hi I'm Dennis! You may reach me at the contact details below:{" "}
            </h6>
            <br />

            <Accordion title="Name" content="Dennis Sarmiento" />
            <Accordion
              title="Email"
              content="<a href='mailto:dmsarmiento80@gmail.com'>dmsarmiento80@gmail.com</a>"
            />
            <Accordion
              title="Phone"
              // content="
              // <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              // </br>
              // <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              // </br>
              // <p>Lorem ipsum dlor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              // "
              content="(206)-880-9228"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactContentComp;
