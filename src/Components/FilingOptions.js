//Import Components 
import React, { Component } from 'react';


class FilingOptions extends React.Component {

    constructor(props) {
        console.log(props.taxOptions); 
        super();
    }

    render() {

        return (
            <div className="imageGrid">
                {
                    this.props.taxOptions.map(option => (
                        <div style={option.tileColor}
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
                        </div>
                    ))
                }
            </div>
        );
    }
}
//{ backgroundImage: `url(${this.images[this.indexKeys[this.state.currIndex]].default})` }
export default FilingOptions;

//{ { background: `${option.tileColor}` } }