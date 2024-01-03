import PrettyGridCaption from './PrettyGridCaption.js'; 
import PrettyGridPunchline from './PrettyGridPunchline.js'; 
import FancyPhoto from './FancyPhoto/FancyPhoto.js';

//Import Components
import React, { useState } from 'react';   

// import prettyImg from '../Images/Home/kat_grid.png'; 

function PrettyGrid (props) {
    const [height, setHeight] = useState(600);

    window.addEventListener('resize', () => {setHeight(Math.min(600, window.innerWidth - 175))});

    return (
        <div className="prettyGrid">
            <div class="prettyGridText">
                <PrettyGridCaption gridCaption={props.gridCaption}
                    chrimbus={props.chrimbus}/>
                <PrettyGridPunchline gridPunchline={props.gridPunchline}
                    chrimbus={props.chrimbus}/>
            </div>
            <div>
                <FancyPhoto chrimbus={props.chrimbus}
                    height={height}></FancyPhoto>
                {/* <img src={prettyImg}
                    className="prettyImage"
                    alt="Turbokat makes taxes easier, but we don't really know how"/>  */}
            </div>
        </div>
        );
}

// class PrettyGrid extends React.Component {

//     constructor(props) {
//         super();
//         this.state = {height: 600};
//     }

//     window.addEventListener('resize', () => {this.setState({height: Math.min(600, window.innerWidth - 175)})});

//     render() {
//         return (
//             <div className="prettyGrid">
//                 <div class="prettyGridText">
//                     <PrettyGridCaption gridCaption={this.props.gridCaption}
//                         chrimbus={this.props.chrimbus}/>
//                     <PrettyGridPunchline gridPunchline={this.props.gridPunchline}
//                         chrimbus={this.props.chrimbus}/>
//                 </div>
//                 <div>
//                     <FancyPhoto chrimbus={true} height={Math.min(600, window.innerWidth - 175)}></FancyPhoto>
//                     {/* <img src={prettyImg}
//                         className="prettyImage"
//                         alt="Turbokat makes taxes easier, but we don't really know how"/>  */}
//                 </div>
//             </div>
//             );
//     }
// }

export default PrettyGrid;