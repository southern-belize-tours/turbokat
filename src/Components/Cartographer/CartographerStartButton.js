
import React, { Component } from 'react';   


class CartographerStartButton extends React.Component{

    constructor(){
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