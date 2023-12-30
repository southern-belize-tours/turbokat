import PhoneWidget from './phoneWidget/PhoneWidget.js'; 
//Import Components
import React from 'react';


class Tile extends React.Component {

    constructor(props) {
        super();
    }

    render() {

        return (
            <div className="tile"
                 style={this.props.color}>
                <h3 className="tileTitle">
                    {this.props.title}
                </h3> 
                <div className={`startForFree ${this.props.chrimbus ? "chrimbus" : ""}`}>
                    Start for Free 
                </div> 
                <PhoneWidget imgSrc = {this.props.imgSrc}
                             imgAlt = {this.props.imgAlt}
                             prompt = {this.props.prompt}/> 
                { false ? <div>
                    <img className="tileImg"
                         src={this.props.imgSrc}
                         alt={this.props.imgAlt}/>
                </div> : <></> }
            </div>
        );
    }
}

export default Tile 
