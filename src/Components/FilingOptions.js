import Tile from './Tile.js'; 
//Import Components
import React from 'react';


class FilingOptions extends React.Component {

    constructor(props) {
        super();
    }

    render() {

        return (
            <div className="imageGrid">
                {
                    this.props.taxOptions.map(option => (
                        <Tile title={option.optionText}
                            chrimbus = {this.props.chrimbus}
                            prompt={option.prompt}
                            color = {option.tileColor}
                            imgSrc = {option.image}
                            imgAlt = {option.optionText}/>
                    ))
                }
            </div>
        );
    }
}
//{ backgroundImage: `url(${this.images[this.indexKeys[this.state.currIndex]].default})` }
export default FilingOptions;

//{ { background: `${option.tileColor}` } }

/*<div style={option.tileColor}
                             className="tile">
                            <h3 className="tileTitle">
                                {option.optionText}
                            </h3>
                            <div className="startForFree">
                                <a>Start for Free</a>
                            </div>
                            <div>
                                <img className="tileImg"
                                    src={option.image.default}
                                    alt={option.optionText}/>
                            </div>
                        </div>*/