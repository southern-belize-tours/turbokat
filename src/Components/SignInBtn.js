//Import Components
import React from 'react';

class SignInBtn extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="signInBtn"
                onClick={this.props.captchaFunction }>
                Sign In Btn
            </div>
        );
    }
}

export default SignInBtn;