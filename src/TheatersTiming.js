import logo from './logo.svg';
import React from "react";
import ReactDom from "react-dom";
import './App.css';

import {TableLinks,Theaters2,Theaters3,Theaters4,Theaters5,Theaters6,Theaters7,Theaters8,Theaters9} from './TheatersTableLinks';
import{TimingsRow1,TimingsRow2,TimingsRow3,TimingsRow4,TimingsRow5,TimingsRow6,TimingsRow7,TimingsRow8,TimingsRow1_1,TimingsRow1_2,TimingsRow1_3,TimingsRow1_4,TimingsRow1_5,TimingsRow1_6,TimingsRow1_7,TimingsRow1_8,TimingsRow2_1,TimingsRow2_2,TimingsRow2_3,TimingsRow2_4,TimingsRow2_5,TimingsRow2_6,TimingsRow2_7,TimingsRow2_8, TimingsRow2_9} from './TimingsTheatersDisplay'
import ActionLink from "./Bookings.js";





class DisplayTime extends React.Component{

render(){
    return(
        <div>
           
             
             <table className='Apps'>
                 <caption>BOOK YOUR TICKETS</caption>
                 <tr>
                 <th> THEATERS</th>
                 <th > TIMING</th>
                 <th> TIMING</th>
                 <th > TIMING</th>
                 <th > TIMING</th>
                 <th> TIMING</th>
                 <th >TIMING</th>
                 <th >TIMING</th>
                 <th >TIMING</th>
                 </tr>
    
                 <tr>
                     <th>kasi</th>
                     <td onClick={TimingsRow1}>11.15 AM</td>
                     <td onClick={TimingsRow2}>10.20 AM</td>
                     <td onClick={TimingsRow3}>11.45 AM</td>
                     <td onClick={TimingsRow4}>1.20 PM</td>
                     <td onClick={TimingsRow5}>4.40 PM</td>
                     <td onClick={TimingsRow6}>7.15 PM</td>
                     <td onClick={TimingsRow7}>10.15 PM</td>
                     <td onClick={TimingsRow8}>11.45 PM</td>
                 </tr>
 
                 <tr>
                     <th>UDHAYAM</th>
                     <td onClick={TimingsRow1_1}>11.15 AM</td>
                     <td onClick={TimingsRow1_2}>10.20 AM</td>
                     <td onClick={TimingsRow1_3}>11.45 AM</td>
                     <td onClick={TimingsRow1_4}>1.20 PM</td>
                     <td onClick={TimingsRow1_5}>4.40 PM</td>
                     <td onClick={TimingsRow1_6}>10.15 PM</td>
                     <td onClick={TimingsRow1_7}>10.15 PM</td>
                     <td onClick={TimingsRow1_8}>10.15 PM</td>
                 </tr>
 
                 <tr>
                     <th onClick={TimingsRow2_1}>KAMALA</th>
                     <td onClick={TimingsRow2_2}>11.15 AM</td>
                     <td onClick={TimingsRow2_3}>10.20 AM</td>
                     <td onClick={TimingsRow2_4}>11.45 AM</td>
                     <td onClick={TimingsRow2_5}>1.20 PM</td>
                     <td onClick={TimingsRow2_6}>10.15 PM</td>
                     <td onClick={TimingsRow2_7}>4.40 PM</td>
                     <td onClick={TimingsRow2_8}>10.15 PM</td>
                     <td onClick={TimingsRow2_9}>10.15 PM</td>
                 </tr>
 
                 <tr>
                     <th>ROHINI</th>
                     <td>11.15 AM</td>
                     <td>10.20 AM</td>
                     <td>11.45 AM</td>
                     <td>1.20 PM</td>
                     <td>4.40 PM</td>
                     <td>10.15 PM</td>
                     <td>10.15 PM</td>
                     <td>10.15 PM</td>
                 </tr>
 
                 <tr>
                     <th>PALAZO</th>
                     <td>11.15 AM</td>
                     <td>10.20 AM</td>
                     <td>11.45 AM</td>
                     <td>1.20 PM</td>
                     <td>10.15 PM</td>
                     <td>10.15 PM</td>
                     <td>4.40 PM</td>
                     <td>10.15 PM</td>
                 </tr>
 
                 <tr>
                     <th>ALBERT</th>
                     <td>11.15 AM</td>
                     <td>10.20 AM</td>
                     <td>11.45 AM</td>
                     <td>10.15 PM</td>
                     <td>1.20 PM</td>
                     <td>10.15 PM</td>
                     <td>4.40 PM</td>
                     <td>10.15 PM</td>
                 </tr>
 
                 <tr>
                     <th>RAKI</th>
                     <td>11.15 AM</td>
                     <td>10.20 AM</td>
                     <td>10.15 PM</td>
                     <td>11.45 AM</td>
                     <td>1.20 PM</td>
                     <td>10.15 PM</td>
                     <td>4.40 PM</td>
                     <td>10.15 PM</td>
                 </tr>
 
 
 
             </table>
 
           
      
       </div>
    );
}
}
       
export default DisplayTime;

