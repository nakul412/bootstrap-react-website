import React from 'react';
import ReactDOM from 'react-dom';

const Contact=()=>{
return(
    <>
    
    <div className='my-5'>
        <h1 className='text-center'>
            Contact Us</h1></div> 
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form>
                        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" class="form-control"  placeholder="Enter your name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
  <input type="number" class="form-control"  placeholder="XXXXXXXXX"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Date of Birth</label>
  <input type="Date" class="form-control"  placeholder=""/>
</div>

<div class="mb-3">
    
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" rows="3"></textarea>
</div>
<button class="btn btn-primary"  type="submit">Submit Form</button>
                        </form>

                    </div>

                </div>

            </div>
    </>
)
}
export default Contact;