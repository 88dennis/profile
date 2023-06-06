import React, { useEffect, useState } from "react";
import {Link } from "react-router-dom";
import "./Toolbar.css";
import DrawerToggle from "../SideDrawer/DrawerToggle";

let isMounted = false;
const Toolbar = (props) => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [mount, setMount] = useState(false);

  const styleVisible = {
    top: "0",
    transition: "all .3s ease",
  };

  const styleNotVisible = {
    top: "-120px",
    transition: "all .3s ease",
  };

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

  return (
    <header
      style={isScrolling() ? styleNotVisible : styleVisible}
      className="toolbar"
    >
      <nav className="toolbar_navigation">
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

        <div>
          <DrawerToggle click={props.toggleDrawer}></DrawerToggle>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
