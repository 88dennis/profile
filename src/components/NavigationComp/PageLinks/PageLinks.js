import React from "react";
import "./PageLinks.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const PageLinks = (props) => {

  let location = useLocation();

  let xBtnCLass = "xBtn";
  if (props.show) {
    xBtnCLass = "xBtn show";
  }
  return (
    <section>
  

      <Link
        to={location.pathname}
        className={"listDiv notnow " + xBtnCLass}
        onClick={props.backToSamePage}
      >
        {"❌" || "x"}
      </Link>


      {/* START OF PAGELINKS ================================ */}
      <Link to="/">
        <div
          className={
            // (window.location.pathname ===
            // ("/" || "https://portfolio-dennis-mern-dev.herokuapp.com" || "https://portfolio-dennis-mern-dev.herokuapp.com/")
            //   ? "listDiv now active item"
            //   : "listDiv notnow") ||
            (props.currentPage === "landing"
              ? "listDiv now active item"
              : "listDiv notnow")
              ||
              (location.pathname === "/"
              ? "listDiv now active item"
              : "listDiv notnow")
          }
          onClick={() => props.handlePageChange("landing")}
        >
          <i className="terminal icon"></i> Landing Page
        </div>
      </Link>


      <Link to="/home">
        <div
          className={
            // (window.location.pathname ===
            // ("/home" || "https://portfolio-dennis-mern-dev.herokuapp.com/home" || "https://portfolio-dennis-mern-dev.herokuapp.com/home/")
            //   ? "listDiv now active item"
            //   : "listDiv notnow") ||
            (props.currentPage === "home"
              ? "listDiv now active item"
              : "listDiv notnow")
              ||
              (location.pathname === "/home"
              ? "listDiv now active item"
              : "listDiv notnow")
          }
          onClick={() => props.handlePageChange("home")}
        >
          <i className="home icon"></i> Home
        </div>
      </Link>

      <Link to="/about">
        <div
          className={
            // (window.location.pathname ===
            // ("/about" || "https://88dennis.github.io/portfolio-dennis-sarmiento-react-mern-dev/about" || "https://portfolio-dennis-mern-dev.herokuapp.com/about/")
            //   ? "listDiv now active item"
            //   : "listDiv notnow") ||
            (props.currentPage === "about"
              ? "listDiv now active item"
              : "listDiv notnow")
              ||
              (location.pathname === "/about"
              ? "listDiv now active item"
              : "listDiv notnow")
          }
          onClick={() => props.handlePageChange("about")}
        >
          <i className="user secret icon"></i> About
        </div>
      </Link>


      <Link to="/portfolio">
        <div
          className={
            // (window.location.pathname ===
            // ("/portfolio" || "https://portfolio-dennis-mern-dev.herokuapp.com/portfolio" || "https://portfolio-dennis-mern-dev.herokuapp.com/portfolio/")
            //   ? "listDiv now active item"
            //   : "listDiv notnow") ||
            (props.currentPage === "portfolio"
              ? "listDiv now active item"
              : "listDiv notnow")
              ||
              (location.pathname === "/portfolio"
              ? "listDiv now active item"
              : "listDiv notnow")
          }
          onClick={() => props.handlePageChange("portfolio")}
        >
          <i className="code icon"></i> Portfolio
        </div>
      </Link>



      <Link to="/contact">
        <div
          className={
            // (window.location.pathname ===
            // ("/contact" || "https://portfolio-dennis-mern-dev.herokuapp.com/contact" || "https://portfolio-dennis-mern-dev.herokuapp.com/contact/")
            //   ? "listDiv now active item"
            //   : "listDiv notnow") ||
            (props.currentPage === "contact"
              ? "listDiv now active item"
              : "listDiv notnow")
              ||
              (location.pathname === "/contact"
              ? "listDiv now active item"
              : "listDiv notnow")
          }
          onClick={() => props.handlePageChange("contact")}
        >
          <i className="address book icon"></i> Contact
        </div>
      </Link>



      {/* END OF PAGELINKS ================================ */}
    </section>
  );
};

export default PageLinks;
