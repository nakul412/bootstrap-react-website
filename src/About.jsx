import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';
import Common from './Common.jsx';

const About=()=>{
return(
    <>
    <Common 
    heading="Welcome to About Page " button="Contact Now"
    visit="/contact"/>

    </>
)
}
export default About;