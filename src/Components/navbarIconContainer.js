//Import Components
import React from 'react';


class NavbarIconContainer extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="navbarIconContainer">
                <img src={this.props.img}
                     alt="Turbokat Tax Cat Logo"
                     height="40px"
                     width="40px"/> 
            </div>
        );
    }
}

export default NavbarIconContainer;