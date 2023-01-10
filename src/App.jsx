import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import Service from './Service.jsx';
import About from './About.jsx';
import Navbar from './Navbar';
import { Route,Switch,Redirect} from 'react-router-dom';
import Footer from './Footer';
const App=()=>{
return(
    <>
    <Navbar/>
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route  exact path="/about" component={About}></Route>
        <Route exact path="/service" component={Service}></Route>
        <Route  exact path="/contact" component={Contact}></Route>
        <Redirect to='/'></Redirect>
    
    </Switch>
    <Footer></Footer>
  
  
    </>
)
}
export default App;