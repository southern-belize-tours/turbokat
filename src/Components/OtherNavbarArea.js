import NavbarIconContainer from './navbarIconContainer.js'; 
import DesktopDropdownOptions from './DesktopDropdownOptions.js'; 
import SignInBtn from './SignInBtn.js'; 
import CursedCaptcha from './CursedCaptcha.js'; 
//Import Components
import React from 'react';

// Images
import catLogo from './../Images/General/turbokat_icon.png' 

class OtherNavbarArea extends React.Component {

    constructor(props) {
        super(); 
        this.state = {
            captchaToggle: false
        }
        this.captchaCallback = this.captchaCallback.bind(this); 
    }

    captchaCallback(open) {
        if (open === null) {
            open = true;
        }
        this.setState({ captchaToggle: open }); 
    }

    render() {
        return (
            <nav className={`otherNavbarContainer ${this.props.spooky && "spooky"}`}
                style={{background: `${this.props.spooky ? "black": ""}`, color: `${this.props.spooky ? "white": ""}`, borderBottom: `none`}}>
                <NavbarIconContainer img={catLogo}
                    spooky = {this.props.spooky}
                    height="60px"
                    width="60px" /> 
                <DesktopDropdownOptions options={this.props.options} spooky={this.props.spooky}/>
                <div className = "signInBtnContainer">
                    <SignInBtn captchaFunction={this.captchaCallback} spooky={this.props.spooky}/>
                </div>
                <CursedCaptcha captchaFunction = {this.captchaCallback}
                    toggled={this.state.captchaToggle}/>
            </nav>
        );
    }
}

export default OtherNavbarArea;