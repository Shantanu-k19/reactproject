import React from 'react';
import "./index.css";

import {Link} from 'react-scroll';

const Navbar=()=>{
    return <>
    <div className="container-fluid" id="nav">
    <div className="row">
    <div className="col-12 mx-auto"> 
    
        <nav className="navbar navbar-expand-lg transparent navbar-light fixed-top">
  <Link className="navbar-brand " to="nav" smooth={true} duration={1000}>AgroTech</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <Link activeClassName='menu_active' exact className="nav-link"  to="nav" smooth={true} duration={1000}>Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link activeClassName='menu_active' exact className="nav-link" to="about" smooth={true} duration={1000}>About</Link>
      </li>
      <li className="nav-item">
        <Link activeClassName='menu_active' exact className="nav-link" to="services" smooth={true} duration={1000}>Services</Link>
      </li>
      <li className="nav-item">
        <Link activeClassName='menu_active' exact className="nav-link" to="contact" smooth={true} duration={1000}>Contact</Link>
      </li>
      
    </ul>
    
  </div>
</nav>
</div>
</div> 
</div>
    </> 
}
export default Navbar;