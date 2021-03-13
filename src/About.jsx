import React from 'react';

import "./index.css";

import Common from './Common';
import unblast from './Images/unblast_farming/unblast.jpg';





const About=()=>{
    return <>
    <section className="spaceAbout col-12 mx-auto " id="about">
   <Common 
    headline="Revolutionary Technique of AI Farming"
    headline2="We are a team of passionate professionals in collabration with the experienced farmers from all over India"
    blueline="We serve state of the art products"
    wheretogo="services"
    img={unblast}
    buttonline="Our Expertise"
    />
    </section>
    </>
}
export default About;