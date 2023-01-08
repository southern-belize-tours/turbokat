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
                <LoginRightContainer userHealth={this.props.userHealth}
                    centiActiveCallback = {this.props.centiActiveCallback}
                    centiActive = {this.props.centiActive}
                    loseUserHealth = {this.props.loseUserHealth}
                    loseCentiHealth = {this.props.loseCentiHealth}
                    centiHealth={this.props.centiHealth}/> 
            </div>
        );
    }
}

export default LoginBox;