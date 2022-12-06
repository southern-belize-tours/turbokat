
import React from 'react';

class FlipButton extends React.Component{

    constructor(props){
        super(); 

    }

    render(){
        return(
            <div className = "flipButtonPositioner">
            <div className = "rotateButtonContainer"
                 onClick = {() => {
                    this.props.clickFunction(); 
                }}>
                <div className = "rotateCircleInner">
                    <div className = "flipCircle">
                        <div className = "flipArrow">
                            <div className = "arrow"></div>
                            <div className = "arrow"></div>
                        </div>
                    </div>
                </div> 
            </div> 
            </div> 
        );
    }
}export default FlipButton; 