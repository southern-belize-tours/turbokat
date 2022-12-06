import React from 'react';

import './samosaStyle.css';


class Dosido extends React.Component {

    constructor( props ) {
        super();
        this.dotRatio = props.height > 10 ? 5 : 3;
        this.generateThinMintDots(props.numDots,
            props.width,
            props.height,
            props.height > 10 ? 30 : 15);
    }

    generateThinMintDots (numDots, width, height, dotRatio) {
        this.thinMintDots = [];
        for (let i = 0; i < numDots; ++i) {
            let posX = Math.random() * width + "rem";
            let posY = Math.random() * height + "rem";

            let thinMintDot = <div className = "dosdioDot"
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
        //let borderWidth = this.props.height < 10 ? this.dotRatio  :
        //                  this.props.height < 20 ? this.dotRatio  :
        //                  this.dotRatio;
        let borderWidth = this.props.height * .4;

        // Convert int 40 into string '40rem'
        let heightString =  this.props.height + "rem";
        let widthString = this.props.width + "rem";

        // For now just have the thin mint dots be 5% of whatever the height is
        let dotSize = this.props.height/this.dotRatio + "rem";
        let dotLeft = (this.props.height * .5) - (this.props.height/(this.dotRatio * 2))
        dotLeft = dotLeft + "rem";

        return (
            <div
                onClick = {() => {this.props.onClick()}}
                className = "samosa"
                style = {{
                    borderWidth: borderWidth + "px",
                    height: heightString,
                    width: widthString }}>
                <div className = "centerHole" 
                     style = {{
                        height: dotSize,
                        width: dotSize,
                        left: dotLeft,
                        borderWidth: borderWidth + "px",
                        top: dotLeft }}>
                        <div className = "centerHoleCircleContainer">
                            <div className = "centerHoleCircle"></div>
                            <div className = "centerHoleCircle"></div>
                            <div className = "centerHoleCircle"></div>
                            <div className = "centerHoleCircle"></div>
                            <div className = "centerHoleCircle"></div>
                            <div className = "centerHoleCircle"></div>
                            <div className = "centerHoleCircle"></div>
                            <div className = "centerHoleCircle"></div>
                            <div className = "centerHoleCircle"></div>
                            <div className = "centerHoleCircle"></div>
                            <div className = "centerHoleCircle"></div>
                            <div className = "centerHoleCircle"></div>
                            <div className = "centerHoleCircle"></div>
                            <div className = "centerHoleCircle"></div>
                        </div>
                </div>
                { this.thinMintDots }
            </div>
        );
    }
}

export default Dosido;