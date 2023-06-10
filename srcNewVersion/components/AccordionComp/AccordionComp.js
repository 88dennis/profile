import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

import "./AccordionComp.css";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "accordion_active" : "");
    setHeightState(
    //   setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
      setActive === "accordion_active" ? "0px" : `${content.current.scrollHeight}px`

    );
    setRotateState(
      setActive === "accordion_active" ? "accordion__icon" : "accordion__icon accordion_rotate"
    );
  }

  return (
    <div className="accordion__section">
      <button className={`my_accordion ${setActive}`} onClick={toggleAccordion}>
        <div className="accordion__title">{props.title}</div>
        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
        {/* {props.content} */}
      </div>
    </div>
  );
}

export default Accordion;
