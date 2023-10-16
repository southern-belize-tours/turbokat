import MobileIconContainer from './MobileIconContainer.js'; 
import MobileSignIn from './MobileSignIn.js'; 
import MobileDropdown from './MobileDropdown.js'; 
import CursedCaptcha from './CursedCaptcha.js';
//Import Components
import React from 'react';

import catLogo from './../Images/General/turbokat_icon.png'

let height = "35px";
let width = "35px"; 

class MobileNavbarArea extends React.Component {

    constructor(props) {
        super();
        this.state = {
            captchaToggle: false
        }
        this.captchaCallback = this.captchaCallback.bind(this); 
    }

    captchaCallback(res) {
        this.setState({ captchaToggle: res });
    }

    render() {
        return (
            <nav className={`mobileNavbarContainer ${this.props.spooky && "spooky"}`}>
                <MobileIconContainer img={catLogo}
                                     link={this.props.link}
                                     height={height}
                                     width={width}/> 
                <MobileDropdown options={this.props.options} spooky={this.props.spooky}/> 
                <MobileSignIn captchaFunction={this.captchaCallback} spooky={this.props.spooky}/> 
                <CursedCaptcha toggled={this.state.captchaToggle} captchaFunction={this.captchaCallback}/> 
            </nav> 
        );
    }
}

export default MobileNavbarArea;