import React from 'react'  



class Login extends React.Component{


  handleSubmit = e => {
    e.preventDefault();
   
  

    if (!e.target.email.value) {
      alert("Email is required");
    } else if (!e.target.email.value) {
      alert("Valid email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if ( e.target.email.value === "iamatk045@gmail.com" &&   e.target.password.value === "aravintakshan "  ){
      alert("Successfully logged in");
      e.target.email.value = "";
      e.target.password.value = "";
      
    } else {
      alert("Wrong email or password combination");
    }
  };


  render() {
    let s = true;
    let k;
    if(s){
      return (
        <div className="LoginForm">
          <h1 className="LoginPage">WELCOME TO THE LOGIN PAGE OF BOOKING.COM</h1>
  
          <form  onSubmit={this.handleSubmit}>
  
              Email:
              <input type="email" name="email" placeholder="your email" /> <br/>
            
          
              PASSWORD:
              <input type="password" name="password" placeholder="password" />
          <br/>
            <button >ENTER</button>
        </form>
          
      </div>
      );
    }
    else{
      return (
        <div className="LoginForm">
          <h1 className="LoginPage">Already logged in</h1>
          </div>
      )
    }
  }
}


export default Login;

