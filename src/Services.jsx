import React from 'react';
import ReactDom from 'react-dom';

import Card from './Card';
import Sdata from './Sdata';

import cloud from '../src/Images/cloud.svg';

const Services=()=>{
    return <>
     <section className="spaceServices col-12 mx-auto" id="services">
        <div className="my-5">
            <h1 className="text-center whiten">Our Services</h1>
        </div>
        <div className="container-fluid mb-5 ">
            <div className="row">
                <div className="col-10 mx-auto"> 
                    <div className="row">
                   
                    
                    {
                    Sdata.map((values,index)=>{
                        return <>
                            <Card
                            img={values.imgsrc}
                            title={values.title  }                              
                            />
                        </>
                    })
                    } 
                    
                    </div>

                </div>
            </div> 

        </div>
</section>

    </>
}
export default Services;