import React from 'react';

import "./index.css";

import Common from './Common';

import dribble from './Images/dribble.jpg';




const Home=()=>{
    return <>
    <section id="home" className="spaceHome col-12 mx-auto">
   <Common 
    headline="Shop Organic from"
    blueline="AgroTech"
    headline2="Where Farming meets Technology"
    wheretogo="about"
    img={dribble}
    buttonline="Know More"
    />
    </section>
    </>
}
export default Home;