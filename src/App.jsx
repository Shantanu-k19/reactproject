import React from 'react';
import ReactDom from 'react-dom';
import {Route,Switch, Redirect} from 'react-router-dom';
import About from './About';
import Services from './Services';
import Home from './Home';
import Contact from './Contact';
import Navbar from './Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './index.css';
const App=()=>{
    return <>
    <Navbar />
    <Home />
    <About/>
    <Services/>
    <Contact/>

    
    </>
}
export default App;