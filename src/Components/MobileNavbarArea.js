import MobileIconContainer from './MobileIconContainer.js'; 
import MobileSignIn from './MobileSignIn.js'; 
import MobileDropdown from './MobileDropdown.js'; 
//Import Components
import React from 'react';

import catLogo from './../Images/General/turbokat_icon.png'

let height = "35px";
let width = "35px"; 

const options = [];

class MobileNavbarArea extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        console.log(this.props.options); 
        return (
            <nav className="mobileNavbarContainer">
                <MobileIconContainer img={catLogo}
                                     height={height}
                                     width={width}/> 
                <MobileSignIn /> 
                <MobileDropdown options={this.props.options} /> 
            </nav> 
        );
    }
}

export default MobileNavbarArea;