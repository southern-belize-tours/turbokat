//Import Components
import React from 'react';


class DesktopDropdownOptions extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                {this.props.options.map(option => (
                        <a className="desktopDropdownLink"
                           href={option.url ? option.url : "/"}>
                            {option.text}
                        </a> 
                ))}
            </div>
        );
    }
}

export default DesktopDropdownOptions;