import Lineup from './Lineup.js'; 
import HousewarmingGrid from './HousewarmingGrid.js'; 
//Import Components
import React from 'react';

import lineupImg from './../Images/Housewarming/rave.jpg';
import civicImg from './../Images/Housewarming/civic.jpg'; 
import houseImg from './../Images/Housewarming/house.jpg'; 
import liqourImg from './../Images/Housewarming/liqour.jpg'; 
import parsleyImg from './../Images/Housewarming/parsley.jpg'; 

const date = "Saturday September 11 4:00pm 7130 Shoreline Dr Unit 1207"; 

const artists = ["Ian aka Yung Cheeks", "Turbokat", "Parsley Psychomantis Ron Hasslehopper",
    "GI Trader Joe Momma Exotic", "Ray Llessur"]; 

const tiles = [
    { title: "Parking", img: civicImg, hoverWords: "Enter #2851 at the gate and park literal anywhere" },
    { title: "Logistics", img: houseImg, hoverWords: "Saturday 09/11 7130 Shoreline Dr. Unit 1207 4:00pm u can bring a friend" },
    { title: "Theme", img: liqourImg, hoverWords: "It's a liqour themed party" },
    { title: "Parsley", img: parsleyImg, hoverWords: "He will be cowering in fear"}
]; 

class Housewarming extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="homeBody">
                <Lineup artists={artists} date={date} img={lineupImg} />
                <HousewarmingGrid tiles={tiles}/> 
            </div>
        );
    }
}

export default Housewarming;