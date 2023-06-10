import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import LayoutSnapComp from "../components/LayoutSnapComp/LayoutSnapComp";
import NavigationComp from "../components/NavigationComp/NavigationComp";
import { useLocation } from "react-router-dom";

let isMounted = false;

const PortfolioPage = () => {
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
      <NavigationComp />

      <LayoutSnapComp />
    </>
  );
};

export default PortfolioPage;
