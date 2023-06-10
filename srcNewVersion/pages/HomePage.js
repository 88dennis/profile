import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

import "./HomePage.css";


let isMounted = false;

const HomePage = () => {
  const { handlePageChange } = useContext(GlobalContext);
  const [mount, setMount] = useState(false);

  let location = useLocation();


  useEffect(() => {
    isMounted = true;

    if (!mount) {
      setMount(!mount);
      if (isMounted) {
        if (location.pathname === "/home") {
          handlePageChange("home");
        }
      }
    }

    return () => {
      isMounted = false;
    };
  }, [mount, location.pathname, handlePageChange]);
  return (
    <>
      <div className="mainpagewrap">
        <div className="circles">
          <div id="circle1" className="three-circles">
            <Link onClick={() => handlePageChange("about")} to="/about">
              <button id="btnid1" className="btn1">
                <div className="me-circle">
                  <h1 className="front-names">About Me</h1>
                </div>
              </button>
            </Link>
          </div>

          <div id="circle2" className="three-circles">
            <Link onClick={() => handlePageChange("portfolio")} to="/portfolio">
              <button id="btnid2" className="btn1">
                <div className="me-circle">
                  <h1 className="front-names">Portfolio</h1>
                </div>
              </button>
            </Link>
          </div>

          <div id="circle3" className="three-circles">
            <Link onClick={() => handlePageChange("contact")} to="/contact">
              <button id="btnid3" className="btn1">
                <div className="me-circle">
                  <h1 className="front-names">Contact</h1>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
