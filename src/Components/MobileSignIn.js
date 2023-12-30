//Import Components
import React from 'react';


class MobileSignIn extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div className = "mobileSignInContainer">
                <div className={`signInBtn ${this.props && this.props.spooky ? "spooky" : ""} ${this.props.chrimbus ? "chrimbus" : ""}`}
                    onClick={() => {this.props.captchaFunction(true)}}>
                    Sign in
                </div>
            </div>
        );
    }
}

export default MobileSignIn;