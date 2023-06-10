import React,{useState} from "react";
import { Link } from "react-router-dom";
import ModalCompD from '../ModalCompD/ModalCompD'
import "./ModalComp.css";

//GOES WITH A BACKDROP
const ModalComp = (props) => {
//   console.log(props.appLink);
//   console.log(props.gitLink, "asdasdasdadas");

//   let appLinkButton;
//   let gitLinkButton;
//   if (props.appLink) {
//     appLinkButton = props.appLink;
//     gitLinkButton = props.gitLink;
//   }

const[showModal, setShowModal] = useState(false);

const openModal =()=>{
    setShowModal(prev => !prev)
}

  return (
    <>
    <div className="modal_container">
        <button onClick={()=>openModal()} className="modal_button">modal</button>
       {showModal ? <ModalCompD 
        showModal={showModal}
        setShowModal={setShowModal}
        />:null}
    </div>


    
      {/* <div className="modal">
        <div className="modalHeader">
          <h1>{props.title}asdas</h1>
          <h1>{props.title}asdas</h1>

          <h1>{props.title}asdas</h1>
          <h1>{props.title}asdas</h1>
          <h1>{props.title}asdas</h1>
          <h1>{props.title}asdas</h1>
          <h1>{props.title}asdas</h1>
          <h1>{props.title}asdas</h1>
          <h1>{props.title}asdas</h1>

        </div>
        <section className="modal_content">{props.children}</section>

        <section className="modal_actions">
          {gitLinkButton}
          {appLinkButton}
          {props.canCancel && (
            <button className="modalButtons" onClick={props.onCancel}>
              {props.btnName1}
            </button>
          )}
          {props.canConfirm && (
            <Link to="/HomePage">
              <button className="modalButtons" onClick={props.onConfirm}>
                {props.btnName2}
              </button>
            </Link>
          )}
        </section>
      </div> */}
    </>
  );
};

export default ModalComp;
