//Import Components
import React from 'react';

import Cat from './pumpkin/cat';

class MobileIconContainer extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <a className="MobileIconContainer"
               href={this.props.link}>
                <Cat spooky={this.props.spooky} 
                    chrimbus={this.props.chrimbus}
                    size = {50}></Cat>
                {/* <img src={this.props.img}
                     alt="Turbokat Tax Cat Logo"
                     height={this.props.height}
                     width={this.props.width} />  */}
            </a>
        );
    }
}

export default MobileIconContainer;