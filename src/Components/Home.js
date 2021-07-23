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
            <div>
                <PrettyGrid /> 
                <LoginBox /> 
                <FilingOptions /> 
            </div>
            );
    }
}

export default Home;