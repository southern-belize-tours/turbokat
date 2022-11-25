//Used for router 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';

//Import Components
import Footer from './Components/Footer.js'; 
import Home from './Components/Home.js'; 
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

import logo from './logo.svg';
import './App.css';


function importAll(r) {
    let ret = [];
    let i = 0;
    r.keys().map((item, index) => { ret[item.replace('./', '')] = r(item); ++i });
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
    { text: "File your own taxes", url: "/" },
    { text: "View my Rabbit's Insta", url: "https://www.instagram.com/parsley.hasselhopper/"},
    { text: "File an expert's taxes", url: "/"  },
    { text: "Look at my Rabbit", url: "/fansOnly"},
    { text: "Latest News", url: "/latestNews"},
    { text: "Donate Choccy Chips", url: "https://www.paypal.com/donate/?hosted_button_id=V3GYH73CW9HN6"}
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

function App() {
    return (
        <div> 
            <NavbarArea /> 
            <OtherNavbarArea options={options}/> 
            <MobileNavbarArea options={options}
                              link={link}/> 
            <Router>
                <Switch>
                    <Route path="/"
                        exact component={() => <Home gridCaption={gridCaption}
                                                     gridPunchline={gridPunchline}
                                                     featuresCaption={featuresCaption}
                                                     turbokatFeatures={turbokatFeatures}
                                                     taxOptions={taxOptions}
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
                </Switch> 
            </Router> 
            <Footer footerTitle={footerTitle}/> 
        </div>
  );
}

export default App;