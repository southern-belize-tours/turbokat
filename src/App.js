//Used for router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';

//Import Components
import Footer from './Components/Footer.js'; 
import Home from './Components/Home.js'; 
import BadMenu from './Components/BadMenu/BadMenu.js';
import FansOnly from './Components/FansOnly.js'; 
import NavbarArea from './Components/NavbarArea.js'; 
import OtherNavbarArea from './Components/OtherNavbarArea.js'; 
import MobileNavbarArea from './Components/MobileNavbarArea.js'; 
import Housewarming from './Components/Housewarming.js'; 
import News from './Components/News.js'; 
import SecretButton from './Components/secretButton/SecretButton.js';
import Sandbox from './Components/sandbox/Sandbox.js';
import Dosido from "./Components/sandbox/Dosido.js";
import ThinMint from "./Components/sandbox/ThinMint.js";
import Samosa from "./Components/sandbox/Samosa.js"
import Cartographer from './Components/Cartographer/Cartographer.js';
import Hawaii from "./Components/Hawaii/Hawaii.js";
import ThreadArt from './Components/ThreadArt/ThreadArt.js'
import Snowflake from './Components/Snowflake.js';

import { withRouter } from 'react-router';

import './App.css';
import React from "react";
import NavbarDropdownMenu from "./Components/NavbarDropdownMenu.js";
import Pumpkin from './Components/pumpkin/pumpkin.js';
import PumpkinThankYou from './Components/pumpkin/pumpkinThankYou.js';

function importAll(r) {
    let ret = [];
    let i = 0;
    r.keys().map((item,) => { ret[item.replace('./', '')] = r(item); ++i });
    ret["numKeys"] = i;
    return ret;
}

const punchlines = [
    "You think taxes take long? In just a few seconds we'll help you get into-it",
    "Turbo-charge your ability to file",
    "W-2s got you confused? They're really quite Intuit-ive",
    "We lobby your government to repeal tax laws so that you have to pay for our software!"
];

function generatePunchline() {
    let punchline = Math.floor(Math.random() * punchlines.length)
    return punchlines[punchline]
}

const options = [
    { rabbitLie: false, text: "Rabbit Things", items: [
            { rabbitLie: false, text: "View my Rabbit's Insta", url: "https://www.instagram.com/parsley.hasselhopper/"},
            { rabbitLie: false, text: "Look at my Rabbit Webpage", url: "/fansOnly"},
        ],
    },
    {
        rabbitLie: false,
        text: "Events",
        items: [
            { rabbitLie: false, text: "Wedding", url: "https://katgpt.org"},
            { rabbitLie: false, text: "Latest News", url: "/latestNews"},
            { rabbitLie: false, text: "Halloween Party", url: "/Pumpkin"},
        ]
    },
    { rabbitLie: true, text: "File your own taxes", url: "https://www.instagram.com/parsley.hasselhopper/" },
    {
        rabbitLie: false,
        text: "Shameless Self-Advertising",
        items: [
            { rabbitLie: false, text: "Donate Choccy Chips", url: "https://www.paypal.com/donate/?hosted_button_id=V3GYH73CW9HN6"},
            { rabbitLie: false, text: "Belize City Tours", url: "https://cave-tubing.net"},
            { rabbitLie: false, text: "Placencia Belize Tours", url: "https://southernbelizetours.com"},
            { rabbitLie: false, text: "Thread Art (in work)", url: "ThreadArt"},
        ]
    },
    // { rabbitLie: false, text: "View my Rabbit's Insta", url: "https://www.instagram.com/parsley.hasselhopper/"},
    // { rabbitLie: true, text: "File an expert's taxes", url: "https://www.instagram.com/parsley.hasselhopper/"},
    // { rabbitLie: false, text: "Look at my Rabbit", url: "/fansOnly"},
    // { text: "Play a Game", url: "/cartographer"},
    // { rabbitLie: false, text: "Latest News", url: "/latestNews"},
    // { rabbitLie: false, text: "Donate Choccy Chips", url: "https://www.paypal.com/donate/?hosted_button_id=V3GYH73CW9HN6"},
    // { rabbitLie: false, text: "Halloween Party", url: "/Pumpkin"},
    // { text: "testing", component: <NavbarDropdownMenu menuItems = {[{text: "foo"}, {text: "bar"}]} title = "Turbokat Services"/>}
    // { rabbitLie: false, text: "Thread Art", url: "ThreadArt"}
];

function usesCookies() {
    alert("This website uses cookies")
}

let images = importAll(require.context('./Images/General/turbokatFeatures', false, /\.(png)$/)); 
const gridCaption = "TAXES, KATRINAFIED"; 
const gridPunchline = generatePunchline();
const featuresCaption = "One accountant. Everyones into it."; 
let turbokatFeatures = [
    {
        featureName: "Do-Si-Dos",
        featureImageName: "dosido",
        featureAlt: "Buy Katrina some Do-Si-Dos",
        featureComponent: <Dosido height = "3" width = "3" numDots = "7" onClick = {usesCookies}/>
    },
    {
        featureName: "Samoas",
        featureImageName: "samoa",
        featureAlt: "Buy Katrina some Samoas",
        featureComponent: <Samosa height = "3" width = "3" onClick = {usesCookies}/>
    },
    {
        featureName: "Thin Mints",
        featureImageName: "thinMint", 
        featureAlt: "Buy Katrina some ThinMints",
        featureComponent: <ThinMint height = "3" width = "3" numDots = "7" onClick = {usesCookies}/>
    }
]; 
for (let i = 0; i < turbokatFeatures.length; ++i) {
    turbokatFeatures[i].featureImage = images[turbokatFeatures[i].featureImageName+".png"]; 
}
const turbokatPunchline = ""; 

let tileImages = importAll(require.context('./Images/General/taxOptions', false, /\.(png)$/)); 
let taxOptions = [
    {
        prompt: <>Are you ready to get this <BreakfastDiningIcon/>?</>,
        optionText: "File my taxes",
        tileColor: { background: "linear-gradient(265deg, #00c1bf, #055393 117%)"}
    },
    {
        prompt: "Let's buy Katrina some cookies",
        optionText: "Or I'll file your taxes",
        tileColor: { background: "linear-gradient(33deg, #386b9e, #3888bc)" }
    },
    {
        prompt: "Taxes are fun for everyone",
        optionText: "Or don't file taxes",
        tileColor: { background: "linear-gradient(91deg, #bc403e, 1.23%, #d2302d 99.85%)" }
    }
];
for (let i = 0; i < taxOptions.length; ++i) {
    taxOptions[i].image = tileImages["kat_acct"+ (i+1) + ".png"]; 
}

const footerTitle = "Join the billions who file their taxes"; 

const link = "https://www.instagram.com/parsley.hasselhopper/"; 

class App extends React.Component {

    constructor(props) {
        super();

        this.state = {
            userHealth: 36,
            centiHealth: 100,
            centiActive: false,
            spookyActive: false,
            chrimbusActive: false,
            taxOptions: [...taxOptions],
            snowflakes: []
        }

        this.loseUserHealth = this.loseUserHealth.bind(this);
        this.loseCentiHealth = this.loseCentiHealth.bind(this);
        this.centiActiveCallback = this.centiActiveCallback.bind(this);
        this.spookyCallback = this.spookyCallback.bind(this);
    }

    spawnSnowflakes() {
        const numFlakes = Math.floor(Math.random() * 3) + 1;
        let snowflakes = [];
        // let xPos = (Math.random() * window.)
        for (let i = 0; i < numFlakes; ++i) {
            let x = Math.floor(Math.random() * window.innerWidth);
            snowflakes.push(<Snowflake mobile = {true} xPos = {x}></Snowflake>);
        }
        this.setState({snowflakes: [...snowflakes]})
    }

    /**
     * If the month is october, make it spooky themed by default
     */
    componentDidMount() {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        if (currentMonth === 9) {
            this.setState({spookyActive: true});
        } else if (currentMonth === 11) {
            this.setState({chrimbusActive: true});
            let newTaxOptions = [...this.state.taxOptions]
            newTaxOptions[0].tileColor = {background: "linear-gradient(265deg, rgb(0, 143, 70), rgb(5, 100, 47) 117%)"};
            newTaxOptions[1].tileColor = {background: "#f0db4d"};
            this.spawnSnowflakes();
        }

    }


        spookyCallback() {
        this.setState({spookyActive: true});
    }

    centiActiveCallback() {
        console.log("centi active")
        this.setState({centiActive: true});
    }

    loseUserHealth(val) {
        let newHealth = this.state.userHealth - val;
        this.setState({
            userHealth: newHealth
        });
    }

    loseCentiHealth(val) {
        let newHealth = this.state.userHealth - val;
        this.setState({
            userHealth: newHealth
        });
    }

    render() {
        return (
            <div>
                {this.state.snowflakes}
                <NavbarArea chrimbus={this.state.chrimbusActive} 
                    spooky={this.state.spookyActive} /> 
                <OtherNavbarArea options={options}
                    chrimbus={this.state.chrimbusActive}
                    spooky={this.state.spookyActive}/> 
                <MobileNavbarArea options={options}
                    chrimbus = {this.state.chrimbusActive}
                    spooky={this.state.spookyActive}
                    link={link}/> 
                <Router>
                    <Switch>
                        <Route path="/"
                            exact component={() => <Home gridCaption={gridCaption}
                                chrimbus = {this.state.chrimbusActive}
                                spooky = {this.state.spookyActive}
                                gridPunchline={gridPunchline}
                                featuresCaption={featuresCaption}
                                turbokatFeatures={turbokatFeatures}
                                taxOptions={taxOptions}
                                userHealth = {this.state.userHealth}
                                centiHealth = {this.state.centiHealth}
                                centiActive = {this.state.centiActive}
                                centiActiveCallback = {this.centiActiveCallback}
                                loseUserHealth = {this.loseUserHealth}
                                loseCentiHealth = {this.loseCentiHealth}
                                turbokatPunchline={turbokatPunchline}/>}
                        /> 
                        <Route path="/fansOnly"
                            exact component={() => <FansOnly />}
                        /> 
                        <Route path="/latestNews"
                            exact component = {()=> <News />}
                        /> 
                        <Route path="/events/house-warming-party"
                            exact component={() => <Housewarming />}
                        />
                        <Route path="/secret_button"
                               exact component={()=> <SecretButton />}
                        />
                        <Route path="/sandbox"
                               exact component = { () => <Sandbox /> }
                        />
                        <Route path="/cartographer"
                            exact component = {()=> <Cartographer />}
                        />
                        <Route path="/BadMenu"
                            exact component={() => <BadMenu />}
                        />
                        <Route path="/hawaii"
                            exact component={()=> <Hawaii />}
                        />
                        <Route path = "/Pumpkin" exact component={() => <Pumpkin callback = {this.state.spookyActive ? () => {} : this.spookyCallback}></Pumpkin>}></Route>
                        <Route path="/Pumpkin/Results" exact component = {() => <PumpkinThankYou></PumpkinThankYou>}></Route>
                        <Route path = "/ThreadArt" exact component = {() => <ThreadArt></ThreadArt>}></Route>
                    </Switch>
                </Router>
                <Footer footerTitle={footerTitle}
                    chrimbus = {this.state.chrimbusActive}
                    spooky={this.state.spookyActive}/> 
                {this.state.centiActive ? 
                    <div className = "battleWidget"> Battle Widget</div>
                : <></>}
            </div>
      );
    }
    
}

export default App;