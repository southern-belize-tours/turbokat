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
            <div className={`loginBox ${this.props.chrimbus ? "chrimbus" : ""}`}>
                <LoginLeftContainer featuresCaption={this.props.featuresCaption}
                    chrimbus = {this.props.chrimbus}
                    turbokatFeatures={this.props.turbokatFeatures} /> 
                <LoginRightContainer userHealth={this.props.userHealth}
                    chrimbus = {this.props.chrimbus}
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