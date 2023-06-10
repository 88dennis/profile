import React, { useRef, useEffect, useState } from "react";
import projectData from "../../projectData";
import ProjectsComp from "../ProjectsComp/ProjectsComp";
import Backdrop from "../NavigationComp/Backdrop/Backdrop"
import ModalCompD from "../ModalCompD/ModalCompD"
import "./LayoutSnapComp.css";

let isMounted = false;
const LayoutSnapComp = () => {
  const sectionTwoRef = useRef();
  const sectionThreeRef = useRef();
  const sectionOneRef = useRef();

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [yRefTwo, setYrefTwo] = useState(0);
  const [yRefThree, setYrefThree] = useState(0);
  const [yRefOne, setYrefOne] = useState(0);

  const [showBackToTopBtn, setShowBackToTopBtn] = useState(false);

  const [mount, setMount] = useState(false);

  const [state, setState]=useState({
      modalShow: false,
      modalShowAppInfo: false,
      sideDrawerOpen: false,
      projectId: "",
      projectName: "",
      projectInfo: "",
      projectModalLink: "",
      projectImage: "",
      projectGitimage: "",
      projectGitHubLink: "",

  })
  //   }, [sectionTwoRef])

  // const onButtonClickToTop = () => {
  // //  window.scrollTo(0,0)
  // sectionOneRef.current.scrollIntoView({
  //   top: 70,
  //   behavior: "smooth",
  //   block: "start",
  //   // alignTo:true
  //   inline: "start",
  // });
  // };


    // MODAL CODE STARTS




    const projectBtnHandler = (projectD, id) => {
      if(projectD && projectD.length !==0){
        const project = projectD.find(project => project._id === id);
        setState({
          ...state,
          projectId: id,
          projectName: project.name,
          projectInfo:project.projectInfo,
          projectModalLink: project.projectLink,
          projectImage:project.image,
          projectGitimage:project.gitimage,
          projectGitHubLink:project.gitHubLink,
          modalShowAppInfo:true
        })
        
  
      }
      
     
  }
//     const modalShowHandler = () => {
      
// setState({
//   ...state,
//   modalShow:true
// });
//   }

  const modalCancelHandler = () => {
setState(
          {
            ...state,
              modalShow: false,
              modalShowAppInfo: false
          }
      )
  }
  const modalConfirmHandler = () => {
setState(
          {
            ...state,
              modalShow: false,
              modalShowAppInfo: false
          }
      )
  }


  // MODAL CODE ENDS

  // const onButtonClickToSecond = () => {
  //   //  window.scrollTo(0,0)
  //   if (sectionTwoRef && sectionTwoRef.current) {
  //     sectionTwoRef.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "end",
  //       // alignTo:true
  //       inline: "nearest",
  //     });
  //   }
  // };

  const onButtonClickToTop = () => {
    //USING JS
    // alert("hello")
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    //USING REF
    // console.log(sectionOneRef.current);
    // sectionOneRef.current.scrollIntoView({
    //   behavior: "smooth",
    //   block: "end",
    //   // alignTo:true
    //   inline: "nearest",
    // });
  };

  // const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

  // const executeScroll = () => scrollToRef(myRef)

  // function scrollTo() {
  //   var elmnt = document.getElementById("my_content2");
  //   elmnt.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // }

  // const onClickBacktoTop = () => {
  //  window.scrollTo({
  //    top:70,
  //    behavior:"smooth"
  //  })
  // };

  // const styleVisible = {
  //   top: "0",
  //   transition: "all .3s ease",
  // };

  // const styleNotVisible = {
  //   top: "-120px",
  //   transition: "all .3s ease",
  // };

  useEffect(() => {
    isMounted = true;
    let sectionElements = document.getElementsByClassName("sectionClass");
    let sectionButtons = document.getElementsByClassName("sectionButtons");
    function onScroll(e) {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
      if (
        sectionOneRef &&
        sectionOneRef.current &&
        sectionTwoRef &&
        sectionTwoRef.current &&
        sectionThreeRef &&
        sectionThreeRef.current
      ) {
        const yOne = sectionOneRef.current.getBoundingClientRect().y;
        const yTwo = sectionTwoRef.current.getBoundingClientRect().y;
        const yThree = sectionThreeRef.current.getBoundingClientRect().y;
        setYrefOne(yOne);
        setYrefTwo(yTwo);
        setYrefThree(yThree);
        if (yRefTwo < 1 || yRefThree < 1) {
          setShowBackToTopBtn(true);
        } else {
          setShowBackToTopBtn(false);
        }
      }
    }

    window.addEventListener("scroll", onScroll);

    function execFunc(index) {
      if (sectionElements && sectionButtons) {
        if (
          sectionButtons[index].innerHTML === "Games" &&
          sectionElements[index].title === "Games"
        ) {
          sectionElements[index].scrollIntoView({
            behavior: "smooth",
          });
        } else if (
          sectionButtons[index].innerHTML === "Projects" &&
          sectionElements[index].title === "Projects"
        ) {
          sectionElements[index].scrollIntoView({
            behavior: "smooth",
          });
        } else if (
          sectionButtons[index].innerHTML === "Templates" &&
          sectionElements[index].title === "Templates"
        ) {
          sectionElements[index].scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    }

    if (!mount) {
      setMount(!mount);
      if (isMounted) {
        for (let i = 0; i < sectionElements.length; i++) {
          sectionButtons[i].addEventListener("click", function () {
            execFunc(i);
          });
        }
      }
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      for (let i = 0; i < sectionElements.length; i++) {
        sectionButtons[i].removeEventListener("click", function () {
          execFunc(i);
        });
      }
      isMounted = false;
    };
  }, [mount, scrollTop, yRefThree, yRefTwo]);

  // console.log(scrollTop)
  // console.log(scrolling)
  // console.log(yRefTwo, "yRef");
  //   console.log(yRefThree, "THREE");
  // console.log(showBackToTopBtn, "yRef");

  // function isScrolling() {
  //   if (scrolling && scrollTop > 30) {
  //     // setShowNav(false);
  //     return true;
  //   } else {
  //     // setShowNav(true);
  //     return false;
  //   }
  // }


  let appLink;
        let gitLink;

        if (state.modalShowAppInfo) {
            appLink = <a href={!state.projectModalLink ? state.projectGitHubLink : state.projectModalLink} target="_blank" rel="noreferrer"><button className="modalButtons appLinkBtn">
              {!state.projectModalLink ? "Git" : "Open App"}</button></a>
            gitLink = <a href={state.projectGitHubLink} target="_blank" rel="noreferrer"><button className="buttonLinksbtn"><img className="iconsimg" src={state.projectGitimage} alt="github"></img></button></a>

        }

  return (
    <>
   
     
    <div className="snap_wrapper">
{/* MODAL CODE STARTS */}
{state.modalShowAppInfo ? <Backdrop canClose={modalCancelHandler}></Backdrop> : null}
{state.modalShowAppInfo ? <ModalCompD projectInfo={state.projectInfo} gitLink={gitLink} appLink={appLink} title={state.projectName} btnName1="Back" btnName2="Home" canCancel canConfirm onCancel={modalCancelHandler} onConfirm={modalConfirmHandler}
                    /> : null}
                    {/* MODAL CODE ENDS */}
      <div className="section_buttons_wrap">
        <button className="sectionButtons">Games</button>
        <button className="sectionButtons">Projects</button>
        <button className="sectionButtons">Templates</button>
          {/* <button className="sectionButtons">Games</button>
          <button onClick={onButtonClickToSecond} className="sectionButtons">
            Projects
          </button>
          <button onClick={onButtonClickToSecond} className="sectionButtons">
            Templates
          </button> */}
      </div>
      <section
        ref={sectionOneRef}
        title="Games"
        className="snap_one sectionClass"
      >
        <div className="snap_content">
          <ProjectsComp 
          sectionName = "Games"
          projectData={projectData ? projectData.games : []}
          projectBtnHandler={projectBtnHandler}

          />
        </div>
      </section>

      <section
        title="Projects"
        ref={sectionTwoRef}
        id="my_content2"
        className="snap_two sectionClass"
      >
        <div className="snap_content">
       
        <ProjectsComp 
          sectionName = "Projects"
          projectData={projectData ? projectData.projects : []}
          projectBtnHandler={projectBtnHandler}
          />
        </div>
      </section>
      <section
        title="Templates"
        ref={sectionThreeRef}
        className="snap_three sectionClass"
      >
        
        <div className="snap_content">
        {showBackToTopBtn && (
          <div className="back_to_top_btn_wrap">
            <button className="back_to_top_btn_section" onClick={onButtonClickToTop}>Back To Top</button>
            </div>
          )}

          <ProjectsComp 
          sectionName = "Templates | Building"
          projectData={projectData ? projectData.templates : []}
          projectBtnHandler={projectBtnHandler}
          />
        </div>
      </section>
    </div>
    </>
  );
};

export default LayoutSnapComp;
