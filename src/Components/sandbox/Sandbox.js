import React from 'react';

import ThinMint from './ThinMint.js';
import Dosido from './Dosido.js';
import Samosa from './Samosa.js';

const thinMintHeight = 40;
const thinMintWidth = 40;
const thinMintDots = 7;

const dosidoDots = 10;

class Sandbox extends React.Component {

    render () {
        return (
            <div>
                Sandbox
                <div>
                    Thin Mint Below
                </div>
                <ThinMint numDots = {thinMintDots}
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
            </div>
        );
    }
}

export default Sandbox;