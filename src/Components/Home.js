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
            <div className={`homeBody ${this.props.spooky && "spooky"}`}>
                <PrettyGrid gridCaption={this.props.gridCaption}
                            gridPunchline={this.props.gridPunchline}/> 
                <LoginBox turbokatFeatures={this.props.turbokatFeatures}
                          userHealth={this.props.userHealth}
                          centiActive = {this.props.centiActive}
                          loseUserHealth = {this.props.loseUserHealth}
                          loseCentiHealth = {this.props.loseCentiHealth}
                          centiActiveCallback = {this.props.centiActiveCallback}
                          centiHealth={this.props.centiHealth}
                          featuresCaption={this.props.featuresCaption}/> 
                <FilingOptions taxOptions={this.props.taxOptions}/>
            </div>
            );
    }
}

export default Home;