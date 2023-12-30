//Import Components
import React from 'react';

import rabbitSrc from '../Images/rabbit_standing_icon.png'

class MobileDropdown extends React.Component {

    constructor(props) {
        super();

        this.state = {
            toggled: false 
        }
    }

    showRabbit(e, lie, url) {
        if (!lie) {
            return;
        }
        // Revent navigation for a second
        e.preventDefault();
        const width = e.target.clientWidth;
        e.target.style.width = `${width}px`;
        e.target.textContent = "";
        e.target.style.height = `${e.target.clientHeight}px`;

        const imgElement = document.createElement("img");
        // imgElement.style.height= `3.3em`;
        // imgElement.style.paddingBottom = `5px`;
        imgElement.style.maxHeight = `${e.target.clientHeight-20}px`;
        imgElement.style.width = `auto`;
        imgElement.src = rabbitSrc;
        e.target.appendChild(imgElement);

        
        // Navigate to the link after some time
        setTimeout(function() {
            window.location.href = url;
          }, 300);
    }

    render() {
        return (
                <div className="hamburgerContainer">
                    <div className={`hamburger ${this.state.toggled ? "toggled" : ""} ${this.props.chrimbus ? "chrimbus" : ""}`}
                         onClick={() => {
                             this.setState({toggled: !this.state.toggled})
                         }}>
                        <div className="left"></div>
                        <div className="mid"></div>
                        <div className="right"></div> 
                    </div>
                    <div className={`mobileDropdown ${this.state.toggled && "show"} ${this.props.spooky ? "spooky" : ""} ${this.props.chrimbus ? "chrimbus" : ""}`}>
                    {this.props.options.map(option => (
                        <a className="desktopDropdownLink"
                            onClick = {(e)=>{this.showRabbit(e, option.rabbitLie, option.url)}}
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