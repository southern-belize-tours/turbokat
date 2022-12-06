//Import Components
import React from 'react';


class NavbarIconContainer extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <a className="navbarIconContainer"
                 href="/">
                <img src={this.props.img}
                    alt="Turbokat Tax Cat Logo"
                    height={this.props.height}
                    width={this.props.width}/> 
            </a>
        );
    }
}

export default NavbarIconContainer;