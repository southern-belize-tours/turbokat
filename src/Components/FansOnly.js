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
        this.images = [];
        for (const [key, value] of Object.entries(images)) {
           // console.log(key, value);
           this.images.push(key);
        }
    }

    render() {
        return (
            <div>
                Parsley Psychomantis Ron Hasslehopper Fans Only Page
                <div>
                    {this.images.map(image => (
                        <div className="parsleyPic"> 
                            <img src={images[image].default}
                                height="200px"
                                width="200px"
                                loading="lazy"/> 
                        </div> ))}
                </div>
            </div> 
        );
    }
}

export default FansOnly;