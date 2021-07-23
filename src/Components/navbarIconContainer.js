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
                    height={this.props.height}
                    width={this.props.width}/> 
            </div>
        );
    }
}

export default NavbarIconContainer;