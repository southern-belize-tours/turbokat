import React, { Component } from 'react';
import ContractBox from './ContractBox';
import ExampleTile from './ExampleTile.js';


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

class ContractsContainer extends React.Component{
    
    constructor(props){
        super(); 

        this.state = {
            toggled: false, 
        };
    }

    render(){
        return (
                <div>
                    <div className = "contractsShowMore"> 
                        <div className = "cartographerShowArrowContainer"
                        onClick = {()=>{
                            let temp = this.state.toggled; 
                            this.setState({toggled: !temp});
                        }}>
                            <span className="showMoreText">
                                {this.state.toggled  ? "Hide Requirements" : "Show Requirements"}
                            </span> 
                            <div className="showArrowContainer">
                                <div className={this.state.toggled ? "showArrow toggled" :"showArrow"}></div> 
                            </div>
                        </div> 
                    </div> 
                    {/* <div className = {`contractsContainer ${this.state.toggled ? "" : "hidden"}`}> */}
                    <div>
                            {this.props.contractArr.map((contract, idx) => (
                                <>
                                    <Accordion defaultExpanded={true} expandIcon={<ExpandMoreIcon/>}>
                                        <AccordionSummary>
                                            {contract.name}
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div className="contractContainer">
                                                <div className = "contractDescription">
                                                    {contract.description}
                                                </div>
                                                {contract.sprint == null ? null :
                                                <div className = "contractBoxSprints">
                                                    <div className = "smallText">Sprints</div>
                                                    <div className = "contractBoxSprintContainer">{contract.sprint > 0 ? contract.sprint : 3}</div>
                                                    <div className = "contractBoxSprintContainer">{contract.sprint < 3 ? contract.sprint+1 : 1}</div> 
                                                </div> }
                                                <div className = "contractExample">
                                                { contract.exampleGrid ?
                                                    <div className = "exampleTileGrid">
                                                    { 
                                                        contract.exampleGrid.map(exampleGridRow =>(
                                                            exampleGridRow.map(tile =>(
                                                                <ExampleTile type = {tile == 1 ? "contractorTile" : tile == 2 ? "neutral" 
                                                                                   : tile == 3 ? "dataAnalytics" : tile == 4 ? "ccServer" 
                                                                                   : tile == 5 ? "ioSystems" : tile == 6 ? "powerSupply" : "" }
                                                                              feature = {tile >= 10 ? true : false}/> 
                                                            ))
                                                        )) 
                                                    } 
                                                    <div className = "exampleGridPoints">= {contract.value} Points</div>
                                                    </div> 
                                                  : null}
                                                </div>
                                            </div>
                                            {/* <ContractBox name = {contract.name}
                                                sprint = {idx}
                                                value = {contract.value}
                                                description = {contract.description}this.props
                                                exampleGrid = {contract.exampleGrid}/> */}
                                        </AccordionDetails>
                                    </Accordion>
                                    {/* <ContractBox name = {contract.name}
                                            sprint = {idx}
                                            value = {contract.value}
                                            description = {contract.description}
                                            exampleGrid = {contract.exampleGrid}/> */}
                                </>
                            ))}
                    </div>
                </div>
        ); 
    }
}export default ContractsContainer; 