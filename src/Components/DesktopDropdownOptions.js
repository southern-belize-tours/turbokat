//Import Components
import React from 'react';

import rabbitSrc from '../Images/rabbit_standing_icon.png'

class DesktopDropdownOptions extends React.Component {

    constructor(props) {
        super();
    }

    /**
     * fakeLinkFunction
     * 
     * Some of the desktop links that don't really do anything just redirect the user to
     * Parsley's instagram. This function makes them change their text to "Look at my rabbit" on hover
     * 
     * @param {*} e: event targeting the hover function
     * lie: if the link should change text
     * @returns: nothing
     */
    fakeLinkFunction(e, lie) {
        // links that shouldn't have their text change don't do anything
        if (!lie) {
            return;
        }
        // set width to whatever previous width was so elements aren't moving around a bunch
        const width = e.target.clientWidth;
        e.target.style.width = `${width}px`;
        e.target.style.textAlign = `center`;
        e.target.style.display = `flex`;
        e.target.style.justifyContent = `center`;
        e.target.textContent = "Look at my rabbit";
        e.target.textContent = "";


        const imgElement = document.createElement("img");
        imgElement.style.height= `3.3em`;
        imgElement.style.paddingBottom = `5px`;
        imgElement.src = rabbitSrc;
        e.target.appendChild(imgElement);

    }

    setNormalText(e, text) {
        e.target.textContent = text;
        e.target.style.width = `auto`;
    }

    render() {
        return (
            <div className = "navbarItems">
                {this.props.options.map(option => (
                        !option.component ? 
                        <a className="desktopDropdownLink"
                           onMouseEnter = {(e) => {this.fakeLinkFunction(e, option.rabbitLie);}}
                           onMouseLeave = {(e) => {this.setNormalText(e, option.text)}}
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