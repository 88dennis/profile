import React, { useContext, useState, useEffect } from "react";
import NavigationComp from "../components/NavigationComp/NavigationComp";
import LayoutComp from "../components/LayoutComp/LayoutComp";
import ProfilePhotoComp from "../components/ProfilePhotoComp/ProfilePhotoComp";
import logo from "../images/profilepic.JPG";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import "./AboutMePage.css";
import ContactContentComp from "../components/ContactContentComp/ContactContentComp";
import ButtonLinks from "../components/ButtonLinks/ButtonLinks";

let isMounted = false;

const ContactPage = () => {
  const { handlePageChange } = useContext(GlobalContext);
  const [state, setState] = useState({
    modalShow: false,
    modalResume: false,
    sideDrawerOpen: false,
  });
  const [mount, setMount] = useState(false);

  let location = useLocation();

  useEffect(() => {
    isMounted = true;

    if (!mount) {
      setMount(!mount);
      if (isMounted) {
        if (location.pathname === "/contact") {
          handlePageChange("contact");
        }
      }
    }

    return () => {
      isMounted = false;
    };
  }, [mount, location.pathname, handlePageChange]);

  // MODAL CODE STARTS
  //   const modalShowHandler = () => {

  //     setState({
  //       ...state,
  //       modalShow: true
  //     });
  // }
  // const modalCancelHandler = () => {
  //     setState(
  //         {
  //           ...state,
  //             modalShow: false
  //         }
  //     )
  // }
  // const modalConfirmHandler = () => {
  //   setState({
  //     ...state,
  //     modalShow: false,
  //   });
  // };

  const modalResumeClickHandler = () => {
    setState({
      ...state,
      modalResume: false,
    });
  };
  // MODAL CODE ENDS
  return (
    <>
      <NavigationComp />

      <LayoutComp>
        <ProfilePhotoComp>
          <img className="profileimghome" src={logo} alt="Logo" />
        </ProfilePhotoComp>
        <ContactContentComp handlePageChange={handlePageChange} />
        <ButtonLinks
          modalResumeClick={modalResumeClickHandler}
          handlePageChange={handlePageChange}
        />
      </LayoutComp>
    </>
  );
};

export default ContactPage;
