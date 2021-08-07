import CursedCaptchaTileBoard from './CursedCaptchaTileBoard.js'; 
import CursedCaptchaTitle from './CursedCaptchaTitle.js'; 
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

class CursedCaptcha extends React.Component {

    constructor(props) {
        super();
        this.title = "Samsquantch"; 
        console.log(samsquantchImages); 

    }

    render() {
        return (
            <div className={this.props.toggled ? "cursedCaptcha toggled" : "cursedCapthca"}>
                <CursedCaptchaTitle title={this.title}/> 
                <CursedCaptchaTileBoard images={samsquantchImages}/> 
            </div>
        );
    }
}

export default CursedCaptcha;