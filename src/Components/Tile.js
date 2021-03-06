import PhoneWidget from './PhoneWidget.js'; 
//Import Components
import React, { Component } from 'react';


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
                <div className="startForFree">
                    Start for Free 
                </div> 
                <PhoneWidget/> 
                <div>
                    <img className="tileImg"
                         src={this.props.imgSrc}
                         alt={this.props.imgAlt}/> 
                </div> 
            </div>
        );
    }
}

export default Tile 
