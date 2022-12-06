import Bullet from './Bullet.js'; 
//Import Components
import React from 'react';


class Lineup extends React.Component {

    constructor(props) {
        super();
        this.style = { backgroundImage: `url(${props.img})` }; 
    }

    render() {
        return (
            <div className="lineupContainer"
                style={this.style}>
                <div className="lineupContentBox">
                    <div className="lineupBoxTitle">
                        {this.props.date} 
                    </div> 
                    <div className="lineupBox"> 
                        {this.props.artists.map(artist => (<div>
                            <div>{artist}</div><Bullet />
                            </div>))} 
                    </div> 
                </div> 
            </div>
        );
    }
}

export default Lineup;

/*
for (const [key, value] of Object.entries(props.images)) {
    if (!props.images[key].default) continue;
    let style = { backgroundImage: `url(${props.images[key].default})` };
    this.tiles.push(<CursedTile clickFunction={this.tileClickFunction} style={style} />);
}*/ 