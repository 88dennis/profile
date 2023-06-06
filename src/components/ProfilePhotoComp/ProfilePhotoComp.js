import React from 'react'
import './ProfilePhotoComp.css';


const ProfilePhotoComp = (props) => {
    return (
        <div className="profilepiccont">
        <div className="profilepiccont2">
          <div className="profilepiccirclewrap1">
            <div className="profilepiccirclewrap2">
            {props.children}
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProfilePhotoComp;
