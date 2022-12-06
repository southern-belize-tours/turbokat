import React from 'react';

import './Cartographer.css';

// Mui Components
import { Button } from '@mui/material';

// Custom Components
import ContractorInstructions from './ContractorInstructions.js'; 
import CartographerStartButton from './CartographerStartButton.js'; 
import ContractsContainer from './ContractsContainer.js';
import ContractBox from './ContractBox.js';
import Shape from './Shape.js';
import Tile from './Tile.js';
import shapes from './Utilities/shapes.js';
import availableContracts from './Utilities/availableContracts.js';

const gridSize = 9; 
const numContractorTiles = 4;

const qaShape =     {
    name: "Final Correction", 
    /*
     * 3 = cloud computing = yellow
     * 4 = data analytics = blue
     * 5 = IO Systems = green
     * 6 = Power Supplies = brown
     * 7 = Defects = purple 
     * 8 = Contractor
     * 10 = Feature 
     */ 
    availableTextures: [0],
    //Let 1 represent a typical tile the shape occupies and 2 represent the cursor vertex.
    //The grid is an array of 2D arrays giving shape options.
    //@TODO possibly implement a 3rd grid option where the Project Manager picks and it is suboptimal
    grid: [[
        [0, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ]],
    gridRewards: [0,0], 
    storyPoints: 0
};

class Coordinate {

    constructor(){
        this.x = Math.floor(Math.random() * gridSize); 
        this.y = Math.floor(Math.random() * gridSize); 
    }

    cmp(coord){
        if(coord === null ||
           coord.x === null ||
           coord.y === null)
           return false; 
        return this.x === coord.x && this.y === coord.y;
    }
}

function doDefects(tiles){
    let count = 0; 
    let tempArr = tiles;
    for(let i=0;i<tiles.length;++i){
        for(let j=0;j<tiles[i].length;++j){
            if(tempArr[i][j].type%10 === 7) {
                if(tempArr[i-1] && tempArr[i-1][j].type%10 === 0)
                {
                    count+=1; 
                    tempArr[i-1][j].type = 8; 
                }
                if(tempArr[i+1] && tempArr[i+1][j].type%10 === 0)
                {
                    count+=1;
                    tempArr[i+1][j].type = 8;
                }
                if(tempArr[i][j-1] && tempArr[i][j-1].type%10 === 0)
                {
                    count+=1;
                    tempArr[i][j-1].type = 8; 
                }
                if(tempArr[i][j+1] && tempArr[i][j+1].type%10 === 0)
                {
                    count+=1; 
                    tempArr[i][j+1].type = 8;
                }
            }
        }
    }
    for(let i=0;i<tiles.length;++i){
        for(let j=0;j<tiles[i].length;++j){
            if(tiles[i][j].type%10 === 7) {
                if((tiles[i-1] && tiles[i-1][j].type%10 === 0)     ||
                   (tiles[i+1] && tiles[i+1][j].type%10 === 0)     ||
                   (tiles[i][j-1] && tiles[i][j-1].type%10 === 0)  ||
                   (tiles[i][j+1] && tiles[i][j+1].type%10 === 0))
                {
                    let chanceOfCorruption = Math.floor(Math.random()*5)
                    if(chanceOfCorruption === 1 && tiles[i-1]) tiles[i-1][j].type=7;
                    if(chanceOfCorruption === 2 && tiles[i+1]) tiles[i+1][j].type=7;
                    if(chanceOfCorruption === 3 && tiles[i][j-1]) tiles[i][j-1].type=7;
                    if(chanceOfCorruption === 4 && tiles[i][j+1]) tiles[i][j+1].type=7;
                }
            }
            else if (tiles[i][j].type%10 === 8)tiles[i][j].type=0;
        }
    }
    return count*-1; 
}


class Cartographer extends React.Component{
    

    constructor(props){
        super(); 

        let tileArr = []; 
        for(let i=0;i<gridSize;++i){
            let tileRow = []; 
            for(let j=0;j<gridSize;++j){
                let tempTile = {xIndex: i, yIndex: j, type: 0, onHover: null};
                tileRow.push(tempTile);
            }
            tileArr.push(tileRow); 
        }
        this.state = {
            processingSprint: false, 
            time: {}, seconds: 70,
            contract: 0, 
            sprint: 0,
            qaAction: false, 
            storyPoints: 0, 
            points: 0, 
            currPoints: 0, 
            tiles: [...tileArr],
            contracts: [],
            chosenTexture: null, 
            budgetOverrun: false, 
            currShape: null, /*For which shape the user may pick from*/ 
            chosenShape: null, /*For what hte user has chosen*/ 
            selectingShape: false,
            gameStarted: false,
            defectShapes: [],
            instructionsToggled: false, 
            sprintReview: false, /*Displays Sprint information*/ 
            hoverTiles: null /*Which tiles get the hover property*/ 
        }

        this.contractArr = []; 

        //When the user clicks the start button the timer managed by this state machine should start. 
        this.startButtonCallback = this.startButtonCallback.bind(this); 
        //Invoked when the user selects a shape and presses the select shape button 
        this.selectShape = this.selectShape.bind(this); 
        //Invoked when a shape is chosen and the user hovers over a tile. 
        this.tileHoverFunction = this.tileHoverFunction.bind(this); 
        //Invoked when a tile is clicked 
        this.tileClickFunction = this.tileClickFunction.bind(this); 
        this.resetGame = this.resetGame.bind(this); 
        this.generateTiles(numContractorTiles, 9); 
        //this.generateTiles(numContractorTiles, 10); 
        this.generateContracts(); 

        let tempArr = [...this.state.tiles];
        for(let i=0;i<tempArr.length;++i){
            for(let j=0;j<tempArr[i].length;++j){
                let tempTile = tempArr[i][j];
                let type = tempTile.type;
                tempArr[i][j] = {xIndex: i, yIndex: j, type: type, onHover: this.tileHoverFunction, clickFunction: this.tileClickFunction};//<Tile type = {type} xIndex = {x} yIndex = {y} onHover = {this.tileHoverFunction}/> 
            }
        }
        this.setState({tiles: [...tempArr]}); 

        this.timer = 0;
        this.shapesMissed = [0]; 
        this.bonusPoints = [0]; 
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        this.p = []; 
    }

    processSprintSeconds(){
        if(this.state.sprint === 0)return 70;
        else if(this.state.sprint === 1)return 60;
        else if(this.state.sprint === 2)return 50;
        else if(this.state.sprint === 3)return 40;
        return 40; 
    }

    resetGame(){
        let x = new Cartographer();//.constructor(); 
        this.setState(x.state); 
        let tileArr = this.state.tiles; 
        for(let i=0;i<tileArr.length;++i){
            for(let j=0;j<tileArr[i].length;++j){
                tileArr[i][j].type=0; 
            }
        }
        this.setState({
            processingSprint: false, 
            time: {}, seconds: 70,
            contract: 0, 
            sprint: 0,
            qaAction: false, 
            storyPoints: 0, 
            points: 0, 
            currPoints: 0, 
            tiles: tileArr,
            contracts: [],
            chosenTexture: null, 
            budgetOverrun: false, 
            currShape: null, /*For which shape the user may pick from*/ 
            chosenShape: null, /*For what hte user has chosen*/ 
            selectingShape: false,
            gameStarted: false,
            defectShapes: [],
            instructionsToggled: false, 
            sprintReview: false, /*Displays Sprint information*/ 
            hoverTiles: null /*Which tiles get the hover property*/ 
        });
        this.generateTiles(numContractorTiles, 9); 
        //this.generateTiles(numContractorTiles, 10); 
        this.generateContracts(); 

        let tempArr = [...this.state.tiles];
        for(let i=0;i<tempArr.length;++i){
            for(let j=0;j<tempArr[i].length;++j){
                let tempTile = tempArr[i][j];
                let type = tempTile.type; 
                tempArr[i][j] = {xIndex: i, yIndex: j, type: type, onHover: this.tileHoverFunction, clickFunction: this.tileClickFunction};//<Tile type = {type} xIndex = {x} yIndex = {y} onHover = {this.tileHoverFunction}/> 
            }
        }
        this.setState({tiles: [...tempArr]}); 

        this.timer = 0;
        this.shapesMissed = [0]; 
        this.bonusPoints = [0]; 
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        this.p = [];
    }

    chooseShape(){
        let ret = Math.floor(Math.random() * shapes.length); 
        while(this.state.defectShapes.includes(ret)){
            ret = Math.floor(Math.random() * shapes.length);
        }
        return ret; 
    }

    secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));
    
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
    
        let obj = {
          "h": hours,
          "m": minutes,
          "s": seconds
        };
        return obj;
      }
    

    componentDidMount(){
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
        this.maxSprint = 3; 
    }

    startTimer() {
        if (this.timer === 0 && this.state.seconds > 0) {
          this.timer = setInterval(this.countDown, 1000);
        } 
    }

    stopTimer() { 
        if (this.timer !== 0 && this.state.seconds > 0) {
            clearInterval(this.timer); 
        }
    }
    
    countDown() {
        if (this.state.sprint > 3) { 
            clearInterval(this.timer);
            this.setState({
                time: this.secondsToTime(0),
                seconds: 0
            })
            return; 
        } 
      // Remove one second, set state so a re-render happens.
      let seconds = this.state.seconds - 1;
      if (seconds === 0) {
        (this.shapesMissed[this.shapesMissed.length-1]++)
          if(this.state.currShape.availableTextures.includes(7)){
              this.state.chosenShape = this.state.currShape.grid[0];
              this.state.chosenTexture = 7;  
              this.state.selectingShape = true;
              let tX = Math.floor(Math.random()*gridSize); 
              let tY = Math.floor(Math.random()*gridSize); 
              let idc = true;//this.computeTileCollisions(tX, tY); 
              while(idc === true)
              {
                if(this.tileHoverFunction(null, tX, tY))
                {
                    idc = false; 
                    break; 
                }
                else{
                    tX = Math.floor(Math.random()*gridSize); 
                    tY = Math.floor(Math.random()*gridSize); 
                }
              }
              this.tileClickFunction(tX, tY); 
              return; 
          }
          let temp = this.chooseShape(); 
          if(this.state.sprint + this.state.storyPoints + this.state.currShape.storyPoints > 6)
          {
            let s = this.state.sprint+1; 
            this.shapesMissed.push(0); 
            this.bonusPoints.push(0); 
            this.p.push(this.countPoints()); 
            this.setState({currShape: shapes[temp], 
                budgetOverrun: false, 
                selectingShape: false, 
                storyPoints: 0, 
                sprint: s, 
                processingSprint: true,
                qaAction: false, 
                sprintReview: true, 
                points: this.p[this.p.length-1].reduce((a,b)=>a+b)+ this.state.points})
            //setTimeout(()=>{this.setState({processingSprint: false})}, 10000)
            this.stopTimer(); 
          }
          else{
            let tempSeconds=this.processSprintSeconds(); 
            this.setState({currShape: shapes[temp],
                qaAction: this.state.processingSprint === true ? true: false,
                budgetOverrun: false,
                selectingShape: false, 
                storyPoints: this.state.storyPoints + this.state.currShape.storyPoints,
                time: this.secondsToTime(tempSeconds),
                seconds: tempSeconds}); 
          }
          /*this.setState({
              time: this.secondsToTime(10),
              seconds: 10
          });
          this.startTimer(); */ 
      }
      else{
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
          });
      }
      
      // Check if we're at zero.

    }

    /* Generates a random shape to display 
     *
     */
    generateRandomShape(){
        let temp = Math.floor(Math.random() * shapes.length); 
        while(this.state.defectShapes.includes(temp)){
            temp = Math.floor(Math.random() * shapes.length);
        }
        this.setState({currShape: shapes[temp], budgetOverrun: false});
        if(shapes[temp].availableTextures.includes(7))this.setState({defectShapes: [...this.state.defectShapes, temp]});  
    }

    initiateSeason(){
    }

    startButtonCallback(){
        this.setState({
            gameStarted: true, 
            sprintReview: true, 
        })
    }

    generateContracts(){
        let tempArr = []; 
        for(let i=0;i<availableContracts.length;++i){
            let randomContract = Math.floor(Math.random() * availableContracts[i].length); 
            tempArr.push(availableContracts[i].find(contract => contract.id===randomContract))
        }
        this.contractArr = tempArr; 
    }

    /* Helper function. Makes sure that the coordinate with an X Y value cannot be
     * part of the array parameter, and keeps generating a new random coordinate 
     * and recursively calling until the array is filled with unique coordinates. 
     */
    checkCoordinates(coord, arr){
        for(let i=0;i<arr.length;++i){
            while(coord.cmp(arr[i]))
            {
                coord = new Coordinate(); 
                this.checkCoordinates(coord, arr); 
            }
        }
        return coord; 
    }

    /* Generates numTiles contractor tiles. Stores coordinates as a class data type
     * because working with tuples in an offline environment became a headache. 
     */
    generateTiles(numTiles, type){
        let coordinateArr = []; 
        let tempArr = [...this.state.tiles]; 
        for(let i=0; i< numTiles; ++i){
            let tempCoord = new Coordinate(); 
            if(i>0)tempCoord = this.checkCoordinates(tempCoord, coordinateArr); 
            coordinateArr.push(tempCoord); 
            tempArr[tempCoord.x][tempCoord.y] = {xIndex: tempCoord.x, yIndex: tempCoord.y, type: type, onHover: this.tileHoverFunction, clickFunction: this.tileClickFunction};//<Tile xIndex={tempCoord.x} yIndex={tempCoord.y} onHover = {this.tileHoverFunction} type ={type}/> ; 
        } 
        this.setState({tiles:[...tempArr]}); 
    }

    selectShape(shape, texture){
        let reward = this.state.points; 
        if(this.state.currShape.grid[0] === shape)reward += this.state.currShape.gridRewards[0];
        else reward += this.state.currShape.gridRewards[1]; 
        let currPoints = reward - this.state.points; 
        this.setState({
            points: reward, 
            currPoints: currPoints, 
            selectingShape: true, 
            chosenShape: [...shape],
            chosenTexture: texture
        })
    }

    computeTileCollisions(x,y){
        let ret = []; 
        let tempShape = [...this.state.chosenShape]; 
        for(let i=0; i<tempShape.length;++i){
            for(let j=0; j<tempShape.length;++j){
                //Checks if it's in bounds and if there's no collision. 
                if(tempShape[i][j])
                {
                    if((x+i >= this.state.tiles.length || x+i < 0) || 
                       (y+j >= this.state.tiles[0].length || y+j < 0) || 
                       (this.state.tiles[x+i][y+j].type !== 0 && this.state.tiles[x+i][y+j].type !== 10))
                    {
                       if(ret.length && !(ret[0]==="-1")){
                           let t = ret[0];
                           ret[0]="-1";
                           ret.push(t); 
                        } 
                        else if(!ret.length)ret.push("-1"); 
                       //ret.push(parseInt(x+i)+","+parseInt(y+j)); 
                    }
                    ret.push(parseInt(x+i)+","+parseInt(y+j)); 
                } 
            }
        }
        return ret; 
    }

    tileClickFunction(x, y,e){
        if(e.target.className.indexOf("hoverBad") !== -1)
        {
            if(!this.state.processingSprint || this.state.qaAction)return
            else if(this.state.selectingShape)
            {
                let tempArr = [...this.state.tiles]; 
                if(tempArr[x][y].type === 9 || tempArr[x][y].type === 0)return;
                else console.log(tempArr[x][y].type);
                let tempTileProps = {xIndex: x, yIndex: y, type: 0, onHover: this.tileHoverFunction, clickFunction: this.tileClickFunction, additionalClasses: ""};
                tempArr[x][y]=tempTileProps;
                let temp = this.chooseShape();
                this.bonusPoints[this.bonusPoints.length-1]+=this.state.currPoints; 
                let tempSeconds = this.processSprintSeconds(); 
                this.setState({currShape: shapes[temp],
                 budgetOverrun: false,
                 selectingShape: false, 
                 processingSprint: true, 
                 qaAction: true, 
                 tiles: [...tempArr],
                 storyPoints: 0,//this.state.storyPoints + this.state.currShape.storyPoints,
                 time: this.secondsToTime(tempSeconds),
                 seconds: tempSeconds});
                 this.stopTimer(); 
            }
            return; 
        }
        if(this.state.selectingShape&&!this.state.processingSprint){
            let tempArr = [...this.state.tiles];
            for(let i=0;i<tempArr.length;++i){
                for(let j=0;j<tempArr[i].length;++j){
                    if(tempArr[i][j].additionalClasses===" hover" )
                    {
                        let tempTileProps = {xIndex: i, 
                            yIndex: j, 
                            type: tempArr[i][j].type === 10 ? this.state.chosenTexture+10 : this.state.chosenTexture,
                            onHover: this.tileHoverFunction,
                            clickFunction: this.tileClickFunction, 
                            additionalClasses: ""};
                        tempArr[i][j] = tempTileProps; 
                    }
                }
            }
            let temp = this.chooseShape(); 
            this.bonusPoints[this.bonusPoints.length-1]+=this.state.currPoints; 
            if(this.state.sprint + this.state.storyPoints + this.state.currShape.storyPoints > 6){
                let s = this.state.sprint+1; 
                this.shapesMissed.push(0); 
                this.bonusPoints.push(0); 
                this.p.push(this.countPoints()); 
                let tempSeconds = this.processSprintSeconds(); 
                this.setState({currShape: shapes[temp],
                    budgetOverrun: false, 
                    selectingShape: false,
                    time: this.secondsToTime(tempSeconds),
                    seconds: tempSeconds,
                    tiles: [...tempArr],
                    storyPoints: 0,
                    sprint: s, 
                    points: this.p[this.p.length-1].reduce((a,b)=>a+b)+this.state.points, 
                    sprintReview: true,
                    qaAction: this.state.processingSprint === true? true: false,
                    processingSprint: true})
            }
            else 
            {
                let tempSeconds = this.processSprintSeconds(); 
                this.setState({currShape: shapes[temp],
                 budgetOverrun: false,
                 selectingShape: false, 
                 tiles: [...tempArr],
                 storyPoints: this.state.storyPoints + this.state.currShape.storyPoints,
                 time: this.secondsToTime(tempSeconds),
                 seconds: tempSeconds});
            }
            if(shapes[temp].availableTextures.includes(7))this.setState({defectShapes: [...this.state.defectShapes, temp]});  
        }
    }

    countPoints(){
        let temp = this.contractArr.filter((contract, idx) => (
            idx-this.state.sprint >=0 && idx-this.state.sprint <=1)); 
        let points = []; 
        for(let i=0;i<temp.length;++i){
            points.push(temp[i].criteria([...this.state.tiles])); 
        }
        points.push(doDefects(this.state.tiles)); 
        return points; 
    }

    tileHoverFunction(e, x, y){
        if(!this.state.selectingShape)return; 
        let tempShape = [...this.state.chosenShape]; 
        let shapeXOrigin = -1;
        let shapeYOrigin = -1; 
        for(let i=0;i<tempShape.length;++i){
            if(shapeXOrigin !== -1 && shapeYOrigin !== -1)break;
            for(let j=0;j<tempShape[i].length;++j){
                if(tempShape[i][j] === 1){
                    shapeXOrigin = i; 
                    shapeYOrigin = j; 
                    break; 
                }
            }
        }
        let res = (this.computeTileCollisions(x-shapeXOrigin, y-shapeYOrigin)); 
        if(res !== false){
            this.setState({hoverTiles: [...res]})
            let tempArr = [...this.state.tiles]; 
            for(let i=0;i<tempArr.length;++i){
                for(let j=0;j<tempArr[i].length;++j){
                    if(res && res.length && !res.includes("-1") && res.includes(parseInt(i)+","+parseInt(j))){
                        let tempTile = {xIndex: i, yIndex: j, additionalClasses: " hover", type: tempArr[i][j].type, onHover: this.tileHoverFunction, clickFunction: this.tileClickFunction}
                        tempArr[i][j] = tempTile; 
                    }
                    else if(res && res.length && res.includes(parseInt(i)+","+parseInt(j))){
                        let tempTile = {xIndex: i, yIndex: j, additionalClasses: " hoverBad", type: tempArr[i][j].type, onHover: this.tileHoverFunction, clickFunction: this.tileClickFunction}
                        tempArr[i][j] = tempTile; 
                    }
                    else{
                         let tempTile = {xIndex: i, yIndex: j, additionalClasses: "", type: tempArr[i][j].type, onHover: this.tileHoverFunction};
                         tempArr[i][j] = tempTile; 
                    }
                }
            }
            this.setState({tiles: [...tempArr]});
        }
        else this.setState({hoverTiles: null}); 
        return !res.includes("-1");
    }


    render(){
        let sprintComponents = []; 
        for(let i=0;i<3;++i){
            let c2 = [];
            for(let j=0;j<6;++j){
                let c3 = <div className = {`storyTile ${((i<=this.state.sprint && j<this.state.storyPoints) || i<this.state.sprint) ? "grey" : ""}`}></div>;
                c2.push(c3); 
            }
            let component = <div className = {`sprintTile ${i===this.state.sprint ? "orange" : ""}`}>
                {c2}
                <div>Sprint {i+1}</div>
            </div>;
            sprintComponents.push(component); 
        }
        let arr = []; 
        this.state.tiles.foreach(row => {row.foreach(tile =>
            { 
            let temp = <Tile onHover = {tile.onHover}
                  key = {parseInt(tile.xIndex)+","+parseInt(tile.yIndex)}
                  xIndex = {tile.xIndex} 
                  yIndex = {tile.yIndex}
                  type = {tile.type}
                  clickFunction = {tile.clickFunction}
                  additionalClasses = {tile.additionalClasses!=null ? tile.additionalClasses : "" }/>;arr.push(temp)} )}); 
        return(
            <>
                    <ContractorInstructions gameStarted = {this.state.gameStarted}
                        dialogOpen = {this.state.instructionsToggled === true || this.state.gameStarted === false}
                                              closeButtonCallback = {()=>{this.setState({instructionsToggled: false})}}
                                              startButtonCallback = {()=>{this.startButtonCallback()}}/> 
            {
                this.state.sprintReview && ! this.state.processingSprint ? 
                <div className = "instructionsBackground">
                    <div className = "instructionsContainer" style={{zIndex: "30"}}>
                    <div className = "contractBoxName"> New Requirements for Sprint {this.state.sprint+1}: </div> 
                    <div className = "contractsContainer">
                        {this.contractArr != null ? this.contractArr.map((contract, idx) => (
                            idx-this.state.sprint >=0 && idx-this.state.sprint <=1 ? 
                            <ContractBox name = {contract && contract.name ? contract.name : ""}
                                         sprint = {idx}
                                         description = {contract && contract.description ? contract.description : ""}
                                         value = {contract && contract.value ? contract.value : ""}
                                         exampleGrid = {contract && contract.exampleGrid ? contract.exampleGrid : ""}/> 
                            : null
                        )) : null}
                    </div>
                        <div className = "startBtnBox">
                        <CartographerStartButton text = {`Start Sprint ${this.state.sprint+1}`} 
                                                 clickFunction = {()=>
                                                    {
                                                    let tempSeconds = this.processSprintSeconds(); 
                                                    this.setState({sprintReview:false, time: this.secondsToTime(tempSeconds), seconds: tempSeconds});
                                                     this.timer = 0; 
                                                     this.initiateSeason(); 
                                                     this.generateRandomShape(); 
                                                     this.startTimer();}}/>
                        </div> 
                    </div> 
                </div> 
                :null
            }
            {
                this.state.processingSprint && this.state.qaAction?                 
                    <div className = "instructionsBackground">
                        <div className = "instructionsContainer" style={{zIndex: "30"}}>
                            <div className = "contractBoxName"> Sprint {this.state.sprint} Retrospective: </div> 
                                <div className = "contractsContainer">
                                    <div className = "contractBox">
                                        <div className = "instructionGridTitle">
                                            What went well:
                                        </div>
                                        <div className = "contractBoxDescription">
                                            {this.contractArr.map((contract, idx) => (
                                            idx-this.state.sprint+1 >=0 && idx-this.state.sprint+1 <=1 ? 
                                            <div className = "valueBox">Sprint Req: {contract.name} 
                                                <span className = "valueLabel">{this.p[this.p.length-1][idx-this.state.sprint+1]}</span>
                                            </div>
                                            : null
                                            ))}
                                            {this.bonusPoints && this.bonusPoints.length > 1 && this.bonusPoints[this.bonusPoints.length-2] ? 
                                                <div className = "valueBox">
                                                    Additional Contract Points Earned: 
                                                    <span className = "valueLabel">
                                                        {this.bonusPoints[this.bonusPoints.length-2]}
                                                    </span>
                                                </div>
                                            :null}
                                        </div> 
                                    </div> 
                                    <div className = "contractBox">
                                        <div className = "instructionGridTitle">
                                            Deltas and Roadblocks: 
                                        </div>
                                        <div className = "contractBoxDescription">
                                            {this.p[this.p.length-1][this.p[this.p.length-1].length-1] !==0 ?
                                                <div className = "valueBox">
                                                    Points Lost from Defects:  
                                                    <span className = "valueLabel">
                                                        {this.p[this.p.length-1][this.p[this.p.length-1].length-1]}
                                                    </span>
                                                </div>
                                            :null}
                                            {this.shapesMissed.length>1 && this.shapesMissed[this.shapesMissed.length-2]!==0 ?
                                                <div className = "valueBox">Features Your Team Failed to Place:
                                                    <span className = "valueLabel">{this.shapesMissed[this.shapesMissed.length-2]}</span></div>
                                            : this.p[this.p.length-1][this.p[this.p.length-1].length-1] === 0 ?
                                                <div>No Deltas nor Roadblocks for this sprint!</div>
                                            : null}
                                        </div> 
                                    </div>
                                    <div className = "contractBox" style = {{gridColumn: "1/3", textAlign: "center", fontSize: "var(--largeFontSize)"}}>
                                        Your team now has a total of <span style={{color: "var(--clrPrimary)", fontSize: "var(--largeFontSize", fontWeight: "bolder"}}>{this.state.points}</span> points
                                    </div> 
                                </div> 

                            <div className = "startBtnBox">
                                <CartographerStartButton text = {`Accept Retrospective: View Sprint ${this.state.sprint+1}`} 
                                                         clickFunction = {()=>
                                                         {
                                                            this.setState({processingSprint: false});
                                                            this.startTimer(); 
                                                         }}/>
                            </div>
                        </div>
                    </div> : null 

            }
            {
                this.state.sprint >= this.maxSprint && !this.state.processingSprint ?  
                <div className = "instructionsBackground">
                    <div className = "instructionsContainer">
                    {
                        [0,1,2].map(sprint =>
                            <>
                            <div className = "contractBoxName"> Sprint {sprint+1} Data: </div> 
                                <div className = "contractsContainer">
                                    <div className = "contractBox">
                                        <div className = "instructionGridTitle">
                                            What went well:
                                        </div>
                                        <div className = "contractBoxDescription">
                                            {this.contractArr.map((contract, idx) => (
                                            idx-sprint >=0 && (idx-sprint)%4 <=1 ? 
                                            <div className = "valueBox">Sprint Req: {contract.name} 
                                                <span className = "valueLabel">{this.p[sprint][idx-sprint]}</span>
                                            </div>
                                            : null
                                            ))}
                                            {this.bonusPoints && this.bonusPoints.length > 1 && this.bonusPoints[sprint] ? 
                                                <div className = "valueBox">
                                                    Additional Contract Points Earned: 
                                                    <span className = "valueLabel">
                                                        {this.bonusPoints[sprint]}
                                                    </span>
                                                </div>
                                            :null}
                                        </div> 
                                    </div> 
                                    <div className = "contractBox">
                                        <div className = "instructionGridTitle">
                                            Deltas and Roadblocks: 
                                        </div>
                                        <div className = "contractBoxDescription">
                                            {this.p[sprint][this.p[sprint].length-1] !== 0 ?
                                                <div className = "valueBox">
                                                    Points Lost from Defects:  
                                                    <span className = "valueLabel">
                                                        {this.p[sprint][this.p[sprint].length-1]}
                                                    </span>
                                                </div>
                                            :null}
                                            {this.shapesMissed.length>1 && this.shapesMissed[sprint] !== 0 ?
                                                <div className = "valueBox">Features Your Team Failed to Place: 
                                                    <span className = "valueLabel">{this.shapesMissed[sprint]}</span></div>
                                            : this.p[sprint][this.p[sprint].length-1] === 0 ?
                                                <div>No Deltas nor Roadblocks for this sprint!</div>
                                            : null}
                                        </div> 
                                    </div>
                                </div> 
                            </> 
                        )

                    }
                    <div className = "contractBox" style = {{gridColumn: "1/3", textAlign: "center", fontSize: "var(--largeFontSize)"}}>
                        Your team earned a total of <span style={{color: "var(--clrPrimary)", fontSize: "var(--largeFontSize", fontWeight: "bolder"}}>{this.state.points}</span> points
                    </div> 
                    <CartographerStartButton text="Start New Game" clickFunction = {()=>{this.resetGame()}}/>
                    </div>
                </div>
            :
            <div className={`cartographerContainer ${this.state.gameStarted ? "" : "overlayed"}`}>
                <div>
                    <div className={`cartographerGrid ${this.state.selectingShape ? "selectingShape" : ""}`}>
                        {arr}
                    </div>
                </div> 
                <div className = "dataContainer">
                    <Button variant="outlined" onClick = {() => this.setState({instructionsToggled: true})}>View Instructions</Button>
                    <div className = "contractsContainer">
                    { this.state.currShape && !this.state.selectingShape ?
                        <div className = "shapeBox">
                                <Shape shape = {!this.state.qaAction&&this.state.processingSprint ? qaShape: this.state.currShape}
                                       selectShapeCallback = {this.selectShape}/> 
                        </div>
                       : this.state.gameStarted ? <div className = "shapeBox"> <CartographerStartButton text = "re-select shape" clickFunction = {() => 
                        {   let reward = this.state.points - this.state.currPoints;  
                            this.setState({selectingShape: false, points: reward, currPoints: 0})}}/> </div> 
                        : <div></div> 
                    }
                    <div className = "contractBox status">
                        <div className = "contractBoxName"> Team Status </div>
                        <div className = "dataForm">
                        {
                            sprintComponents.map(component => component)
                        }
                        </div> 
                        <div className = "dataForm">
                            Contract Points: {this.state.points}
                        </div>
                        <div className = "dataForm">
                            Time Remaining to Place Shape: 
                            <div className = "timeBox">
                                {this.state.seconds} Seconds
                            </div> 
                        </div>
                    </div>
                    </div> 
                    <div className = "contractsContainerTitle">Sprint {this.state.sprint + 1} Requirements</div>
                    <div className = "contractsContainer">
                        {this.contractArr != null ? this.contractArr.map((contract, idx) => (
                            idx-this.state.sprint >=0 && idx-this.state.sprint <=1 ? 
                            <ContractBox name = {contract && contract.name ? contract.name : ""}
                                         sprint = {idx}
                                         description = {contract && contract.description ? contract.description : ""}
                                         exampleGrid = {contract && contract.exampleGrid ? contract.exampleGrid : ""}
                                         value = {contract && contract.value ? contract.value : ""}/> 
                            : null
                        )) : null}
                    </div>
                    <div className = "contractsContainerTitle">Contract Requirements</div>
                    <ContractsContainer contractArr = {this.contractArr}/> 
                </div>
            </div>}
            </>
        )
    }
}
export default Cartographer;

/*

*/