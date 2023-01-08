//Import Components
import React from 'react';


class MobileDropdown extends React.Component {

    constructor(props) {
        super();

        this.state = {
            toggled: false 
        }
    }

    render() {
        return (
                <div className="hamburgerContainer">
                    <div className={this.state.toggled ? "hamburger toggled" : "hamburger"}
                         onClick={() => {
                             this.setState({toggled: !this.state.toggled})
                         }}>
                        <div className="left"></div>
                        <div className="mid"></div>
                        <div className="right"></div> 
                    </div>
                    <div className={this.state.toggled ? "mobileDropdown show" : "mobileDropdown"}>
                    {this.props.options.map(option => (
                        <a className="desktopDropdownLink"
                            href={option.url ? option.url : "/"}>
                            {option.text}
                        </a>
                    ))}
                    </div> 
                </div> 
            );
    }
}

export default MobileDropdown;