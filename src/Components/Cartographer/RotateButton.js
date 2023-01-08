
import React from 'react';

import Rotate90DegreesCwIcon from '@mui/icons-material/Rotate90DegreesCw';
import { Button } from '@mui/material';


class RotateButton extends React.Component{

    constructor(props){
        super();
    }

    render(){
        let fullClassName = "rotateButton ";
        switch(this.props.rotateState) {
            case (90):
                fullClassName = fullClassName + "ninetyDeg";
                break;
            case (180):
                fullClassName = fullClassName + 'eightyDeg';
                break;
            case(270):
                fullClassName = fullClassName + 'seventyDeg';
                break;
            default:
                break;
        }
        console.log(fullClassName);
        return(
            <Button className = "manipulateShapeButton" size="large" variant = "outlined" onClick = {() => {
                    this.props.clickFunction();
                }}>
                <Rotate90DegreesCwIcon className = {fullClassName}
                /> Rotate 90 Degrees
            </Button>
        );
    }
}export default RotateButton; 

            {/* <div className = {this.props.rotateState === 90 ?
                    "rotateButtonContainer ninetyDeg"
                : this.props.rotateState === 180 ? 
                    "rotateButtonContainer eightyDeg" 
                : this.props.rotateState === 270 ?
                    "rotateButtonContainer seventyDeg"
                : "rotateButtonContainer"} 
                onClick = {() => {
                    this.props.clickFunction(); 
                }}>
                <div className = "rotateCircleInner">
                    <div className = "rotateCircle">
                        <div className = "rotateArrow"></div>
                    </div>
                </div> 
                <div className = "rotateDegrees">90</div>
            </div>  */}