//Used for router 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import Components
import Footer from './Components/Footer.js'; 
import Home from './Components/Home.js'; 
import NavbarArea from './Components/NavbarArea.js'; 
import OtherNavbarArea from './Components/OtherNavbarArea.js'; 

import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div> 
            <NavbarArea /> 
            <OtherNavbarArea/> 
            <Router>
                <Switch>
                    <Route path="/"
                           exact component={() => <Home />}
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