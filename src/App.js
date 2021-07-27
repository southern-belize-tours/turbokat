//Used for router 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import Components
import Footer from './Components/Footer.js'; 
import Home from './Components/Home.js'; 
import NavbarArea from './Components/NavbarArea.js'; 
import OtherNavbarArea from './Components/OtherNavbarArea.js'; 

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
    { text: "File your own taxes" },
    { text: "File an expert's taxes" },
    { text: "Look at my Rabbit" },
    { text: "Support" },
    { text: "After you File" }
];

let images = importAll(require.context('./Images/General/turbokatFeatures', false, /\.(png)$/))
console.log(images); 
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


function App() {
    console.log(turbokatFeatures); 
    return (
        <div> 
            <NavbarArea /> 
            <OtherNavbarArea options={options}/> 
            <Router>
                <Switch>
                    <Route path="/"
                        exact component={() => <Home gridCaption={gridCaption}
                                                     gridPunchline={gridPunchline}
                                                     featuresCaption={featuresCaption}
                                                     turbokatFeatures={turbokatFeatures}
                                                     turbokatPunchline={turbokatPunchline}/>}
                     /> 
                </Switch> 
            </Router> 
            <Footer/> 
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