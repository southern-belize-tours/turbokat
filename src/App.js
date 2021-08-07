//Used for router 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import Components
import Footer from './Components/Footer.js'; 
import Home from './Components/Home.js'; 
import FansOnly from './Components/FansOnly.js'; 
import NavbarArea from './Components/NavbarArea.js'; 
import OtherNavbarArea from './Components/OtherNavbarArea.js'; 
import MobileNavbarArea from './Components/MobileNavbarArea.js'; 

import logo from './logo.svg';
import './App.css';


function importAll(r) {
    let ret = [];
    let i = 0;
    r.keys().map((item, index) => { ret[item.replace('./', '')] = r(item); ++i });
    ret["numKeys"] = i;
    return ret;
}

const options = [
    { text: "File your own taxes", url: "/" },
    { text: "File an expert's taxes", url: "/"  },
    { text: "Look at my Rabbit", url: "/fansOnly"},
    { text: "Support", url: "/" },
    { text: "After you File", url: "/" }
];

let images = importAll(require.context('./Images/General/turbokatFeatures', false, /\.(png)$/)); 
const gridCaption = "TAXES, KATRINAFIED"; 
const gridPunchline = "Worried about your taxes? Just behave like my rabbit and hop onto it!"; 
const featuresCaption = "One accountant. Everyones into it."; 
let turbokatFeatures = [
    {
        featureName: "Do-Si-Dos",
        featureImageName: "dosido",
        featureAlt: "Buy Katrina some Do-Si-Dos"
    },
    {
        featureName: "Samoas",
        featureImageName: "samoa",
        featureAlt: "Buy Katrina some Samoas"
    },
    {
        featureName: "Thin Mints",
        featureImageName: "thinMint", 
        featureAlt: "Buy Katrina some ThinMints"
    }
]; 
for (let i = 0; i < turbokatFeatures.length; ++i) {
    turbokatFeatures[i].featureImage = images[turbokatFeatures[i].featureImageName+".png"]; 
}
const turbokatPunchline = ""; 

let tileImages = importAll(require.context('./Images/General/taxOptions', false, /\.(png)$/)); 
let taxOptions = [
    {
        optionText: "File my taxes",
        tileColor: { background: "linear-gradient(265deg, #00c1bf, #055393 117%)"}
    },
    {
        optionText: "Or I'll file your taxes",
        tileColor: { background: "linear-gradient(33deg, #386b9e, #3888bc)" }
    },
    {
        optionText: "Or don't file taxes",
        tileColor: { background: "linear-gradient(91deg, #bc403e, 1.23%, #d2302d 99.85%)" }
    }
];
for (let i = 0; i < taxOptions.length; ++i) {
    taxOptions[i].image = tileImages["kat_acct"+ (i+1) + ".png"]; 
}

const footerTitle = "Join the billions who file their taxes"; 

function App() {
    return (
        <div> 
            <NavbarArea /> 
            <OtherNavbarArea options={options}/> 
            <MobileNavbarArea options={options}/> 
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
                </Switch> 
            </Router> 
            <Footer footerTitle={footerTitle}/> 
        </div>
  );
}

export default App;

/*
 *     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          </header>*/ 