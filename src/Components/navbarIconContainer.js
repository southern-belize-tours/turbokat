//Import Components
import React from 'react';

import Cat from './pumpkin/cat';

class NavbarIconContainer extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <a className="navbarIconContainer"
                 href="/">
                {/* <img src={this.props.img}
                    alt="Turbokat Tax Cat Logo"
                    height={this.props.height}
                    width={this.props.width}/>  */}
                <Cat size = {50}
                    chrimbus = {this.props.chrimbus}
                    spooky = {this.props.spooky}></Cat>
            </a>
        );
    }
}

export default NavbarIconContainer;