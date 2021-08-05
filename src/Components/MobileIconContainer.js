//Import Components
import React from 'react';


class MobileIconContainer extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="MobileIconContainer">
                <img src={this.props.img}
                     alt="Turbokat Tax Cat Logo"
                     height={this.props.height}
                     width={this.props.width} /> 
            </div>
        );
    }
}

export default MobileIconContainer;