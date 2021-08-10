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

class CursedCaptcha extends React.Component {

    constructor(props) {
        super();
        this.title = "Samsquantch"; 
        this.buttonCallbackFunction = this.buttonCallbackFunction.bind(this); 
        this.tileCallbackFunction = this.tileCallbackFunction.bind(this); 
        this.tiles = [];
        let i = 0; 
        for (const [key, value] of Object.entries(samsquantchImages)) {
            if (!samsquantchImages[key].default) {
                ++i; continue;
            }
            let style = { backgroundImage: `url(${samsquantchImages[key].default})` };
            this.tiles.push(<CursedTile clickFunction={this.tileCallbackFunction}
                correct={samsquantchSolution[i].correct}
                id={i}
                style={style} />);
            ++i; 
        }

        let tempMappings = []; 
        for (let i = 0; i < samsquantchSolution.length; ++i)tempMappings.push(false); 
        this.state = {
            solved: false, 
            tileMappings: tempMappings 
        }
    }


    /* Purpose: when a tile is clicked it sends back its id and toggled state of processing
     *          by the parent cursedCaptcha element
     *          
     * 
     * Parameters:
     *              tileId: id of the tile, corresponding to its index number
     *              toggled: whether or not the tile is toggled as a selected element
     *              
     * Returns: None 
     * 
     */ 
    tileCallbackFunction(tileId, toggled) {
        let tempMappings = this.state.tileMappings; 
        tempMappings[tileId] = toggled; 
        this.setState({ tileMappings: tempMappings });
    }

    buttonCallbackFunction() {
        console.log("in buttonCallback"); 
        let ret = true; 
        let tempMappings = this.state.tileMappings; 
        console.log(tempMappings); 
        console.log(samsquantchSolution); 
        for (let i = 0; i < samsquantchSolution.length; ++i)
        {
            if (samsquantchSolution[i].correct != tempMappings[i]) ret = false; 
        }
        this.setState({ solved: ret }); 
    }

    render() {
        return (
            <div className={this.props.toggled ? "cursedCaptcha toggled" : "cursedCapthca"}>
                <CursedCaptchaTitle title={this.title}/> 
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