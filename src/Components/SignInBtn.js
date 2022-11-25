//Import Components
import React from 'react';
import Button from '@mui/material/Button';

class SignInBtn extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <Button variant = "outlined" 
                onClick={this.props.captchaFunction}>
                Sign In
            </Button>
            // <div className="signInBtn"
            //     onClick={this.props.captchaFunction }>
            //     Sign In Btn
            // </div>
        );
    }
}

export default SignInBtn;