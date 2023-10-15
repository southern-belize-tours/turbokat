import React from 'react';

// Mui components
import { Dialog, DialogTitle, DialogActions, DialogContent, Button } from '@mui/material';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AirIcon from '@mui/icons-material/Air';
import RuleIcon from '@mui/icons-material/Rule';
import UpdateIcon from '@mui/icons-material/Update';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MapIcon from '@mui/icons-material/Map';
import InterestsIcon from '@mui/icons-material/Interests';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';

// autoPlay(SwipeableViews);

/* Instructions TODO list: 
 * 1) Potentially talk about getting points for contractor black boxes. 
 * 2) Talk about the roles
 * 3) Talk about time that they get per turn
 * 4) Talk about re-reading the instructions takes away 1 point
 * 5) Talk about how certain shape selections may give rewards
 * 6) Talk about how sometimes you may be mandated to place on features tiles. 
 * 7) Reword "features" when it's not in the context of feature tiles. 
 * 8) Figure out who gets to place the defect tiles
 * 9) Consider the potential of defect tiles corrupting adjacent tiles. 
 */

const instructionReelContent = [
<div className = "instructionBullet">
    <div className = "instructionGridTitle">Win By Earning the Most Points</div> 
    <div>
            <div className = "definitionTitle">
                <h3 className = "definitionHeader">
                    Fulfil the Queen's Decree <RuleIcon className = "clrPrimary"/>
                </h3>
                <div className = "definition">
                    Earn points by placing landscape tiles on the grid in such a way that fulfills the Queen's Decrees.
                    There will be four different Decrees to earn points on.
                </div>
            </div>
            <div className = "definitionTitle">
                <h3 className = "definitionHeader">
                    Decrees Change Each Season <UpdateIcon className = "clrSecondary"/>
                </h3>
                <div className = "definition">
                    The Decrees change each season.
                    You can plan for the present and the future Decrees
                </div>
            </div> 
            <div className = "definitionTitle">
                <h3 className = "definitionHeader">
                    Points awarded at Season's End <AttachMoneyIcon className = "clrTertiary"/>
                </h3>
                <div className = "definition">
                    Once the season has completed, then points are counted.
                </div>
            </div>
    </div>
</div>,
<div className = "instructionBullet">
    <div className = "instructionGridTitle">Timing</div> 
    <div>
            <div className = "definitionTitle">
                <h3 className = "definitionHeader">
                    4 Seasons <UpdateIcon className = "clrSecondary"/>
                </h3>
                <div className = "definition">
                    There are 4 seasons, each with different decrees
                    <div>
                        <LocalFloristIcon className="clrSpring"/>
                        <WbSunnyIcon className="clrSummer"/>
                        <AirIcon className="clrFall"/>
                        <AcUnitIcon className="clrWinter"/>
                    </div>
                </div>
            </div>    
            <div className = "definitionTitle">
                Seasons have different Lengths
                <div className = "definition">
                    Each season has a different length, determining the number of different tiles you can place.
                    Some tiles will progress the season faster than others.
                    Watch out - if you take too long to place a tile, you lose it!
                    <div className = "seasonActionsContainer">
                        <div className = "seasonActionsContainerHeading">
                            Season
                        </div>
                        <div className = "seasonActionsContainerHeading">
                            Number of Actions
                        </div>
                        <div><LocalFloristIcon className="clrSpring"/> Spring</div>
                        <div className = "numActions">7</div>
                        <div><WbSunnyIcon className="clrSummer"/> Summer</div>
                        <div className = "numActions">7</div>
                        <div><AirIcon className="clrFall"/> Fall</div>
                        <div className = "numActions">6</div>
                        <div><AcUnitIcon className="clrWinter"/> Winter</div>
                        <div className = "numActions">5</div>
                    </div>
                </div>
            </div>
    </div>
</div>,
<div className = "instructionBullet">
    <div className = "instructionGridTitle">
        The Map Starts With <MapIcon className="clrPrimary"></MapIcon>
    </div>
    <div>
        <div className = "definitionTitle">
            <div className = "exampleTileLabelContainer">
                <div className = "blankExampleTile inline"></div>
                <span>Uncharted Land</span>
            </div>
            <div className = "definition">
                Strategically place your tiles over these spaces to fulfil requirements
            </div>
        </div> 
    </div>
    <div>
        <div className = "definitionTitle">
            <div className = "exampleTileLabelContainer">
                <div className = "blankExampleTile contractorTile inline"></div>
                <span>Mountains</span>
            </div>
            <div className = "definition">
                There are mountains that are already mapped, which you cannot map tiles over.
                Some of the queens decrees may involve mapping certain tiles adjacent to mountains.
            </div>
        </div>
    </div>
</div>,
<div className = "instructionBullet">
    <div className = "instructionGridTitle">
        Place Tiles to Earn Points <AttachMoneyIcon className = "clrPrimary"></AttachMoneyIcon>
    </div>
    <div className = "definitionTitle">
        <h3 className = "definitionHeader">
            Tiles have different shapes <InterestsIcon className = "clrPrimary"></InterestsIcon>
        </h3>
        <div className = "definition">
            Some allow you to choose between different shapes.
            These shapes can be selected to be placed on any unoccuppied tile in any way such that it fits on the grid.
        </div>
    </div>
    <div className = "definitionTitle">
        <h3 className = "definitionHeader">
            Tiles have different colors <FormatColorFillIcon className = "clrSecondary"></FormatColorFillIcon>
        </h3>
        <div className = "definition">
            Some allow you to choose between different types
        </div>
        <div>
        <div className = "blankExampleTile dataAnalyticsTile inline" style={{margin: "0 .5rem"}}></div>
        Data Analytics:
    </div>
    <div>
        <div className = "blankExampleTile ccServerTile inline" style={{margin: "0 .5rem"}}></div>
        Cloud Computing Server:
    </div>
    <div>
        <div className = "blankExampleTile ioSystemTile inline" style={{margin: "0 .5rem"}}></div>
        IO System
    </div>
    <div>
        <div className = "blankExampleTile powerSupply inline" style={{margin: "0 .5rem"}}></div>
        Power Supply
    </div>
    </div>
</div>,
<div className = "instructionBullet">
    <div className = "instructionGridTitle">
        Prepare for Monsters
    </div> 
    <div className = "definitionTitle">
        
        <div className = "exampleTileLabelContainer">
            <div className = "blankExampleTile defect inline"></div>
            <span>Monster</span>
        </div>
        <div className = "definition">
            At random, your team may be raided by Monsters, and must place a shape consisting of monster tiles.
        </div>
    </div> 
    <div style = {{marginTop: "1rem"}}> 
        At the end of each sprint when requirements are being evaluated, each non-occuppied tile 
        <div className = "fancyWord"> 
            adjacent 
            <div className = "definition">
                <div>Adjacent is defined as immediately horizontally or vertically neighboring.</div> 
                <div>Diagonal tiles are not considered adjacent. </div> 
            </div> 
        </div>
        to a monster tile will result in losing 3 contract points for not mitigating these defects. 
    </div> 
</div>
];

const maxSteps = instructionReelContent.length;

class ContractorInstructions extends React.Component{

    constructor(props){
        super();

        this.state = {
            instructionIndex: 0
        }; 
    }

    render(){

        return(
            <Dialog open={this.props.dialogOpen}>
                <DialogTitle>Instructions</DialogTitle>
                <DialogContent>
                {/* <SwipeableViews
                    index={this.state.instructionIndex}
                    onChangeIndex={(idx) => {this.setState({instructionIndex: idx})}}
                    enableMouseEvents
                > */}
        {instructionReelContent.map((step, index) => (
            step
        //   <div key={step.label}>
        //     {Math.abs(this.state.instructionIndex - index) <= 2 ? (
        //       <Box
        //         component="img"
        //         sx={{
        //           height: 255,
        //           display: 'block',
        //           maxWidth: 400,
        //           overflow: 'hidden',
        //           width: '100%',
        //         }}
        //         src={step.imgPath}
        //         alt={step.label}
        //       />
        //     ) : null}
        //   </div>
        ))}
      {/* </SwipeableViews> */}
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={this.state.instructionIndex}
        nextButton={
          <Button
            size="small"
            onClick={() => {
                let newIdx = this.state.instructionIndex + 1;
                this.setState({instructionIndex: newIdx});
            }}
            disabled={
                this.state.instructionIndex === maxSteps - 1
            }
          >
            Next
            <KeyboardArrowRight/>
          </Button>
        }
        backButton={
          <Button size="small" onClick={
            () => {
                let newIdx = this.state.instructionIndex - 1;
                this.setState({instructionIndex: newIdx})
            }
          } disabled={this.state.instructionIndex === 0}>
            <KeyboardArrowLeft/>
            Back
          </Button>
        }
      />
                </DialogContent>
                <DialogActions>
                    <Button variant = "outlined"
                        onClick = {() => {
                        if(this.props.gameStarted) {
                            this.props.closeButtonCallback();
                        } else {
                            this.props.startButtonCallback();
                        }}}>
                        { this.props.gameStarted ? "Close Instructions" : "View First Season's Decrees"}
                    </Button>
                </DialogActions>
            </Dialog>


            // <div className = "instructionsBackground">
            //     <div className = "instructionsContainer">
            //         {instructions.map(instruction => <>{instruction}</>)}
            //         <div className = "instructionReel">
            //             <div className = "prevArrow" 
            //                  onClick = {()=>
            //                     {let x = this.state.instructionIndex; 
            //                      if(x==0)x=instructionReelContent.length-1;
            //                      else x--; 
            //                      this.setState({instructionIndex: x})}}>
            //             </div>
            //             <div className = "nextArrow"
            //                  onClick = {()=>
            //                     {let x = this.state.instructionIndex; 
            //                      if(x==instructionReelContent.length-1)x=0;
            //                      else x++; 
            //                      this.setState({instructionIndex: x})}}>
            //             </div>
            //             {instructionReelContent.map((page,idx) => 
            //                 (idx==this.state.instructionIndex ? page : null )
            //             )}
            //             <div className = "bulletContainer">
            //                 {instructionReelContent.map((page,idx) => 
            //                     <div className = {`bullet ${idx==this.state.instructionIndex ? "selected" : ""}`} onClick = {()=>{this.setState({instructionIndex: idx})}}></div> 
            //                 )}
            //             </div>
            //         </div> 


                    
            //         <div className = "startBtnBox">
            //             {this.props.gameStarted ? <CartographerStartButton clickFunction = {this.props.closeButtonCallback} text = "Close Instructions"/> 
            //                 : <CartographerStartButton text = "View First Sprint (Roles have been Selected)" clickFunction = {this.props.startButtonCallback}/>}
            //         </div> 
            //     </div>
            // </div>
        );
    }
}export default ContractorInstructions; 

/*
<div className = "instructionGrid">
                        <div className = "instructionBullet">
                            <div className = "instructionGridTitle">The Grid Starts With</div> 
                            <div>
                                <div className = "definitionTitle">
                                    <div className = "blankExampleTile inline" style={{margin: "0 .5rem"}}></div>
                                    Unoccuppied Space
                                    <div className = "definition">
                                    Place your new systems over this space to fulfill requirements and earn contract points.
                                </div> 
                                </div> 
                            </div>
                            <div>
                                <div className = "definitionTitle">
                                    <div className = "blankExampleTile contractorTile inline" style={{margin: "0 .5rem"}}></div>
                                    Contractor Black Boxes
                                    <div className = "definition">
                                        These are systems that are already in place. 
                                        Certain customer requirements may involve placing systems to interact with these components.
                                    </div>    
                                </div> 
                            </div>
                        </div>
                        <div className = "instructionBullet definitionTitle">
                            <div className = "instructionGridTitle">Place Features to Earn Points</div> 
                            <div className = "definition">
                                Features come in several shapes. 
                                Some allow you to choose the color and shape.  
                                These shapes can be selected to be placed on any unoccuppied tile in any way such that it fits on the grid.
                            </div> 
                            <div>
                                <div className = "blankExampleTile dataAnalyticsTile inline" style={{margin: "0 .5rem"}}></div>
                                Data Analytics:  
                            </div>
                            <div>
                                <div className = "blankExampleTile ccServerTile inline" style={{margin: "0 .5rem"}}></div>
                                Cloud Computing Server:  
                            </div>
                            <div>
                                <div className = "blankExampleTile ioSystemTile inline" style={{margin: "0 .5rem"}}></div>
                                IO System:  
                            </div>
                            <div>
                                <div className = "blankExampleTile powerSupply inline" style={{margin: "0 .5rem"}}></div>
                                Power Supply:  
                            </div>
                        </div>
                        <div className = "instructionBullet">
                            <div className = "instructionGridTitle">
                                Plan for Defects
                            </div> 
                            <div className = "definitionTitle">
                                <div className = "blankExampleTile defect inline" style={{margin: "0 .5rem"}}></div>
                                    Defect 
                                    <div className = "definition">
                                    At random, your team may encounter a shape containing defects which your QA lead must place. 
                                </div> 
                            </div> 
                            <div style = {{marginTop: "1rem"}}> 
                                At the end of each sprint when requirements are being evaluated, each non-occuppied tile 
                                <div className = "fancyWord"> 
                                    adjacent 
                                    <div className = "definition">
                                        <div>Adjacent is defined as immediately horizontally or vertically neighboring.</div> 
                                        <div>Diagonal tiles are not considered adjacent. </div> 
                                    </div> 
                                </div>
                                to a defect will result in losing 3 contract points for not mitigating these defects. 
                            </div> 
                        </div>
                    </div>*/