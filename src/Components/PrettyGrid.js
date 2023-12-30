import PrettyGridCaption from './PrettyGridCaption.js'; 
import PrettyGridPunchline from './PrettyGridPunchline.js'; 
import FancyPhoto from './FancyPhoto/FancyPhoto.js';

//Import Components
import React from 'react';   

// import prettyImg from '../Images/Home/kat_grid.png'; 

class PrettyGrid extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="prettyGrid">
                <div class="prettyGridText">
                    <PrettyGridCaption gridCaption={this.props.gridCaption}
                        chrimbus={this.props.chrimbus}/>
                    <PrettyGridPunchline gridPunchline={this.props.gridPunchline}
                        chrimbus={this.props.chrimbus}/>
                </div>
                <div>
                    <FancyPhoto chrimbus={true} height={Math.min(600, window.innerWidth - 175)}></FancyPhoto>
                    {/* <img src={prettyImg}
                        className="prettyImage"
                        alt="Turbokat makes taxes easier, but we don't really know how"/>  */}
                </div>
            </div>
            );
    }
}

export default PrettyGrid;