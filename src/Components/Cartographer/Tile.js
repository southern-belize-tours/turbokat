import React from 'react';

import './Cartographer.css';

class Tile extends React.Component{
    
    constructor(props){
        super(); 
    }

    render(){
        return(
            <div className={ (this.props.type >=10 || this.props.type === "featureTile"  ? "featureTile blankTile " : "blankTile ") +

                               (this.props.type%10 === 9 || this.props.type === "contractorTile" ? "contractorTile"
                             : this.props.type%10 === 3 || this.props.type=== "ccServer" ? "ccServerTile"
                             : this.props.type%10 === 5 || this.props.type=== "ioSystems" ? "ioSystemTile"
                            : this.props.type%10 === 4 || this.props.type === "dataAnalytics" ? "dataAnalyticsTile"
                            : this.props.type%10 === 7 ? "defect" 
                           //: this.props.type ==10 || this.props.type === "featureTile" ? "blankTile featureTile"+ this.props.additionalClasses
                           : this.props.type%10 === 6 || this.props.type === "powerSupply" ? "powerSupply"
                           : "blankTile")  + " "+this.props.additionalClasses}
                 onClick = {(e) => {if(this.props.clickFunction!=null && ((this.props.additionalClasses === " hover" && this.props.type === 0 || this.props.type === 10)||(this.props.additionalClasses===" hoverBad" && this.props.type!==10 && this.props.type!==0)))this.props.clickFunction(this.props.xIndex, this.props.yIndex, e)}}
                 onMouseEnter = {(e) => {this.props.onHover(e, this.props.xIndex, this.props.yIndex)}}>
            </div>
        )
    }
}
export default Tile; 

/*
                            {this.props.xIndex === 0 ? <div className = "above ">{this.props.yIndex}</div> : null}
                            {this.props.yIndex === 0 ? <div className = "before">{String.fromCharCode(65+this.props.xIndex)}</div> : null} 
                            */