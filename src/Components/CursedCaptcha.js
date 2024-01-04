// MUI
import Dialog from '@mui/material/Dialog';
import { DialogTitle, DialogActions, DialogContent } from '@mui/material';

import CursedTile from './CursedTile.js'; 
import CatSpinner from './CatSpinner/CatSpinner.js';

import Button from '@mui/material/Button';

//Import Components
import React from 'react';
import { Cancel, Check, Replay } from '@mui/icons-material';

function importAll(r) {
    let ret = [];
    let i = 0;
    r.keys().map((item, index) => { ret[item.replace('./', '')] = r(item); ++i });
    ret["numKeys"] = i;
    return ret;
}

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
    },
    {
        name: "Lightweight",
        images: importAll(require.context('../Images/CursedCaptcha/Lightweight', false, /\.(jpg)$/)),
        solution: [
            {correct: true },
            {correct: false },
            {correct: true },
            {correct: true },
            {correct: false },
            {correct: true },
            {correct: false },
            {correct: false },
            {correct: false },
        ]
    }
];


class CursedCaptcha extends React.Component {

    constructor(props) {
        super();
        this.title = "Samsquantch"; 
        this.buttonCallbackFunction = this.buttonCallbackFunction.bind(this); 
        this.tileCallbackFunction = this.tileCallbackFunction.bind(this); 
        // this.tiles = [];

        this.state = {
            solved: [],
            failed: false,
            tiles: [],
            tileMappings: [],
            captchaIndex: 0,
            numTries: 0,
            loading: false,
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

    componentDidMount() {
        // Compute the capcha index
        let captchaIndex = Math.floor(Math.random() * captchas.length); 
        this.setState({captchaIndex: captchaIndex})

        // Get fresh tiles for the new index
        this.setState({tiles: [...this.initializeTiles(captchaIndex)]});
    }


    initializeTiles(idx) {
        let tiles = []; 
        let dict = captchas[idx].images;
        let i = 0; 
        for (const [key, ] of Object.entries(dict)) {
            // Importing the images can give a null entry or number so some data cleaning is necessary
            if (!dict[key] || typeof(dict[key]) === 'number') {
                ++i;
                continue; 
            }
            tiles.push(<CursedTile clickFunction={this.tileCallbackFunction}
                img = {dict[key]}
                correct={captchas[idx].correct}
                id={i}
                key={`cursed-tile-${i}`}
                toggled={false}>
                {/* toggled={this.state.tileMappings[i]}> */}
                </CursedTile>);
            ++i; 
        }
        return tiles;
    }

    /**
     * Clears the tile mappings to an array of false entries
     */
    clearTileMappings() {
        let newMappings = [];
        let newTiles = [...this.state.tiles];
        for (let i = 0; i < captchas[this.state.captchaIndex].solution.length; ++i) {
            newMappings.push(false);
            // Turn off the toggled value for any existing captchas to clear the board on the UI
            const newTileProps = {...newTiles[i].props, toggled: false};
            newTiles[i] = {...newTiles[i], props: newTileProps};
        }
        this.setState({tileMappings: [...newMappings]})
        this.setState({tiles: [...newTiles]});
    }


    changeCaptcha(success=false) {
        // Increment the number of attempts
        let currNumTries = this.state.numTries + 1;
        this.setState({numTries: currNumTries})
        if (this.state.numTries > 3) {
            this.setState({failed: true})
        }

        // Compute a ndew capcha index that is different from the previous
        let captchaIndex = this.state.captchaIndex; 
        let x = captchaIndex; 
        while(true) {
            let newCaptcha = true;
            const newCaptchasSolved = [...this.state.solved, captchaIndex]
            // Try to compute a new index that hasn't yet been solved
            captchaIndex = Math.floor(Math.random() * captchas.length);
            for (let i = 0; i < newCaptchasSolved.length; ++i) {
                if (captchaIndex == newCaptchasSolved[i]) {
                    newCaptcha = false;
                    break;
                }
            }
            if (newCaptcha) {
                break;
            }
        }

        // Update the current captcha index and array of solved captchas
        if (success) {
            this.setState({solved: [...this.state.solved, x]});
        }
        // this.setState({ solved: [...this.state.solved, x], captchaIndex: captchaIndex });
        this.setState({ captchaIndex: captchaIndex });
        // Set the solution to empty
        this.clearTileMappings();
        // Initialize a new empty captcha board with the updated index
        this.setState({tiles: [...this.initializeTiles(captchaIndex)]});
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
            key={`cursed-tile-${tileId}`}
            toggled={this.state.tileMappings[tileId]}
            img={this.state.tiles[tileId].props.img} />;
        this.state.tiles.splice(tileId, 1, tile); 
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
            if (captchas[this.state.captchaIndex].solution[i].correct !== tempMappings[i]) ret = false; 
        }
        if (ret) {
            this.changeCaptcha(true);
        } else {
            this.clearTileMappings();
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
        this.setState({correctGuess: successOutcome, loading: true})
        setTimeout(() => {
            this.setState({loading: false});
        }, 2000);
        // let timeout = Math.floor(Math.random()*2000);
        setTimeout(() => {
            this.setState({correctGuess: 0});
        }, 2500)
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

            <Dialog open={this.props.toggled && this.state.solved.length < 3}>
              <DialogTitle>
                {this.state.correctGuess === 0 ? 
                    <>
                    <div><span>Select all images with a </span>
                    <span className = "bold">{captchas[this.state.captchaIndex].name}.</span>
                    </div>
                    <div>Click verify once there are none left.</div></>
                 : <></>
                }

              </DialogTitle>
              <DialogContent>
                    {this.state.loading ?
                        <CatSpinner/>
                    :this.state.correctGuess === 1 ?
                        <div className="solvedBox">Correct</div>
                    :this.state.correctGuess === -1 ?
                        <div className="badGuessBox">Incorrect</div>
                    :
                        <div className="cursedCaptchaTileBoard">{this.state.tiles}</div>
                    }
                </DialogContent>
                {this.state.correctGuess === 0 ? 
                    <DialogActions>
                    <Button variant="contained"
                        onClick={()=>{
                            this.props.captchaFunction(false);}}>
                            <Cancel></Cancel> Give Up
                    </Button>
                    <Button variant="contained"
                        onClick={() => {this.changeCaptcha(false);}}>
                        <Replay></Replay> Try Another
                    </Button>
                    <Button variant="contained"
                        onClick={this.buttonCallbackFunction}>
                            <Check></Check>Verify
                    </Button>
                    </DialogActions>
                : <></>}
            </Dialog>
        );
    }
}

export default CursedCaptcha;
//<CursedCaptchaTileBoard images={samsquantchImages} /> 