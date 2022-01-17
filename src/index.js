
import React from 'react';
import ReactDOM from 'react-dom';
import DisplayTime from "./TheatersTiming.js";
import SlideShow from "./imageSlideShow.js";
 
import reactDom from 'react-dom';

import { Component } from 'react';


import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Caption from './Caption.js'


import ActionLink from "./Bookings";
import Toggle from './pages/TogglesForTable'
import App from './App.js'
import {Trailers,BookTickets} from './TimingsTheatersDisplay'
import WatchTrailers from './WatchTrailers.js'
import Navbar from './Navbar/Navbars.js'
import Footer from './Footer/Footer.js'






/*this is used for editing the heading tag  */
let HeadingStyle = {
    textAlign:"center",
    color: "red",
    padding:"4px 31px",
    backgroundColor:"black",
    fontSize:'31px'
    
      
};

/* ----------------------------- END OF HEADING TAG -------------------- */




function HeadingTag(){
    return <div style={HeadingStyle}>
         <h1>    
             
             BOOKING.COM </h1>
       
    </div>
}


export default class DisplayAll extends React.Component{
         
    render(){

  

        return (
           
        
          
            <div>

<App/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>



<HeadingTag />

                  
               
               
          <br/>   <button  className='sbt'  onClick={Trailers}>WATCH TRAILER</button>  <br/> <button  className='sbt' onClick={BookTickets}>Book Ticket</button><br/>
                 <Caption/>
                <SlideShow/>
                

               
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<DisplayTime />
<Footer/>

           

  
            </div>
           
            
        );    
}
}


 class Man extends React.Component{
 render(){
    return(

        <>
         <BrowserRouter>
             <App />
            
         </BrowserRouter></>

   )
  
      
}
}



ReactDOM.render(<><Navbar/><DisplayAll/> </>,document.getElementById('root'));


