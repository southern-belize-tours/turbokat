import './pumpkin.css';
import Bone from './bone';
import PumpkinLogo from './pumpkinLogo';
import RabbitLogo from './rabbit';
import CatLogo from './cat';

import LocationOn from '@mui/icons-material/LocationOn';
import { Checkroom } from '@mui/icons-material';
import { Restaurant } from '@mui/icons-material';
import { LocalBar } from '@mui/icons-material';
import { PersonAddAlt1 } from '@mui/icons-material';
import HelpOutline from '@mui/icons-material/HelpOutline';
import { Event } from '@mui/icons-material';
import { Button } from '@mui/material';

import { useEffect } from 'react';
// import Font

function Pumpkin (props) {
    let bones = [0,0,0,0,0,0,0,0,0,0,0,0,0,,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

    // This effect runs once when the component is initialized
    useEffect(() => {
        // Initialization code here
        // console.log('Component initialized');
        props.callback();
        
        // You can also return a cleanup function if necessary
    }, []); // The empty dependency array means this effect runs once

    return (
        <div className="spookyContainer">
            {/* <div className = "bonesContainer">
                {bones.map( idx =>
                    <Bone></Bone>
                )}
            </div> */}
            {/* <Bone></Bone> */}
            <h2 className="halloweenTitle">You are invited to a Spooky Pumpkin Carving Party</h2>
            {/* <CatLogo size={500}
                backgroundColor = {"#ff7002"}
                color = {"yellow"}
                spooky={true}>
            </CatLogo> */}
            {/* <CatLogo size={200}
                backgroundColor = {"#ff7002"}
                color = {"yellow"}
                spooky={true}>
            </CatLogo> */}
            {/* <CatLogo size={100}
                backgroundColor = {"#ff7002"}
                color = {"yellow"}
                spooky={true}>
            </CatLogo> */}
            <div className = "infoContainer">
                <div className="infoBullet">
                    <Event className="halloweenIcon"></Event>
                    Wednesday October 25th. 18:00 - 22:00. Carving starts at 19:00.
                </div>
                <div className="infoBullet">
                    <LocationOn className="halloweenIcon"></LocationOn>
                    40 Glatttaalstrasse, 8052, Zurich. 9th floor, appartment on the right
                </div>
                <div className="infoIndent">
                    <Bone></Bone> We live in the tall building with the "Bowling" sign on it. The entrance is to the left/west of the Pizzeria. If the buzz doesn't let you in, shoot us a message.
                </div>
                <div className="infoIndent">
                    <Bone></Bone> From PwC Office take the 75 Bus from Bollingerweg going Northwest towards Seebach, and get off at Ausserdorf Strasse.
                </div>
                {/* <div className="infoIndent"> */}
                {/* </div> */}
                <div className="infoBullet">
                    <Checkroom className="halloweenIcon"></Checkroom>
                    Costumes are not mandatory, but are highly encouraged!
                </div>
                {/* <div className="infoIndent">
                    Not sure what costume to wear? Get some inspiration from our costume name generator!
                    <Button>Generate</Button>
                </div> */}
                <div className="infoBullet">
                    {/* <Restaurant className="halloweenIcon"></Restaurant> */}
                    {/* <FontAwesomeIcon icon="fa-solid fa-pumpkin" /> */}
                    {/* <i class="fa fa-pumpkin"></i> */}
                    {/* <!-- <i class="fa fa-github blue" matTooltip="https://github.com/ianfeekes https://github.com/southern-belize-tours" matTooltipClass="tooltip"></i> --> */}
                    <PumpkinLogo></PumpkinLogo>
                    Pumpkins will be provided, and chosen first-come-first serve.
                </div>
                <div className="infoBullet">
                    <LocalBar className="halloweenIcon"></LocalBar>
                    Bring Your Own Potions, please.
                </div>
                <div className="infoBullet">
                    <Restaurant className="halloweenIcon"></Restaurant>
                    Food will be provided. We are thinking about doing a pasta bar (TBD).
                </div>
                <div className="infoBullet">
                    <PersonAddAlt1 className="halloweenIcon"></PersonAddAlt1>
                    Feel Free to invite a +1, just please notify us so we can get a "Pumpkin-Head-Count". Else you will not be "treated", but "tricked" (you will share).
                </div>
                <div className="infoBullet">
                    <HelpOutline className="halloweenIcon"></HelpOutline>
                    If you have any questions, please contact Katrina at +41-79-527-03-02 or Ian at +41-76-805-69-21.
                </div>
                <div className="infoBullet">
                    <RabbitLogo></RabbitLogo>
                    You are welcome to offer our Rabbit pumpkin flesh but not the seeds. He may not like it though.
                </div>
            </div>
        </div>
    );
} export default Pumpkin;