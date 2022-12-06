import LoginLeftContainer from './LoginLeftContainer.js'; 
import LoginRightContainer from './LoginRightContainer.js'; 
//Import Components
import React from 'react';


class LoginBox extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="loginBox">
                <LoginLeftContainer featuresCaption={this.props.featuresCaption}
                    turbokatFeatures={this.props.turbokatFeatures} /> 
                <LoginRightContainer/> 
            </div>
        );
    }
}

export default LoginBox;