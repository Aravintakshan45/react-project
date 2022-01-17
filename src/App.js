import React from 'react'

//import {BrowserRouter as Router,Route, Switch,NavLink, BrowserRouter} from 'react-router-dom' /* switch - when 1st render it only matches the 1st one and it will not look for any 
                                                   // route - when the path mtches the current url it is displayed   */
                                                  

                                                  
import BookingSite from './pages/BookingSite'

import WatchTrailers from './WatchTrailers.js'
import chooseMovies from './chooseMovies'
import LoginPage from './pages/LoginPage.js'
import About from "./Navbar/About.js";
import Contact from './Navbar/Contact'
import Reviews from './Navbar/Reviews'

import Theaters from './Navbar/Theaters'
import {BrowserRouter as Router,Route, Switch,NavLink, BrowserRouter, Link } from 'react-router-dom'
import DisplayAll from './index.js'
import Navbar from './Navbar/Navbars'





class App extends React.Component{

  render(){
    return(
 
      <Router>
 
       <BrowserRouter>
     
   <Switch>
       
        <Route exact path='/loginpage' component={LoginPage} />
        <Route exact path = "/Bookingsite"  component={BookingSite} />
        <Route exact path = "/WatchTrailers" component={WatchTrailers}/>
        <Route exact path = '/chooseMovies' component = {chooseMovies} />
        
  
        <Route exact path = '/about' component = {About} />
        <Route exact path = '/contact' component = {Contact} />
        <Route exact path = '/reviews' component = {Reviews} />
        <Route exact path = '/theaters' component = {Theaters} />
      
        </Switch>
      
        </BrowserRouter>
       
      </Router>
            
  
  
  
    );
  }
  }
  

  



export default App;

  

    
         

  



 








