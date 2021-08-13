//Import Components
import React from 'react';


class MobileSignIn extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="signInBtn"
                onClick={this.props.captchaFunction}>
                Sign in
            </div>
        );
    }
}

export default MobileSignIn;