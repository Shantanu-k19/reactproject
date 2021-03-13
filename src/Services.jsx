import React from 'react';

import Card from './Card';
import Sdata from './Sdata';



const Services=()=>{
    return <>
     <section className="spaceServices col-12 mx-auto" id="services">
        <div className="my-5">
            <h1 className="text-center ">Why Us?</h1>
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