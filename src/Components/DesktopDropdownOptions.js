//Import Components
import React from 'react';

class DesktopDropdownOptions extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div className = "navbarItems">
                {this.props.options.map(option => (
                        !option.component ? 
                        <a className="desktopDropdownLink"
                           href={option.url ? option.url : "/"}>
                            {option.text}
                        </a> : 
                        <span>
                            {option.component}
                        </span>
                ))}
            </div>
        );
    }
}

export default DesktopDropdownOptions;