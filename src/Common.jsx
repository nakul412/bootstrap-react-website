import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';

const Common=(props)=>{
return(
    <>
    
<section id="header" className='d-flex align-items-center '>
   <div className='container-fluid nav_bg'>
       <div className='row'>
           <div className='col-10 mx-auto'>
               <div className="row">
               <div className='col-md-6 col-12 pt-5 pt-lg-0  d-flex flex-column justify-content-center'>
                   <h1>{props.heading} <strong class="brand-name">Nakul Grover</strong></h1>
                   <h2 className='my-3'>
                      We are the team of talented developer making websites
                   </h2>
                   <div className="mt-3">
                       <NavLink to={props.visit} className='  btn-get-started'>
                       {props.button}
                       </NavLink></div>
               </div>
               <div className='col-lg-6  col-12'>
                   <img src="https://thumbs.dreamstime.com/b/cute-character-penguin-hat-scarf-ski-vector-illustration-hand-drawn-178293529.jpg" className="img fluid animated" alt="homeimg" height="700px" />
               </div>
               </div>
           </div>
       </div>
   </div>
</section>
    </>
)
}
export default Common;