import React from 'react';

import './Cartographer.css';

class ExampleTile extends React.Component{
    
    constructor(props){
        super(); 

    }

    render(){
        return(
            <div style={this.props.margin == null ? {zIndex: `${this.props.border==null ? "": "1"}`,
                                                    borderWidth: `${this.props.border==null ? "" :"2px"}`}
                                          : {marginRight: `0px ${this.props.margin}`, borderWidth: `${this.props.border==null ? "0px" :"2px"}`}}
                 onClick = {()=>{if(this.props.clickFunction!=null)this.props.clickFunction(this.props.type)}}
                 className={ this.props.type === "contractorTile" ? "blankExampleTile contractorTile"
                           : this.props.type === "neutral" ? "blankExampleTile neutralTile"
                           : this.props.type ==4 || this.props.type === "dataAnalytics" ? "blankExampleTile dataAnalyticsTile" 
                           : this.props.type ==3 || this.props.type=== "ccServer" ? "blankExampleTile ccServerTile"
                           : this.props.type ==5 || this.props.type=== "ioSystems" ? "blankExampleTile ioSystemTile"
                           : this.props.type == 6 || this.props.type === "powerSupply" ? "blankExampleTile powerSupply"
                           : this.props.type == 7 ? "blankExampleTile defect"
                           : this.props.feature ? "blankExampleTile featureTile"
                           : "blankExampleTile"}>
            </div>
        )
    }
}
export default ExampleTile; 