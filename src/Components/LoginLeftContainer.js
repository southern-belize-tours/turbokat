//Import Components
import React from 'react';

// MUI Components
import Tooltip from '@mui/material/Tooltip';


class LoginLeftContainer extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div className = "aboutKat">
                <div className="logoGrid">
                    <div className="logoInit">Kat Likes</div>
                    <div className="logoList">
                        {this.props.turbokatFeatures.map(feature => (
                            <Tooltip title="This website uses cookies">
                                <div className = "logoListItem">
                                    <span>{feature.featureName}</span>
                                    <span>{feature.featureComponent}</span>
                                </div>
                            </Tooltip>
                          ))}
                    </div>                 
                </div>
                <div className={`loginContainerTextRow ${this.props.chrimbus ? "chrimbus" : ""}`}>
                    {this.props.featuresCaption}
                </div> 
            </div> 
        );
    }
}

export default LoginLeftContainer;