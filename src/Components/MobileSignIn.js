//Import Components
import React from 'react';


class MobileSignIn extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div className = "mobileSignInContainer">
                <div className="signInBtn"
                    onClick={() => {this.props.captchaFunction(true)}}>
                    Sign in
                </div>
            </div>
        );
    }
}

export default MobileSignIn;