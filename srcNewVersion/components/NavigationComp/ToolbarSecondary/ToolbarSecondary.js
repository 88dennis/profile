import React, { useEffect, useState } from "react";
import {Link } from "react-router-dom";
import "./ToolbarSecondary.css";
import DrawerToggle from "../SideDrawer/DrawerToggle";

let isMounted = false;
const ToolbarSecondary = (props) => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [mount, setMount] = useState(false);

  let styleVisible = {
    top: "60px",
    transition: "all .3s ease",
  };

  let styleNotVisible = {
    top: "0",
    transition: "all .3s ease",
  };

  let drawerShow = {
    // visibility:"visible",
    display:"flex"

  }

  let drawerHidden = {
    // visibility:"hidden",
    display:"none"

  }

  useEffect(() => {
    function onScroll(e) {
      setScrollTop(e.target.documentElement.scrollTop);
      // setScroll(window.pageYOffset);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    }
    window.addEventListener("scroll", onScroll);
    isMounted = true;
    if (!mount) {
      setMount(!mount);
      if (isMounted) {
      }
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      isMounted = false;
    };
  }, [scrollTop, mount]);

  // console.log(scrollTop)

  // console.log(scrolling)

  function isScrolling() {
    if (scrolling && scrollTop > 30) {
      // setShowNav(false);
      // setShowBurger(true);
      console.log(props.nameOfPage, "******** NAME OF PAGE")
      return true;
    } else {
      // setShowNav(true);
      return false;
    }
  }

  let homeLinkText = "Home";
  let aboutLinkText = "About";
  let contactLinkText = "Contact";
  let portfolioLinkText = "Portfolio";
  function goToLoc(){
    document.getElementById("jump_to_this_location").scrollIntoView({behavior: 'smooth'});
  }
  return (
    <header
      style={isScrolling() ? styleNotVisible : styleVisible}
      className="toolbar_secondary"
    >
      <nav className="toolbar_navigation">
        <button onClick={()=>goToLoc()}>GOTO</button>
      <div style={isScrolling() ? drawerShow : drawerHidden}>
        <div className="toolbar_navigation2">
          <div className="toolbar_logo">
            {/* <div className="toolbar_btns">{props.children}</div> */}

            <div>{props.toolBarLeftIcon} </div>
          </div>
          <div className="mainToolBarSpanName"> {props.nameOfPage}</div>

          <div className="toolbar_navigation_items">{props.children}</div>
          {/* <div className="spacer"></div> */}
          <div className="toolbar_navigation_icons">
            <Link aria-label="home "title="home" to="/home" onClick={()=>props.handlePageChange('home')}
            style={{
              display:
                homeLinkText.toLowerCase() === props.nameOfPage.toLowerCase()
                  ? "none"
                  : "",
            }}
            className="toobar_icon">
              <i className="home icon"></i>
            </Link>

            <Link aria-label="about "title="about"  to="/about" onClick={()=>props.handlePageChange('about')}
             style={{
              display:
                aboutLinkText.toLowerCase() === props.nameOfPage.toLowerCase()
                  ? "none"
                  : "",
            }}
            className="toobar_icon">
              <i className="toobar_icon user secret icon"></i>
            </Link>

            <Link aria-label="contact "title="contact"  to="/contact" onClick={()=>props.handlePageChange('contact')}
            style={{
              display:
                contactLinkText.toLowerCase() === props.nameOfPage.toLowerCase()
                  ? "none"
                  : "",
            }}
            className="toobar_icon">
              <i className="toobar_icon address book icon"></i>
            </Link>

            <Link aria-label="portfolio "title="portfolio" to="/portfolio" onClick={()=>props.handlePageChange('portfolio')}
             style={{
              display:
                portfolioLinkText.toLowerCase() === props.nameOfPage.toLowerCase()
                  ? "none"
                  : "",
            }}
            className="toobar_icon">
              <i className="toobar_icon code icon"></i>
            </Link>
          </div>
        </div>
        {/* <div className="spacer"></div> */}
      </div>


        <div style={isScrolling() ? drawerShow : drawerHidden}>
          <DrawerToggle click={props.toggleDrawer}></DrawerToggle>
        </div>


      </nav>
    </header>
  );
};

export default ToolbarSecondary;
