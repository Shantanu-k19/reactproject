import React from 'react';

import "./index.css";

import {Link} from 'react-scroll';




const Common=(props)=>{
    return <>
    <section id="header" className="d-flex align-item-center">
    <div className="container-fluid mt-5 ">
        <div className="row">
            <div className="col-12 mx-auto"> 
                <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1 className="mt-5"> {props.headline}<p className="ptag">{props.blueline}</p> </h1>
                <h3 className="mt-3">{props.headline2} </h3>
                    <div className="mt-3">
                    <Link activeClassName='menu_active' to={props.wheretogo} smooth={true} duration={1000}>
                    <button type="button" className="btn btn-outline-primary">
                        {props.buttonline}
                    </button>
                    </Link>
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={props.img} className="img-fluid animated" alt="home img"/>

                </div>
                </div>
            </div>
        </div> 

    </div>
    </section>
    </>
}
export default Common;