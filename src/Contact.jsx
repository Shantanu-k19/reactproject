import React from 'react';

import "./index.css";



const Contact=()=>{
    return (<>
    <section id="contact" className="spaceHome col-12 mx-auto">
    
    <div class="contact3 py-5">
  <div class="row no-gutters">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="card-shadow">
            <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg" class="img-fluid"/>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="contact-box ml-3">
            <h1 class="font-weight-light mt-2">Quick Contact</h1>
            <form class="mt-4">
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <input class="form-control" type="text" placeholder="name"/>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <input class="form-control" type="email" placeholder="email address"/>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <input class="form-control" type="text" placeholder="phone"/>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <textarea class="form-control" rows="3" placeholder="message"></textarea>
                  </div>
                </div>
                <div class="col-lg-12">
                <button type="submit" className="btn btn-outline-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="card mt-4 border-0 mb-4">
            <div class="row">
              <div class="col-lg-4 col-md-4">
                <div class="card-body d-flex align-items-center c-detail pl-0">
                  <div class="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png"/>
                  </div>
                  <div class="">
                    <h6 class="font-weight-medium">Address</h6>
                    <p class="">1786 Tathawde
                        Pune</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="card-body d-flex align-items-center c-detail">
                  <div class="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png"/>
                  </div>
                  <div class="">
                    <h6 class="font-weight-medium">Phone</h6>
                    <p class="">9887775643</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="card-body d-flex align-items-center c-detail">
                  <div class="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png"/>
                  </div>
                  <div class="">
                    <h6 class="font-weight-medium">Email</h6>
                    <p class="">
                      info@agrotech.com
                      123@agrotech.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




    
 
  <footer>
  

  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://google.com"> AgroTech.com</a><br/>
  {/*   <a href='https://pngtree.com/so/network-clipart'>network clipart png from pngtree.com</a><br/>
    <a href='https://www.freepik.com/vectors/logo'>Logo vector created by starline - www.freepik.com</a> */}
  </div>
 

</footer>

    </section>
    </>)
}
    

export default Contact;