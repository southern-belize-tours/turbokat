//Import Components
import React from 'react';

// MUI Components
import Checkbox from '@mui/material/Checkbox';

// Stylesheets
import './phoneWidgetStyle.css';

class PhoneOptions extends React.Component {

    constructor(props) {
        super();

        // Default to saying "yes" is selected
        this.state = {yesSelected: true,
                      noAvailable: true // Blurs out the 'no' option
                    };
    }

    // Sets state to whatever parameter is
    toggleSelected(selection) {
        this.setState({yesSelected: selection});


        if(!selection) {
            // As we add more strange behavior options we'll multiply this by each option
            let outcome = Math.floor(Math.random()*10);
            // Switch to 'yes' after 0-2 seconds
            if (outcome < 8) {
                let timeout = Math.floor(Math.random()*2000);
                setTimeout(() => {
                    this.setState({yesSelected: true});
                }, timeout)
            }
            else if (outcome < 10) {
                this.setState({
                    yesSelected: true,
                    noAvailable: false
                });
            }
        }
        // @TODO: implement timeout function for a random amount of seconds, say 1 to 4 that generates
        //        a random event. These events could be one of the following:
        //       1) Re-select yes
        //       2) Display an "incorrect"
        //       3) Move user's mouse to yes and click
        //       4) Make the phone widget grow just a little bit
        //
        /*
        if(!selection) {
            this.setTimeout(() => {
                
            }, timeout);
        }
        else {
            // Possibly implement css function to elongate the check marks like crazy
        }*/
    }

    render() {

        return (
            <div className="phoneOptions">
                <div className = "optionPrompt">
                    {this.props.prompt}
                </div>
                <div className = "phoneOptionCheckbox">
                    <Checkbox checked = {this.state.yesSelected === true}
                        onChange = {() => {this.toggleSelected(true)}}/> Yes
                </div>
                { this.state.noAvailable ?
                    <div className = "phoneOptionCheckbox">
                        <Checkbox checked = {this.state.yesSelected === false}
                            onChange = {() => {this.toggleSelected(false)}}/> No
                    </div>
                : <></>
                }

                {/* <div className = {this.state.yesSelected ? "phoneOption selected" : "phoneOption"}
                     onClick = {() => {this.toggleSelected(true)}}>
                    Yes
                </div> */}
                {/* { this.state.noAvailable ?
                    <div className = {this.state.yesSelected ? "phoneOption" : "phoneOption selected"}
                         onClick = {() => {this.toggleSelected(false)}}>
                        No
                    </div>
                    : null
                } */}
            </div>
        );
    }
}

export default PhoneOptions;
