import NavbarIconContainer from './navbarIconContainer.js'; 
import DesktopDropdownOptions from './DesktopDropdownOptions.js'; 
import SignInBtn from './SignInBtn.js'; 
import CursedCaptcha from './CursedCaptcha.js'; 
//Import Components
import React from 'react';

import catLogo from './../Images/General/turbokat_icon.png' 

const options = []; 

class OtherNavbarArea extends React.Component {

    constructor(props) {
        super(); 
        this.state = {
            captchaToggle: false
        }
        this.captchaCallback = this.captchaCallback.bind(this); 
    }

    captchaCallback() {
        this.setState({ captchaToggle: true }); 
    }

    render() {
        return (
            <nav className="otherNavbarContainer">
                <NavbarIconContainer img={catLogo}
                                     height="60px"
                                     width="60px" /> 
                <DesktopDropdownOptions options={this.props.options} />
                <div className = "signInBtnContainer">
                    <SignInBtn captchaFunction={this.captchaCallback} />
                </div>
                <CursedCaptcha toggled={this.state.captchaToggle}/> 
            </nav>
        );
    }
}

export default OtherNavbarArea;