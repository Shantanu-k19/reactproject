import React from 'react';





const Card=(props)=>{
    return <>
    
                <div className="col-md-4 py-4 col-10 mx-auto">
                        

                                    <div class="card" >
                                    <img class="card-img-top" src={props.img} alt={props.img}/>
                                        <div class="card-body">
                                        <h5 class="card-title"><center>{props.title}</center></h5>
                                        
                                            
                                        </div>
                                    </div>
                </div>
                        
                            
           

    </>
}
export default Card;