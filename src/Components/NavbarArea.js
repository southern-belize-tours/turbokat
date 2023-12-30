import NavbarIconContainer from './navbarIconContainer.js'; 
import NavbarTextContainer from './navbarTextContainer.js'; 
//Import Components
import React from 'react';   

import catLogo from './../Images/General/turbokat_icon.png' 

import { withRouter } from 'react-router';

const navbarText = "A third stimulus cat is coming.";
const spookyNavbarText = "A spooky Halloween is coming";
const chrimbusNavbarText = "A white Christmas is coming"
const navbarLinkText = "See if you're eligiable"; 
const spookyNavbarLinkText = "See if you are eligable for the underworld"
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
            <nav className={`navbarContainer ${this.props.spooky && "spooky"} ${this.props.chrimbus && "chrimbus"}`}>
                <NavbarIconContainer img={catLogo}
                    spooky = {this.props.spooky}
                    chrimbus = {this.props.chrimbus}
                    width="40"
                    height="40"/> 
                <NavbarTextContainer text={this.props.spooky ? spookyNavbarText : this.props.chrimbus ? chrimbusNavbarText: navbarText}
                                     navbarLinkText={this.props.spooky ? spookyNavbarLinkText : navbarLinkText}
                                     link={navbarLink} /> 
            </nav>
            );
    }
}

// export default withRouter(NavbarArea);
export default NavbarArea;