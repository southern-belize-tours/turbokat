
import React from 'react';

class RotateButton extends React.Component{

    constructor(props){
        super();
    }

    render(){
        return(
            <div className = "rotateButtonPositioner">
            <div className = {this.props.rotateState == 90 ? "rotateButtonContainer ninetyDeg"
                            : this.props.rotateState == 180 ? "rotateButtonContainer eightyDeg" 
                            : this.props.rotateState == 270 ? "rotateButtonContainer seventyDeg"
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
            </div> 
            </div> 
        );
    }
}export default RotateButton; 