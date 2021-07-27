import PrettyGrid from './PrettyGrid.js'; 
import LoginBox from './LoginBox.js';
import FilingOptions from './FilingOptions.js'; 
//Import Components
import React from 'react';   


class Home extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="homeBody">
                <PrettyGrid gridCaption={this.props.gridCaption}
                            gridPunchline={this.props.gridPunchline}/> 
                <LoginBox turbokatFeatures={this.props.turbokatFeatures}
                          featuresCaption={this.props.featuresCaption}/> 
                <FilingOptions /> 
            </div>
            );
    }
}

export default Home;