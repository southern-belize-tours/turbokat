import React from 'react';

import './cowStyle.css';


class Cow extends React.Component {

    constructor( props ) {
        super();
    }

    render () {

        // Convert int 40 into string '40rem'
        let heightString =  this.props.height + "rem";
        let widthString = this.props.width + "rem";

        // 1/4 the radius for the top and bottom of head
        let borderRadius = this.props.width * .25;
        // Convert to string for nicer readability
        borderRadius = borderRadius + "rem";

        return (
            <div className = "cowContainer"
                 style = {{
                    height: heightString,
                    width: widthString 
                  }}
            >

                <div className = "cowHead"
                     style = {{
                        borderTopLeftRadius: borderRadius,
                        borderTopRightRadius: borderRadius,
                        borderBottomLeftRadius: borderRadius,
                        borderBottomRightRadius: borderRadius
                     }}>
                    <div className = "cowHornTop"></div>
                    <div className = "cowHornBottom"></div>
                    <div className = "cowEyes">
                        <div className = "cowEye leftEye"></div>
                        <div className = "cowEye rightEye"></div>
                    </div>
                    <div className = "cowSnoot">
                        <div className = "cowSnootHole leftSnoot"></div>
                        <div className = "cowSnootHole rightSnoot"></div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Cow;