import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";
import { NavLink } from 'react-router-dom';
import weba from "../src/aboutus.svg";
import Common from './Common';



const About=()=>{
    return <>
    <section className="spaceAbout col-12 mx-auto " id="about">
   <Common 
    headline="IT Services and Product Development"
    headline2="We are a team of passionate professionals with an average of 15 Years of experience 
    with Leading Companies in IT Industries across Australia, US, UK, India"
    blueline="Products that add life to your business"
    wheretogo="services"
    img={weba}
    buttonline="Our Expertise"
    />
    </section>
    </>
}
export default About;