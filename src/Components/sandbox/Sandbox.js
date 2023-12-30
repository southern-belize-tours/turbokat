import React from 'react';

import ThinMint from './ThinMint.js';
import Dosido from './Dosido.js';
import Samosa from './Samosa.js';
import FancyPhoto from '../FancyPhoto/FancyPhoto.js';

import Cow from './Cow.js';
import prettyImg from '../../Images/Home/kat_grid.png'; 


const thinMintHeight = 40;
const thinMintWidth = 40;
const thinMintDots = 7;

const dosidoDots = 10;

const cowHeight = thinMintHeight;
const cowWidth = thinMintWidth;


class Sandbox extends React.Component {



    render () {
        return (
            <div>
                Sandbox
                <FancyPhoto chrimbus={true} height={600}></FancyPhoto>
                <img src={prettyImg}
                    height = "500px"
                    width = "1000px"
                        // className="prettyImage"
                        alt="Turbokat makes taxes easier, but we don't really know how"/> 
                {/* <div>
                    Thin Mint Below
                </div> */}
                {/* <ThinMint numDots = {thinMintDots}
                          height = {thinMintHeight}
                          width =  {thinMintWidth}/>
                <div>
                    Dosido below
                </div>
                <Dosido numDots = {dosidoDots}
                        height = {thinMintHeight}
                        width = {thinMintWidth}/>
                <div>
                    Samosa below
                </div>
                <Samosa numDots = {dosidoDots}
                        height = {thinMintHeight}
                        width = {thinMintWidth}/>
                <div>
                    Cow below
                </div>
                <Cow height = {cowHeight}
                     width = {cowWidth}/> */}
            </div>
        );
    }
}

export default Sandbox;