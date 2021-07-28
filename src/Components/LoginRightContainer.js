//Import Components
import React from 'react';


class LoginRightContainer extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="signInForms">
                <div>
                    <input type="text"
                           name="User_ID"
                           placeholder="User ID"/> 
                </div>
                <div>
                    <input type="text"
                           name="SSN"
                           placeholder="SSN"/> 
                </div>
                <div className="signInBtnContainer">
                    <btn className="signInBtn2">Sign In</btn>
                </div>
                <div className="fullRow disclaimer">
                    By clicking Sign In, you agree to our Terms and have read and acknowledge our Global Privacy Statement.
                </div>
                <div className="fullRow">
                    <input type="checkbox"
                           className="checkbox" /> 
                    <span className="rememberMe">Remember me</span> 
                </div>
                <div className="fullRow rememberMe forgot">
                    <a>Forgot user ID or password?</a> 
                    <span className="spaceMe"> | </span> 
                    <a>Create an account</a> 
                </div>
            </div>
        );
    }
}

export default LoginRightContainer;