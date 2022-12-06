import React from 'react';   

import './Cartographer.css'; 

import ExampleTile from './ExampleTile.js'; 
import RotateButton from './RotateButton.js'; 
import FlipButton from './FlipButton.js'; 

// const transpose = matrix => {
//     for (let row = 0; row < matrix.length; row++) {
//       for (let column = 0; column < row; column++) {
//         let temp = matrix[row][column]
//         matrix[row][column] = matrix[column][row]
//         matrix[column][row] = temp
//       }
//     }
//     return matrix;
// }

const rotate = temp => {
    return temp.map((row, i) =>
      row.map((val, j) => temp[temp.length - 1 - j][i])
    );
  };

const flip = temp => {
    return temp.map((row, i) => 
        row.map((val, j) => temp[i][temp.length-1 -j])
    );
};

// const reverse = matrix =>  matrix.map(row => row.reverse());

class Shape extends React.Component{
    
    constructor(props){
        super(); 

        /* Holds the texture, which defaults if there is no choice 
         * Determines if the shape has already been chosen - while this is not the case renders a button for choice 
         * Once shape is chosen it should have a rotate button that allows the shape to rotate. 
         * Each rotation (rotate, rotate90, rotate 180, rotate 270) will be stored into an integer variable for easy css use 
         */ 
        this.state = {
            rotation: 0, 
            updateSelf: false,
            points: 0,        
            flip: false,      
            textureChosen: props.shape.availableTextures.length > 1 ? false : true,
            shapeChosen: props.shape.grid.length > 1 ? false : true, 
            chosenShape: props.shape.grid.length > 1 ? null : props.shape.grid[0],
            texture: props.shape.availableTextures.length > 1 ? null : 
                                                               props.shape.availableTextures[0] , 
            selectedShape : null
        }

        this.rotateButtonCallback = this.rotateButtonCallback.bind(this); 
        this.flipButtonCallback = this.flipButtonCallback.bind(this); 
        this.selectTexture = this.selectTexture.bind(this); 
    }

    componentWillReceiveProps(nextProps){
        for(const index in nextProps){
            if(nextProps[index]!==this.props[index])
            {
                this.setState({updateSelf: true}); 
            }
        }
    }

    rotateButtonCallback(){
        let temp = this.state.rotation; 
        temp += 90;
        temp %= 360; 
        this.setState({rotation: temp}); 
    }

    flipButtonCallback(){
        let temp = this.state.flip; 
        this.setState({flip: !temp});
    }

    /* Resets the user menu to select the shape type. 
     */
    backToConfiguration(){
        this.setState({
            shapeChosen: this.props.shape.grid.length > 1 ? false : true, 
            points: 0,
            chosenShape: this.props.shape.grid.length > 1 ? null : this.props.shape.grid[0],
            updateSelf: false
        });
    }

    backToTexture(){
        this.setState({
            textureChosen: this.props.shape.availableTextures.length > 1 ? false : true, 
            shapeChosen: this.props.shape.grid.length > 1 ? false : true, 
            points: 0, 
            chosenShape: this.props.shape.grid.length > 1 ? null : this.props.shape.grid[0]
        });
    }

    //All the UI rotations are done through CSS. The actual data is rotated here
    processShape(){
        let temp = this.state.chosenShape; 
        for(let i=0; i< this.state.rotation; i+=90){
            temp = rotate(temp); 
        }
        if(this.state.flip) temp = flip(temp); 
        this.setState({selectedShape: temp}); 
        this.props.selectShapeCallback(temp, this.state.texture, this.state.points); 

    }

    
    //User has selected their shape and is ready to place it on the grid
    selectShape(){
        this.processShape(); 
    }

    selectTexture(texture){
        this.setState({
            textureChosen: true, 
            texture: texture
        });
    }

    doTheThing(){
        this.setState({
            shapeChosen: this.props.shape.grid.length > 1 ? false : true, 
            points: 0,
            chosenShape: this.props.shape.grid.length > 1 ? null : this.props.shape.grid[0],
            updateSelf: false,
            textureChosen: this.props.shape.availableTextures.length > 1 ? false : true, 
            texture: this.props.shape.availableTextures.length > 1 ? null : 
                     this.props.shape.availableTextures[0]
        });
    }

    componentDidUpdate(){
        if(this.state.updateSelf) this.doTheThing(); 
    }

    render(){
        return(
            <div> 
                <div className = "contractsContainerTitle">{this.props.shape.availableTextures.length === 1 && this.props.shape.availableTextures[0] === 7 ? "Defect Shape: " : "Sprint Shape: "} {this.props.shape.name}</div>
                <div className = "contractBoxSprints">
                        <div className = "smallText">Story Points</div>
                        <div className = "contractBoxSprintContainer">{this.props.shape.storyPoints }</div>
                    </div> 
                <div className = "shapeOptionsContainer"></div>
                <div className = "contractBoxName">{!this.state.textureChosen ? "Select Texture For Shape on Right" : 
                                                    !this.state.shapeChosen ? "Select Configuration" : 
                                                     this.state.shapeChosen && this.state.textureChosen ? "Select Rotation:" : ""}
                                                    {(this.props.shape.availableTextures.length === 1 && this.props.shape.availableTextures[0] === 7) || this.props.shape.name === "Final Correction"? 
                                                    " (QA Lead)" : " (PEM)"}
                </div>
                <div className = "shapeOptions"> 
                {
                    this.state.textureChosen === false ?
                    <div className = "textureContainer">
                            <div className = "shapeContainer small spaced"> 
                                {this.props.shape.availableTextures.map(texture =>(
                                        <div className = "tileTextureContainer"><ExampleTile type = {texture} clickFunction = {this.selectTexture}/></div>
                                    ))
                                }
                            </div>
                            <div className = "shapeRotateContainer small">
                                <div className = "rotateCircleInner">
                            <div className = "shapeContainer small"> 
                            {this.state.chosenShape.map(row => (
                                row.map(tile => (
                                    tile === 0 ? <ExampleTile/> :
                                    <ExampleTile type = {"neutral"}/> 
                                ))
                            ))}
                            </div></div></div>  
                    </div> 
                    : 
                    this.state.shapeChosen && this.state.textureChosen ? 
                    <div className = {`shapeRotateContainer small ${this.state.rotation === 90 ? " ninetyDeg" :  this.state.rotation === 180 ? " eightyDeg" :
                    this.state.rotation === 270 ? " seventyDeg" : ""} ${this.state.flip ? "flip" : "gfds"}`}>
                        <div className = "rotateCircleInner">
                            <div className = "shapeContainer small"> 
                            {this.state.chosenShape.map(row => (
                                row.map(tile => (
                                    tile === 0 ? <ExampleTile/> : 
                                    <ExampleTile type = {this.state.texture == null ? "neutral" : this.state.texture}
                                    border={this.props.shape.name==="Final Correction" ? true : false}/> 
                                ))
                            ))}
                            </div> 
                        </div> 
                    </div> 
                    :
                    this.props.shape.grid.map((shapeOption, idx) => (
                    <div className = {`shapeRotateContainer option small ${this.state.rotation === 90 ? " ninetyDeg" : this.state.rotation === 180 ? " eightyDeg" :
                     this.state.rotation === 270 ? " seventyDeg" : ""}`}
                         onClick = {(event) => {
                             this.setState({
                                 points: this.props.shape.gridRewards[idx], 
                                 shapeChosen: true, 
                                 chosenShape: shapeOption
                             })
                         }}>
                        <div className = "rotateCircleInner">
                            <div className = "shapeContainer small"> 
                                {shapeOption.map(row =>(
                                    row.map(tile =>(
                                        tile === 0 ? <ExampleTile/> :
                                        <ExampleTile type = {
                                            this.state.texture == null ? "neutral" : this.state.texture}/>
                                    ))
                                ))}
                            </div>
                        </div> 
                        {this.props.shape.gridRewards[idx] === 1 ?
                            <div className = "pointsContainer">+ {this.props.shape.gridRewards[idx]} Contract {this.props.shape.gridRewards[idx] > 1 ? "Points" : "Point"}</div> : null}
                    </div> 
                ))}
                </div>
                {
                    this.state.shapeChosen === true &&
                    this.state.textureChosen === true ?
                        <>
                        <RotateButton rotateState = {this.state.rotation} 
                                      clickFunction = {this.rotateButtonCallback}/>
                        <FlipButton flipState = {this.state.flip}
                                    clickFunction = {this.flipButtonCallback}/>
                        </> 
                    : null
                }
                <div className = "shapeButtonGrid">
                    {this.state.textureChosen === true &&
                     this.props.shape.availableTextures.length > 1 ?
                           <div className = "shapeButton"
                           onClick = {()=>{
                               this.backToTexture(); 
                           }}>
                          Back to Texture
                      </div>  
                    :
                    this.state.shapeChosen === true &&
                    this.props.shape.grid.length > 1 ?
                        <div className = "shapeButton"
                             onClick = {()=>{
                                 this.backToConfiguration(); 
                             }}>
                            Back to Configuration
                        </div> 
                        : null}
                    {this.state.textureChosen === true &&
                     this.state.shapeChosen === true  ?
                        <div className = "shapeButton"
                             onClick = {()=>{
                                 this.selectShape(); 
                             }}>
                            Ready to Place Shape (PM)
                        </div>
                        : null}
                </div>
            </div>
        )
    }
}
export default Shape; /* {((this.state.rotation == 90 ? "shapeRotateContainer  option small ninetyDeg" : 
this.state.rotation == 180 ? "shapeRotateContainer option  small eightyDeg" :
this.state.rotation == 270 ? "shapeRotateContainer option  small seventyDeg" :
"shapeRotateContainer option small") + (this.state.flip==true ? " flip" : ""))}*/