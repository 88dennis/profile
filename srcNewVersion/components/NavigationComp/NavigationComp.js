import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import PageLinks from "./PageLinks/PageLinks";
import SideDrawerBackdrop from "./SideDrawerBackdrop/SideDrawerBackdrop";
import { GlobalContext } from "../../context/GlobalState";
//user
//logoutuser

// const [state, setState] = React.useState({
//     modalShow: false,
//     modalResume: false,
//     sideDrawerOpen: false,
//     // currentPage: "Transactions",
//   });
// let isMounted = false;
const NavigationComp = () => {
  const {
    logoutUser,
    handlePageChange,
    currentPage,
    sideDrawerOpen,
    drawerToggleClickHandler,
    drawerBackdropClickHandler,
  } = useContext(GlobalContext);

  let historia = useLocation();
  let homeLinkText = "Home";
  let aboutLinkText = "About";
  // let landingLinkText = "Hello!";
  let contactLinkText = "Contact";
  let portfolioLinkText = "Portfolio";
  console.log(historia, "USE LOCATION");
  const iconStyle = {
    iconFont: {
      fontSize: "20px",
      paddingBottom: "5px",
      cursor: "pointer",
      marginLeft: "10px", 
      color: "rgb(248, 248, 248)"
    },
  };
  let sideDrawerBackdrop;
  let toolBarLeftIcon;
  let nameOfPage;

  if (sideDrawerOpen) {
    sideDrawerBackdrop = (
      <SideDrawerBackdrop
        drawerBackdropClickHandler={drawerBackdropClickHandler}
      />
    );
  }

  if (
    currentPage === "landing" ||
    historia.pathname === "/"
    // ||
    // window.location.pathname ===
    //   ("/" ||
    //     "https://portfolio-dennis-mern-dev.herokuapp.com/" ||
    //     "https://portfolio-dennis-mern-dev.herokuapp.com")
  ) {
    toolBarLeftIcon = (
      <i
        className="terminal icon"
        style={iconStyle.iconFont}
        onClick={() => handlePageChange("landing")}
      ></i>
    );
    nameOfPage = "Hello!";
  } else if (
    currentPage === "home" ||
    historia.pathname === "/home"
    // ||
    // window.location.pathname ===
    //   ("/home" ||
    //     "https://portfolio-dennis-mern-dev.herokuapp.com/home" ||
    //     "https://portfolio-dennis-mern-dev.herokuapp.com/home/")
  ) {
    toolBarLeftIcon = (
      <i
        className="home icon"
        style={iconStyle.iconFont}
        onClick={() => handlePageChange("home")}
      ></i>
    );
    nameOfPage = "Home";
  } else if (
    currentPage === "portfolio" ||
    historia.pathname === "/portfolio"
    // ||
    // window.location.pathname ===
    //   ("/portfolio" ||
    //     "https://portfolio-dennis-mern-dev.herokuapp.com/portfolio" ||
    //     "https://portfolio-dennis-mern-dev.herokuapp.com/portfolio/")
  ) {
    toolBarLeftIcon = (
      <i
        className="code icon"
        style={iconStyle.iconFont}
        onClick={() => handlePageChange("portfolio")}
      ></i>
    );
    nameOfPage = "Portfolio";
  } else if (
    currentPage === "about" ||
    historia.pathname === "/about"
    // ||
    // window.location.pathname ===
    //   ("/about" ||
    //     "https://portfolio-dennis-mern-dev.herokuapp.com/about" ||
    //     "https://portfolio-dennis-mern-dev.herokuapp.com/about/")
  ) {
    toolBarLeftIcon = (
      <i
        className="user secret icon"
        style={iconStyle.iconFont}
        onClick={() => handlePageChange("about")}
      ></i>
    );
    nameOfPage = "About";
  } else if (
    currentPage === "contact" ||
    historia.pathname === "/contact"
    // ||
    // window.location.pathname ===
    //   ("/contact" ||
    //     "https://portfolio-dennis-mern-dev.herokuapp.com/contact" ||
    //     "https://portfolio-dennis-mern-dev.herokuapp.com/contact/")
  ) {
    toolBarLeftIcon = (
      <i
        className="address book icon"
        style={iconStyle.iconFont}
        onClick={() => handlePageChange("contact")}
      ></i>
    );
    nameOfPage = "Contact";
  }

  return (
    <>
      <Toolbar
        toolBarLeftIcon={toolBarLeftIcon}
        // nameOfPage={!user ? "You are logged out" : nameOfPage}
        nameOfPage={nameOfPage}
        toggleDrawer={drawerToggleClickHandler}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      >
        <ul>
          <li
            className="toolBarSpanName"
            style={{
              display:
                homeLinkText.toLowerCase() === nameOfPage.toLowerCase()
                  ? "none"
                  : "",
            }}
          >
            <Link to="/home" onClick={() => handlePageChange("home")}>
              {homeLinkText}
            </Link>
          </li>

          <li
            className="toolBarSpanName"
            style={{
              display:
                aboutLinkText.toLowerCase() === nameOfPage.toLowerCase()
                  ? "none"
                  : "",
            }}
          >
            <Link to="/about" onClick={() => handlePageChange("about")}>
              {aboutLinkText}
            </Link>
          </li>

          <li
            className="toolBarSpanName"
            style={{
              display:
                portfolioLinkText.toLowerCase() === nameOfPage.toLowerCase()
                  ? "none"
                  : "",
            }}
          >
            <Link to="/portfolio" onClick={() => handlePageChange("portfolio")}>
              {portfolioLinkText}
            </Link>
          </li>

          <li
            className="toolBarSpanName"
            style={{
              display:
                contactLinkText.toLowerCase() === nameOfPage.toLowerCase()
                  ? "none"
                  : "",
            }}
          >
            <Link to="/contact" onClick={() => handlePageChange("contact")}>
              {contactLinkText}
            </Link>
          </li>

          {/* <li
            className="toolBarSpanName"
            style={{
              display: landingLinkText.toLowerCase() === nameOfPage.toLowerCase() ? "none" : "",
            }}
          >
            <Link to="/" onClick={() => handlePageChange("landing")}>
              {landingLinkText}
            </Link>
          </li> */}
        </ul>
        {/* <Link to={`/${user.userName}/dashboard`}>
          <button title={!user ? "Login" :"Home"} className="modalButton">
         
            {!user ? "Login" :"Home"}
          </button>
        </Link> */}
        {/* <button title="Contact Info" className="modalButton" onClick={modalShowHandler}><i className="address book icon" style={iconStyle.iconFont}></i></button> */}
      </Toolbar>
      <SideDrawer show={sideDrawerOpen}>
        <PageLinks
          show={sideDrawerOpen}
          backToSamePage={drawerBackdropClickHandler}
          handleLogOut={logoutUser}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </SideDrawer>
      {sideDrawerBackdrop}
    </>
  );
};

export default NavigationComp;
