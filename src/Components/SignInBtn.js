//Import Components
import React from 'react';

// Mui Components
import SignpostIcon from '@mui/icons-material/Signpost';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

class SignInBtn extends React.Component {

    constructor(props) {
        super();

        this.state = {
            signInitiated: false,
            signedIn: false,
            tooltip: "Sign In"
        }
    }

    render() {
        return (
            <Tooltip title = {this.state.tooltip}>
                <Button variant = "outlined"
                    onClick={() => {
                        // Puts the sign in or out
                        let newSignedIn = !this.state.signedIn;
                        let newTooltip = newSignedIn ? "Sign In" : "Sign Out";
                        this.setState({signInitiated: true, signedIn: newSignedIn, tooltip: newTooltip});
                        // Open the captcha dialog
                        this.props.captchaFunction(true);
                    }}>
                    {this.state.signInitiated === true ? 
                        this.state.signedIn === true ? 
                            <SignpostIcon/>
                        : <>
                        <span style={{visibility: "hidden"}}>Sign Out</span>
                        <SignpostIcon className = "outsideSign"/>
                        </>
                    : "Sign In"}
                </Button>
            </Tooltip>
        );
    }
}

export default SignInBtn;