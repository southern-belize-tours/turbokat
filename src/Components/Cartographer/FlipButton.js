import React from 'react';

// MUI imports
import FlipIcon from '@mui/icons-material/Flip';
import Tooltip from '@mui/material/Tooltip';
import { Button } from '@mui/material';

class FlipButton extends React.Component{

    constructor(props){
        super(); 

    }

    render(){
        return(
            <Tooltip title="Flip Horizontally">
                <Button size="large" variant="outlined" className="manipulateShapeButton">
                    <FlipIcon onClick = {() => {this.props.clickFunction();}}/> Flip Horizontally
                </Button>
            </Tooltip>
        );
    }
}export default FlipButton;

{/* <div className = "flipButtonPositioner">
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
</div>  */}