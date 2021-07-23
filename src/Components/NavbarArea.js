import NavbarIconContainer from './navbarIconContainer.js'; 
import NavbarTextContainer from './navbarTextContainer.js'; 
//Import Components
import React from 'react';   

import catLogo from './../Images/General/turbokat_icon.png' 

const navbarText = "A third stimulus cat is coming.";
const navbarLinkText = "See if you're eligiable"; 
const navbarLink = ""; 

class NavbarArea extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <nav className="navbarContainer">
                <NavbarIconContainer img={catLogo}
                                     width="40px"
                                     height="40px"/> 
                <NavbarTextContainer text={navbarText}
                                     navbarLinkText={navbarLinkText}
                                     link={navbarLink} /> 
            </nav>
            );
    }
}

export default NavbarArea;