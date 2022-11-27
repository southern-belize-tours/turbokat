import React, { Component } from 'react';   

import ExampleTile from './ExampleTile.js'; 

class ContractBox extends React.Component{

    constructor(props){
        super(); 

        this.state = {
            toggled: false
        };
    }

    render(){
        return(
            <div className="contractBox">
                <div className = "contractBoxName"> {this.props.name} </div>
                {this.props.sprint == null ? null : 
                    <div className = "contractBoxSprints">
                        <div className = "smallText">Sprints</div>
                        <div className = "contractBoxSprintContainer">{this.props.sprint > 0 ? this.props.sprint : 3}</div>
                        <div className = "contractBoxSprintContainer">{this.props.sprint < 3 ? this.props.sprint+1 : 1}</div> 
                    </div> }
                <div className = "contractBoxDescription"> {this.props.description} </div>
                <div className = "cartographerShowArrowContainer"
                     onClick = {()=>{
                         let temp = this.state.toggled; 
                         this.setState({toggled: !temp});
                     }}>
                    <span className="showMoreText">
                        {this.state.toggled  ? "Hide Example" : "Show Example"}
                    </span>
                    <div className="showArrowContainer">
                        <div className={this.state.toggled ? "showArrow toggled" :"showArrow"}></div> 
                    </div>
                    <div className={this.state.toggled ? "contractExample" : "contractExample hidden"}>
                        { this.props.exampleGrid && this.state.toggled ? 
                            <div className = "exampleTileGrid">
                            { 
                                this.props.exampleGrid.map(exampleGridRow =>(
                                    exampleGridRow.map(tile =>(
                                        <ExampleTile type = {tile == 1 ? "contractorTile" : tile == 2 ? "neutral" 
                                                           : tile == 3 ? "dataAnalytics" : tile == 4 ? "ccServer" 
                                                           : tile == 5 ? "ioSystems" : tile == 6 ? "powerSupply" : "" }
                                                      feature = {tile >= 10 ? true : false}/> 
                                    ))
                                )) 
                            } 
                            <div className = "exampleGridPoints">= {this.props.value} Points</div>
                            </div> 
                          : null}
                    </div>
                </div> 
            </div>
        );
    }
}
export default ContractBox; 