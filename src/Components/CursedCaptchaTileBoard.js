import CursedTile from './CursedTile.js'; 
//Import Components
import React from 'react';

class CursedCaptchaTileBoard extends React.Component {

    constructor(props) {
        super();
        this.tileClickFunction = this.tileClickFunction.bind(this); 
        this.tiles = [];
        for (const [key, ] of Object.entries(props.images)) {
            if (!props.images[key].default) continue;
            let style = { backgroundImage: `url(${props.images[key].default})` };
            this.tiles.push(<CursedTile clickFunction = {this.tileClickFunction} style={style}/>); 
        }
    }

    tileClickFunction() {
        console.log("tile clicked"); 
    }

    render() {
        return (
            <div className="cursedCaptchaTileBoard">
                {this.tiles}
            </div>
        );
    }
}

export default CursedCaptchaTileBoard;