//Import Components
import React from 'react';


class LoginLeftContainer extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div> 
                <div className="logoGrid">
                    <div className="logoInit">Kat Likes</div>
                    <div className="logoList">
                        {this.props.turbokatFeatures.map(feature => (
                            <div> 
                                <span>{feature.featureName}</span>
                                <img height="20px"
                                     width="20px"
                                     src={feature.featureImage.default}
                                     alt={feature.featureAlt}/> 
                            </div> 
                          ))}
                    </div>                 
                </div>
                <div className="loginContainerTextRow">
                    {this.props.featuresCaption}
                </div> 
            </div> 
        );
    }
}

export default LoginLeftContainer;