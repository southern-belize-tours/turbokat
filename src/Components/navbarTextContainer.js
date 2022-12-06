//Import Components
import React from 'react';


class NavbarTextContainer extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="navbarTextContainer">
                {this.props.text}
                <a href={this.props.link}>{this.props.navbarLinkText}</a> 
            </div>
        );
    }
}

export default NavbarTextContainer;