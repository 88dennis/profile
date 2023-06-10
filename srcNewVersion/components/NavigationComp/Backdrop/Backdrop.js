import React from 'react';
import './Backdrop.css'
// import ContactInfo from '../ContactInfo/ContactInfo'
// import ButtonLinks from "../ButtonLinks/ButtonLinks"

const BackDropComp = props => {

return (
<div className="backdrop_dms" onClick={props.canClose}>
</div>
)
}

export default BackDropComp