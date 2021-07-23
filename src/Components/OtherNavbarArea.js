import NavbarIconContainer from './navbarIconContainer.js'; 
import DesktopDropdownOptions from './DesktopDropdownOptions.js'; 
import SignInBtn from './SignInBtn.js'; 
//Import Components
import React from 'react';

import catLogo from './../Images/General/turbokat_icon.png' 

const options = []; 

class OtherNavbarArea extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <nav className="otherNavbarContainer">
                <NavbarIconContainer img={catLogo}
                                     height="60px"
                                     width="60px" /> 
                <DesktopDropdownOptions options={this.props.options} /> 
                <SignInBtn/> 
            </nav>
        );
    }
}

export default OtherNavbarArea;