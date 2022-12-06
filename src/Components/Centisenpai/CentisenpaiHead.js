import React from "react";

// Styles
import './CentisenpaiStyle.css';

class CentisenpaiHead extends React.Component {
    constructor(props) {
        super();
        this.state = {

        };

        this.setState({antennaLeft: this.generateLeftAntennas(), antennaRight: this.generateRightAntennas()});
    }

    generateLeftAntennas() {
        // Segment height set here
        const segmentHeight = 60;

        let currBottom = 50;
        let currRight = 70;
        let antennaLeft = [];
        let currRotation = -60;
        for (let i = 0; i < 7; ++i) {
            let rotateString = "rotate("+currRotation+"deg)";
            let translateString = "translate(-"+currRight+"px, -"+currBottom+"px)";
            let transformString = translateString + " " + rotateString;
            antennaLeft.push(<div className="antennaSegment" style={{height: segmentHeight, transform: transformString}}></div>)
            // currTop-=20;
            // currLeft-=10;
            currBottom += Math.abs((segmentHeight-5) * Math.cos(currRotation * (Math.PI / 180)));
            currRight += Math.abs((segmentHeight-5) * Math.sin(currRotation * (Math.PI / 180)));

            // console.log(segmentHeight * Math.cos(currRotation))
            // @TODO currLeft actually needs to be Math.absolute(segmentHeight*Math.cosine(currRotation))
            // @TODO likewise currTop needs to be the sine of the above
            // @TODO: this needs to be implemented before the div is created most likely
            currRotation +=13;
        }
        return antennaLeft;
    }

    generateRightAntennas() {
        // Segment height set here
        const segmentHeight = 60;

        let currBottom = 50;
        let currRight = 70;
        let antennaRight = [];
        let currRotation = 60;
        for (let i = 0; i < 7; ++i) {
            let rotateString = "rotate("+currRotation+"deg)";
            let translateString = "translate("+currRight+"px, -"+currBottom+"px)";
            let transformString = translateString + " " + rotateString;
            antennaRight.push(<div className="antennaSegment" style={{height: segmentHeight, transform: transformString}}></div>)
            // currTop-=20;
            // currLeft-=10;
            currBottom += Math.abs((segmentHeight-5) * Math.cos(currRotation * (Math.PI / 180)));
            currRight +=((segmentHeight-5) * Math.sin(currRotation * (Math.PI / 180)));

            // console.log(segmentHeight * Math.cos(currRotation))
            // @TODO currLeft actually needs to be Math.absolute(segmentHeight*Math.cosine(currRotation))
            // @TODO likewise currTop needs to be the sine of the above
            // @TODO: this needs to be implemented before the div is created most likely
            currRotation -=13;
        }
        return antennaRight;
    }

    render() {
        if(this.state.antennaLeft == null || this.state.antennaRight == null) {
            this.setState({antennaLeft: this.generateLeftAntennas(), antennaRight: this.generateRightAntennas()});
        }
        return (
            <div className = "centisenpaiHead">
                <div className = "centisenpaiClaw left"></div>
                <div className = "centisenpaiClaw right"></div>
                <div className = "centisenpaiFaceContainer">
                    {this.state.antennaLeft}
                    {this.state.antennaRight}
                    <div className = "centisenpaiFace">
                        <div className = "centisenpaiEye left"></div>
                        <div className = "centisenpaiEye right"></div>
                        <div className = "centisenpaiNose"></div>
                        <div className = "centisenpaiMouth left"></div>
                        <div className = "centisenpaiMouth right"></div>
                        <div className = "centisenpaiMouth top"></div>

                    </div>
                </div>
            </div>
        );
    }
} export default CentisenpaiHead;