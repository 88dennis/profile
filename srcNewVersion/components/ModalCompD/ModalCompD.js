import React from "react";
import "./ModalCompD.css";
const ModalCompD = (props) => {

  let appLinkButton;
  let gitLinkButton;
  if (props.appLink) {
    appLinkButton = props.appLink;
    gitLinkButton = props.gitLink;
  }

  return (
    <div   className="modal_background">
      <div className="modal_wrapper container">
        {/* <img src="" alt="logo" className="modal_img" /> */}

        <div className="modal_content">
<div>
          <div className="mb-4"><h6>{props.title}</h6></div>

        <div className="projectInfo mb-4 container p-3">
            {props.projectInfo}
           
       
      
         </div>


         <section className="modal_actions">
             
            {gitLinkButton}
            {appLinkButton}
            <div className="spacer"></div>
            {props.canCancel && (
              <button className="modalButtons" onClick={props.onCancel}>
                {props.btnName1}
              </button>
            )}
            {/* {props.canConfirm && (
              <Link to="/portfolio">
                <button className="modalButtons" onClick={props.onConfirm}>
                  {props.btnName2}
                </button>
              </Link>
            )} */}
          </section>
        
          </div>

        </div>
      </div>
    </div>
  );
};

export default ModalCompD;
