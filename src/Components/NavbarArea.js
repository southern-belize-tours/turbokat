import NavbarIconContainer from './navbarIconContainer.js'; 
import NavbarTextContainer from './navbarTextContainer.js'; 
//Import Components
import React from 'react';   

import catLogo from './../Images/General/turbokat_icon.png' 

import { withRouter } from 'react-router';

const navbarText = "A third stimulus cat is coming.";
const navbarLinkText = "See if you're eligiable"; 
const navbarLink = "https://instagram.com/parsley.hasslehopper/"; 

class NavbarArea extends React.Component {

    constructor(props) {
        super();

        // this.state = {
        //     currentRoute: props.router.route,
        // }
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

// export default withRouter(NavbarArea);
export default NavbarArea;