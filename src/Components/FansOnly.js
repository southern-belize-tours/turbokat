//Import Components 
import React, { Component } from 'react';


function importAll(r) {
    let ret = [];
    let i = 0;
    r.keys().map((item, index) => { ret[item.replace('./', '')] = r(item); ++i });
    ret["numKeys"] = i;
    return ret;
}
let images = importAll(require.context('../Images/Fans_Only', false, /\.(jpg)$/)); 

class FansOnly extends React.Component {

    constructor(props) {
        super();

        console.log(images);
        this.images = [];
        for (const [key, value] of Object.entries(images)) {
           // console.log(key, value);
           this.images.push(key);
        }
        for (let i = 0; i < this.images.length; ++i) {
            //console.log(this.images[i].default); 
        }
        this.images.map(image => (console.log(images[image]))); 
    }

    render() {
        return (
            <div>
                Parsley Psychomantis Ron Hasslehopper Fans Only Page
                <div>
                    {this.images.map(image => (
                        <div> 
                            <img src={images[image].default}
                                height="200px"
width="200px"                            /> 
                        </div> ))}
                </div>
            </div> 
        );
    }
}

export default FansOnly;