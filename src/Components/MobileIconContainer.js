//Import Components
import React from 'react';


class MobileIconContainer extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <a className="MobileIconContainer"
               href={this.props.link}>
                <img src={this.props.img}
                     alt="Turbokat Tax Cat Logo"
                     height={this.props.height}
                     width={this.props.width} /> 
            </a>
        );
    }
}

export default MobileIconContainer;