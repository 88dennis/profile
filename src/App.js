import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {GlobalContextProvider} from './context/GlobalState';
// import { GlobalContext } from './context/GlobalState';
// import { useContext } from 'react';
import LandingPage from './pages/LandingPage'
import AboutMePage from './pages/AboutMePage'
import "bootstrap-material-design/dist/css/bootstrap-material-design.css";
import './App.css';
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

// import logo from './logo.svg';


function App() {
  // const { user } = useContext(GlobalContext);
  return (
    <div className="App">
     <GlobalContextProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/about" component={AboutMePage} />
        <Route exact path="/portfolio" component={PortfolioPage} />
        <Route exact path="/contact" component={ContactPage} />

        </Switch>
      </Router>
    </GlobalContextProvider>
    </div>
  );
}

export default App;
