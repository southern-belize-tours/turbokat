import PrettyGridCaption from './PrettyGridCaption.js'; 
import PrettyGridPunchline from './PrettyGridPunchline.js'; 

//Import Components
import React, { Component } from 'react';   

import prettyImg from '../Images/Home/kat_grid.png'; 

class PrettyGrid extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="prettyGrid">
                <div class="prettyGridText">
                    <PrettyGridCaption gridCaption={this.props.gridCaption} />
                    <PrettyGridPunchline gridPunchline={this.props.gridPunchline} />
                </div>
                <div>
                    <img src={prettyImg}
                        className="prettyImage"
                        alt="Turbokat makes taxes easier, but we don't really know how"/> 
                </div>
            </div>
            );
    }
}

export default PrettyGrid;