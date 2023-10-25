import './pumpkin.css';

import allPumpkins from '../../Images/20231025_204723.jpg'
import spookiestPumpkin from '../../Images/20231025_214143.jpg'
import bestPumpkin from '../../Images/20231025_214225.jpg';


function PumpkinThankYou (props) {
    return (
        <div className="spookyContainer">
            <img className="mainPumpkinImage" src={allPumpkins}></img>
            <h1 className="halloweenTitle">Thank You For Coming!</h1>
            <div className="infoContainer">
                <div className="infoBullet">
                    We had so much fun and appreciate all of our friends who came on a Wednesday evening to participate in spooky activities.
                </div>
                <div className="infoBullet">
                    Many of you had work, school, and other obligations and still came to join us in halloween mischief - we are grateful for your attendance :)
                </div>
            </div>
            <div>
                <h2>Winners: </h2>
                <div className="competitionContainer">
                    <div>
                        <h3 className="competitionTitle">Best Pumpkin</h3>
                        <img src={bestPumpkin}></img>
                    </div>
                    <div>
                        <h3 className="competitionTitle">Spookiest Pumpkin</h3>
                        <img src={spookiestPumpkin}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PumpkinThankYou;