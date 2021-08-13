import MobileIconContainer from './MobileIconContainer.js'; 
import MobileSignIn from './MobileSignIn.js'; 
import MobileDropdown from './MobileDropdown.js'; 
import CursedCaptcha from './CursedCaptcha.js';
//Import Components
import React from 'react';

import catLogo from './../Images/General/turbokat_icon.png'

let height = "35px";
let width = "35px"; 

const options = [];

class MobileNavbarArea extends React.Component {

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
        console.log(this.props.options); 
        return (
            <nav className="mobileNavbarContainer">
                <MobileIconContainer img={catLogo}
                                     height={height}
                                     width={width}/> 
                <MobileSignIn captchaFunction={this.captchaCallback}/> 
                <MobileDropdown options={this.props.options} /> 
                <CursedCaptcha toggled={this.state.captchaToggle} /> 
            </nav> 
        );
    }
}

export default MobileNavbarArea;