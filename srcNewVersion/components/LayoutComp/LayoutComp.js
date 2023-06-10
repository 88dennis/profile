import React from "react";
import "./LayoutComp.css";

const LayoutComp = (props) => {
  return (
    <div className="my_layout_main_div">
      <div className="my_layout_wrap">
        {props.children}
      </div>
    </div>
  );
};

export default LayoutComp;
