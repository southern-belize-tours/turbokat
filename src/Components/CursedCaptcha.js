// MUI
import Dialog from '@mui/material/Dialog';
import { DialogTitle, DialogActions, DialogContent, DialogContentText } from '@mui/material';

import CursedCaptchaTileBoard from './CursedCaptchaTileBoard.js'; 
import CursedCaptchaTitle from './CursedCaptchaTitle.js'; 
import CursedButtonPanel from './CursedButtonPanel.js'; 
import CursedTile from './CursedTile.js'; 
import CursedCaptchaFailMessage from './CursedCaptchaFailMessage.js';
import Button from '@mui/material/Button';


//Import Components
import React from 'react';

function importAll(r) {
    let ret = [];
    let i = 0;
    r.keys().map((item, index) => { ret[item.replace('./', '')] = r(item); ++i });
    ret["numKeys"] = i;
    return ret;
}

let samsquantchImages = importAll(require.context('../Images/CursedCaptcha/Samsquantch', false, /\.(jpg)$/)); 
let samsquantchSolution = [
    { correct: true },
    {correct: false},
    {correct: false},
    {correct: true },
    {correct: true },
    {correct: false},
    {correct: true },
    {correct: true },
    { correct: false },
]; 

let captchas = [
    {
        name: "Samsquantch", 
        images: importAll(require.context('../Images/CursedCaptcha/Samsquantch', false, /\.(jpg)$/)),
        solution: [
            { correct: true },
            { correct: false },
            { correct: false },
            { correct: true },
            { correct: true },
            { correct: false },
            { correct: true },
            { correct: true },
            { correct: false }
        ]
    },
    {
        name: "Parsley Ron Psychomantis Hasslehopper",
        images: importAll(require.context('../Images/CursedCaptcha/Parsley', false, /\.(jpg)$/)),
        solution: [
            { correct: false },
            { correct: false },
            { correct: true },
            { correct: true },
            { correct: true },
            { correct: true },
            { correct: true },
            { correct: false },
            { correct: false }
        ]
    },
    {
        name: "GI Joe Momma Exotic",
        images: importAll(require.context('../Images/CursedCaptcha/Joe', false, /\.(jpg)$/)),
        solution: [
            { correct: true },
            { correct: true },
            { correct: true },
            { correct: false },
            { correct: false },
            { correct: false },
            { correct: false },
            { correct: false  },
            { correct: false  }
        ]
    }
];

class CursedCaptcha extends React.Component {

    constructor(props) {
        super();
        this.title = "Samsquantch"; 
        this.buttonCallbackFunction = this.buttonCallbackFunction.bind(this); 
        this.tileCallbackFunction = this.tileCallbackFunction.bind(this); 
        this.tiles = [];

        let captchaIndex = Math.floor(Math.random() * captchas.length); 
        this.state = {
            solved: false,
            failed: false,
            tileMappings: [],
            captchaIndex: captchaIndex,
            numTries: 0,
            correctGuess: 0 // -1 incorrect 0 no guess 1 correct
        }

        //sets all tiles to unselected in state processing 
        let tempMappings = [];
        for (let i = 0; i < captchas[this.state.captchaIndex].solution.length; ++i)tempMappings.push(false); 
        this.state.tileMappings = tempMappings; 
        this.setState({ tileMappings: tempMappings })
        //initializes the tiles on the current captcha 
        this.initializeTiles(this.state.captchaIndex); 
    }


    initializeTiles() {
        this.tiles = []; 
        let dict = captchas[this.state.captchaIndex].images; 
        let i = 0; 
        for (const [key, value] of Object.entries(dict)) {
            if (!dict[key].default) {
                ++i;
                continue; 
            }
            let style = { backgroundImage: `url(${dict[key].default})` };
            this.tiles.push(<CursedTile clickFunction={this.tileCallbackFunction}
                img = {dict[key].default}
                correct={captchas[this.state.captchaIndex].correct}
                id={i}
                toggled={this.state.tileMappings[i]}>
                </CursedTile>);
            ++i; 
        }
    }


    changeCaptcha() {
        // Increment the number of attempts
        let currNumTries = this.state.numTries++;
        this.setState({numTries: currNumTries})
        if (this.state.numTries > 3) {
            this.setState({failed: true})
        }

        let tileMappings = []; 
        let captchaIndex = this.state.captchaIndex; 
        let x = captchaIndex; 
        while(captchaIndex==x)
            captchaIndex = Math.floor(Math.random() * captchas.length);
        for (let i = 0; i < captchas[captchaIndex].solution.length; ++i)tileMappings.push(false); 
        this.state.tileMappings = tileMappings; 
        this.setState({ solved: false, tileMappings: tileMappings, captchaIndex: captchaIndex });
        let idc = captchaIndex; 
        this.state.captchaIndex = idc; 
        this.setState({ captchaIndex: idc }); 
        this.initializeTiles(this.state.captchaIndex);
    }


    /* Purpose: when a tile is clicked it sends back its id and toggled state of processing
     *          by the parent cursedCaptcha element
     *          
     * 
     * Parameters:
     *              tileId: id of the tile, corresponding to its index number
     *              
     * Returns: None 
     * 
     */ 
    tileCallbackFunction(tileId) {
        let tempMappings = this.state.tileMappings; 
        tempMappings[tileId] = !tempMappings[tileId];
        let tile = <CursedTile clickFunction={this.tileCallbackFunction}
            correct={captchas[this.state.captchaIndex].correct}
            id={tileId}
            toggled={this.state.tileMappings[tileId]}
            img={this.tiles[tileId].props.img} />;
        this.tiles.splice(tileId, 1, tile); 
        this.state.tileMappings = tempMappings;
        this.setState({ tileMappings: tempMappings });
    }


    /* Purpose: when the verify button is clicked it detects if the captcha is correct
     *          or not. 
     *             -If it is correct, the state of the cursedCaptcha changes to 
     *              illustrate success to the user.
     *             -If it is incorrect, we move to the next cursedCaptcha
     *
     *
     * Parameters: None 
     *
     * Returns: None
     *
     */
    buttonCallbackFunction() {
        let ret = true; 
        let tempMappings = this.state.tileMappings; 
        for (let i = 0; i < captchas[this.state.captchaIndex].solution.length; ++i)
        {
            if (captchas[this.state.captchaIndex].solution[i].correct != tempMappings[i]) ret = false; 
        }
        if (!ret) {
            this.changeCaptcha();
        }
        // this.setState({ solved: ret });
        this.setTransitionTimeout(ret);
    }

    /* Calls state change timeout functions based on the success of solving the captcha
    */
    setTransitionTimeout(success) {
        let successOutcome = -1;
        if (success) {
            successOutcome = 1;
        }
        this.setState({correctGuess: successOutcome})
        // let timeout = Math.floor(Math.random()*2000);
        setTimeout(() => {
            this.setState({correctGuess: 0});
        }, 500)
    }

    render() {
        return (
    //         <>
    //         {
    //             this.props.toggled && this.state.failed ?
    //                 <CursedCaptchaFailMessage/> :
    //                 <div className={this.props.toggled && this.state.solved ? "cursedCaptcha toggled solved" :
    //                 this.props.toggled ? "cursedCaptcha toggled" : 
    //                 "cursedCaptcha"}>
    //     <CursedCaptchaTitle title={captchas[this.state.captchaIndex].name}/> 
    //     <div className="cursedCaptchaTileBoard">
    //         {this.tiles}
    //     </div> 
    //     <CursedButtonPanel clickFunction={this.buttonCallbackFunction} /> 
    //     <div className="cursedCaptchaTileBoard">{this.state.solved}</div> 
    // </div>
    //         }</>

            <Dialog open={this.props.toggled}>
              <DialogTitle>
                {this.state.correctGuess == 0 ? 
                    <>
                    <div><span>Select all images with a </span>
                    <span className = "bold">{captchas[this.state.captchaIndex].name}.</span>
                    </div>
                    <div>Click verify once there are none left.</div></>
                 : <></>
                }

              </DialogTitle>
              <DialogContent>
                    {this.state.correctGuess== 1 ?
                        <div className="solvedBox">Correct</div>
                    :this.state.correctGuess== -1 ?
                        <div className="badGuessBox">Incorrect</div>
                    :
                        <div className="cursedCaptchaTileBoard">{this.tiles}</div>
                    }
                </DialogContent>
                {this.state.correctGuess == 0 ? 
                    <DialogActions>
                    <Button variant="contained"
                        onClick={this.buttonCallbackFunction}>
                            Verify
                    </Button>
                    <Button variant="contained"
                        onClick={()=>{this.props.captchaFunction(false)}}>
                            Give Up
                        </Button>
                      {/* <Button onClick={handleClose}>Disagree</Button>
                      <Button onClick={handleClose} autoFocus>
                        Agree
                      </Button> */}
                    </DialogActions>
                : <></>}
            </Dialog>
        );
    }
}

export default CursedCaptcha;
//<CursedCaptchaTileBoard images={samsquantchImages} /> 