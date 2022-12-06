
import React from 'react';   


class CartographerStartButton extends React.Component{

    constructor(props){
        super(); 

    }

    render(){
        return ( 
            <div className = "startButton"
                 onClick = {() => {this.props.clickFunction()}}>
                {this.props.text==null ? "Start Game" : this.props.text}  
            </div>
        );
    }
}
export default CartographerStartButton; 