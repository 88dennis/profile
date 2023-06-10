import React, { useEffect, useState, useContext } from "react";
import { Redirect, useLocation } from "react-router-dom";
import logo from "../../images/DS3BLACKNOBG.png";
import logo2 from "../../images/DS3BLACKNOBGNOSH.png";

import { GlobalContext } from "../../context/GlobalState";
import "./LandingComp.css";

let isMounted = false;
const LandingComp = () => {
  const { handlePageChange } = useContext(GlobalContext);
  const [mount, setMount] = useState(false);

  let location = useLocation();
  const [state, setState] = useState({
    btnmsg: "Welcome",
    showLogo: true,
    redirectTo: "",
    eyeBalls: [],
    xState: 0,
    yState: 0,
    isMouse: true,
  });

  useEffect(() => {
    isMounted = true;

    if (!mount) {
      setMount(!mount);
      if (isMounted) {
        if (location.pathname === "/") {
          handlePageChange("landing");
        }
      }
    }

    return () => {
      isMounted = false;
    };
  }, [mount, location.pathname, handlePageChange]);

  const styles = {
    divStyle: {
      fontSize: "25px",
      textAlign: "center",
      fontFamily: "arial",
      //   fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'",
      //   -webkit-font-smoothing: antialiased;
      //   -moz-osx-font-smoothing: grayscale;
      // color: "rgb(0, 120, 160)"
      color: "#333",
    },

    divStyle2: {
      fontSize: "20px",
      textAlign: "center",
      // color: "rgb(0, 120, 160)"
      color: "#333",
    },
  };

  function logMousePosition(e) {
    var eyeBalls = document.getElementsByClassName("eyeball");

    var xPos = (e.clientX * 100) / window.innerWidth + "%";
    var yPos = (e.clientY * 100) / window.innerHeight + "%";
    setState({
      ...state,
      xState: xPos,
      yState: yPos,
    });
    for (var i = 0; i < 2; i++) {
      eyeBalls[i].style.left = xPos;
      eyeBalls[i].style.top = yPos;
      eyeBalls[i].style.transform = "translate(-" + xPos + ",-" + yPos + ")";
    }
  }

  const handleShowLogo = () => {
    // const newState = { ...this.state }
    setState({
      ...state,
      showLogo: !state.showLogo,
    });
  };

  const handleClick = () => {
    handlePageChange("home");
    setState({
      redirectTo: "/home",
    });
  };

  // let hideLogo = {
  //   display: "flex",
  // };
  // let hideLogo2 = {
  //   display: "none",
  // };
  // if (!state.showLogo) {
  //   hideLogo = {
  //     display: "none",
  //   };

  //   hideLogo2 = { display: "flex" };
  // }

  if (state.redirectTo) {
    return <Redirect to={{ pathname: state.redirectTo }} />;
  }
  return (
    <div className="my_main_container" onMouseMove={(e) => logMousePosition(e)}>
      <div className="my_container">
        <div className="imgDiv">
          <img
            onMouseLeave={handleShowLogo}
            onMouseEnter={handleShowLogo}
            className="logoimghome"
            src={!state.showLogo ? logo2 : logo}
            alt="logo"
          />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="eyes">
          <div className="eye">
            <div className="eyeball"></div>
          </div>
          <div className="eye">
            <div className="eyeball"></div>
          </div>
        </div>

        {/* APP DESCRIPTION STARTS */}
        <div className="descwrap2">
          <div style={styles.divStyle}>
            <div>Looking for Web Designs?</div>
          </div>

          <div style={styles.divStyle2}>
            <p>DevelopRus | Design | Development</p>
          </div>
          <br></br>
        </div>
        {/* APP DESCRIPTION ENDS */}
        <div className="landingPageContainer">
          <div className="lanpagewrap">
            <div className="loginsignupbtnhomewrap">
              <button
                onClick={handleClick}
                onMouseEnter={() => setState({ btnmsg: "Go Inside!" })}
                onMouseLeave={() => setState({ btnmsg: "Welcome!" })}
                className="loginsignupbtnhome"
              >
                {state.btnmsg}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingComp;
