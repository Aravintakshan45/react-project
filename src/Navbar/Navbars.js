
import React from "react";


class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar">
<ul>
    <li>
       <a href="/">Home</a>
       <a href  = '/about'>About</a>
       <a href = '/contact'>Contact</a>
       <a href = '/reviews'>Review</a>
       <a href = '/theaters'>Theaters</a>
    </li>
</ul>
            </div>
        )
    }
}

export default Navbar;