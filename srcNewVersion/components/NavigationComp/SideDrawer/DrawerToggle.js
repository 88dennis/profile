import React from 'react';
import './DrawerToggle.css'

//THIS IS A STATELESS COMPONENT OR A FUNCTIONAL COMPONENT

const drawerToggleButtonComp = (props) => (

    <>
        <button className="toggle_button" onClick={props.click}>
            {/* <button className="toggle_button_line"></button>
            <button className="toggle_button_line"></button> */}
            {/* <div className="toggle_button_line"></div> */}

        </button>
    </>
);

export default drawerToggleButtonComp