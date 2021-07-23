//Import Components
import React from 'react';


class DesktopDropdownOptions extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <ul>
                {this.props.options.map(option => (
                    <li>{option.text}</li>
                ))}
            </ul>
        );
    }
}

export default DesktopDropdownOptions;