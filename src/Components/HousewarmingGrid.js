//Import Components
import React from 'react';

class HousewarmingGrid extends React.Component {

    constructor(props) {
        super();
        this.tiles = []; 
        for (let i = 0; i < props.tiles.length; ++i) {
            let currStyle = { backgroundImage: `url(${props.tiles[i].img})` }; 
            let currTile = <div
                className={i == 0 ? "housewarmingGridTile down" : 
                          i == 3 ? "housewarmingGridTile" : 
                        "housewarmingGridTile long"}>

                <div className="housewarmingGridTileChild" style={currStyle}>
                    <div className="housewarmingGridTileTitle">{props.tiles[i].title}</div>
                    <div className="housewarmingGridTileContent">{props.tiles[i].hoverWords}</div>
                </div> 
            </div>; 
            this.tiles.push(currTile); 
        }
    }

    render() {
        return (
            <div className="housewarmingGrid">
                {this.tiles}
            </div>
        );
    }
}

export default HousewarmingGrid;