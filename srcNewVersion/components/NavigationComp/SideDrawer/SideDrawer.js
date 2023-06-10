import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'sidedrawer';
    
    if(props.show) {
        drawerClasses = 'sidedrawer open';
    }
    return (
    <nav className={drawerClasses}>
    <div>{props.children}</div>
    </nav>
);
}

export default sideDrawer;





// import React from "react";
// import './SideDrawer.css'

// //to do javascript code before returning multiline jsx use curly braces
// const sideDrawerComp = (props) => {
    
//     let drawerClasses = 'side_drawer';
// //if the state of sideDrawerOpen is true; by using the prop show
//     if(props.show) {
//         drawerClasses = 'side_drawer open'
//     }

//     return(
// <nav className={drawerClasses}>

// <div>{props.children}</div>

//     {/* <ul style={{margin:"0"}}>
//         <li><a href="/">About Me</a></li>
//         <li><a href="/">Projects</a></li>
//         <li><a href="/">Games</a></li>
//         <li><a href="/">Home</a></li>
//         <li><a href="/">Main</a></li>
//         <li><a href="/">Test</a></li>
//         <li><a href="/">Modal</a></li>
        
//     </ul> */}
// </nav>
// );

// };


// export default sideDrawerComp