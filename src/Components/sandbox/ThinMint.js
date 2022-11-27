import React from 'react';

import './thinMintStyle.css';


class ThinMint extends React.Component {

    constructor( props ) {
        super();
        this.dotRatio = props.height > 10 ? 15 : 8;
        this.generateThinMintDots(props.numDots,
            props.width,
            props.height,
            props.height > 10 ? 15 : 8);
    }

    generateThinMintDots (numDots, width, height, dotRatio) {
        this.thinMintDots = [];
        for (let i = 0; i < numDots; ++i) {
            let posX = Math.random() * width + "rem";
            let posY = Math.random() * height + "rem";

            let thinMintDot = <div className = "thinMintDot"
                                   style = {{
                                    height: height/dotRatio + "rem",
                                    width: width/dotRatio + "rem",
                                    left: posX,
                                    top: posY
                                   }}></div>;
            this.thinMintDots.push(thinMintDot);
        }
    }

    render () {
        let borderWidth = this.props.height < 10 ? this.dotRatio / 3 :
                          this.props.height < 20 ? this.dotRatio / 2 :
                          this.dotRatio;

        // Convert int 40 into string '40rem'
        let heightString =  this.props.height + "rem";
        let widthString = this.props.width + "rem";

        // For now just have the thin mint dots be 5% of whatever the height is
        let dotSize = this.props.height/this.dotRatio + "rem";
        let dotLeft = (this.props.height * .5) - (this.props.height/(this.dotRatio * 2))
        dotLeft = dotLeft + "rem";

        return (
            <div
                onClick = {() => {this.props.onClick();}}
                className = "thinMint"
                style = {{
                    borderWidth: borderWidth + "px",
                    height: heightString,
                    width: widthString }}>
                <div className = "centerDot" 
                     style = {{
                        height: dotSize,
                        width: dotSize,
                        left: dotLeft,
                        top: dotLeft }}>
                </div>
                { this.thinMintDots }
            </div>
        );
    }
}

export default ThinMint;