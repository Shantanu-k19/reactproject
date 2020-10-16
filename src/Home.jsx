import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";
import { NavLink } from 'react-router-dom';
import weba from "../src/home.svg";
import Common from './Common';




const Home=()=>{
    return <>
    <section id="home" className="spaceHome col-12 mx-auto">
   <Common 
    headline="Grow your business with"
    blueline="ClevTech"
    headline2="Where culture meets technology"
    wheretogo="about"
    img={weba}
    buttonline="Know More"
    />
    </section>
    </>
}
export default Home;