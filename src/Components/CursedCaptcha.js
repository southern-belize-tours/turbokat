import CursedCaptchaTileBoard from './CursedCaptchaTileBoard.js'; 
import CursedCaptchaTitle from './CursedCaptchaTitle.js'; 
import CursedButtonPanel from './CursedButtonPanel.js'; 
import CursedTile from './CursedTile.js'; 
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

console.log(captchas[1].images); 

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
            tileMappings: [],
            captchaIndex: captchaIndex, 
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
                                        correct={captchas[this.state.captchaIndex].correct}
                                        id={i}
                                        toggled={this.state.tileMappings[i]}
                                        style={style} />);
            ++i; 
        }
    }


    changeCaptcha() {
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
            style={this.tiles[tileId].props.style} />;
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
        this.setState({ solved: ret }); 
    }

    render() {
        return (
            <div className={this.props.toggled && this.state.solved ? "cursedCaptcha toggled solved" :
                            this.props.toggled ? "cursedCaptcha toggled" : 
                            "cursedCaptcha"}>
                <CursedCaptchaTitle title={captchas[this.state.captchaIndex].name}/> 
                <div className="cursedCaptchaTileBoard">
                    {this.tiles}
                </div> 
                <CursedButtonPanel clickFunction={this.buttonCallbackFunction} /> 
                <div className="cursedCaptchaTileBoard">{this.state.solved}</div> 
            </div>
        );
    }
}

export default CursedCaptcha;
//<CursedCaptchaTileBoard images={samsquantchImages} /> 