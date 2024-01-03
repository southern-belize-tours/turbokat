//Import Components
import React, { useState } from 'react';

// MUI Components
import Checkbox from '@mui/material/Checkbox';

// Stylesheets
import './phoneWidgetStyle.css';

function PhoneOptions (props) {
    const [selected, setSelected] = useState(true);
    const [noAvailable, setNoAvailable] = useState(true);
    // Currently two versions:
    // 1) After clicking 'no' it will re-select yes after random timeouts
    // 2) The 'no' option will move away from the mouse
    const [version, setVersion] = useState(Math.floor(Math.random() * 2))

    const toggleSelected = (selection) => {
        setSelected(selection);

        if (version == 0 ) {
            if(!selection) {
                let outcome = Math.floor(Math.random()*10);
                // Switch to 'yes' after 0-2 seconds
                if (outcome < 8) {
                    let timeout = Math.floor(Math.random()*2000);
                    setTimeout(() => {
                        setSelected(true);
                    }, timeout)
                }
                else if (outcome < 10) {
                    setSelected(true);
                    setNoAvailable(false);
                }
            }
        }
    }

    /**
     * Hover function to move the 'no' check away from the mouse
     * @param {event} e 
     */
    const hoverFunction = (e) => {
        if (version == 1) {

        }
    }

    return (
        <div className="phoneOptions">
            <div className = "optionPrompt">
                {props.prompt}
            </div>
            <div className = "phoneOptionCheckbox">
                <Checkbox checked = {selected === true}
                    onChange = {() => {toggleSelected(true)}}/> Yes
            </div>
            { noAvailable ?
                <div className = "phoneOptionCheckbox">
                    <Checkbox checked = {selected === false}
                        onHover = {hoverFunction}
                        onChange = {() => {toggleSelected(false)}}/> No
                </div>
            : <></>
            }
        </div>
    );
}

export default PhoneOptions;
