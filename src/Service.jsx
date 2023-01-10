import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
const Service=()=>{
    const img="https://thumbs.dreamstime.com/b/cute-character-penguin-hat-scarf-ski-vector-illustration-hand-drawn-178293529.jpg"
return(
    <>
    
 <div className='my-5'>
     <h1 className='text-center'>
         Our Services
     </h1>
 </div>
 <div className='container-fluid mb-5'>
     <div className='row'>
         <div className='col-10 mx-auto'>
             <div className='row gy-4'>
              <Card image={img} />
              <Card image={img} />
              <Card image={img} />
              <Card image={img} />
              <Card image={img} />
              <Card image={img} />
              
                 </div>


             </div>

         </div>
     </div>
    </>
)
}
export default Service;