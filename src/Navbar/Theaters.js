
import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

  
class  Theaters extends React.Component{

  constructor(props){
    super(props);
    this.state = {value:'KAMALA'}


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlehref = this.handlehref.bind(this);

    
  }


  handleChange(event){
    this.setState({value:event.target.value})
  }

handleSubmit(event){
     alert('PRESS OK TO CONFIRM THE THEATERS : ' + this.state.value ) ;
  event.preventDefault();

}

handlehref(){
  if(true){
    window.location = 'http://localhost:3000/Bookingsite'
  }else{
    alert('ok wrong')
  }
}



render(){
  return(
    <form onSubmit={this.handleSubmit} >
    <label>
    CHOOSE THE THEATERS NEAR YOU:
      <select value={this.state.value} onChange={this.handleChange}  >
        <option  value="MAYAJAL" >MAYAJAL</option>
        <option value="PALAZO">PALAZO</option>
        <option value="KAMALA">KAMALA</option>
        <option value="ROHINI">ROHINI</option>
        <option value="KASI TALKIES">KASI TALKIES</option>
        <option value= "UDHAYAM">UDHAYAM</option>
      </select>
    </label>
    <input type="submit" value="Submit" onClick={this.handlehref} />
  </form>
  )
}
}
export default Theaters;