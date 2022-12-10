import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './Signup.css';

class Signup extends Component{
  render(){
    const myStyle={
      height: '110vh',
      marginTop: '-70px',
      fontSize: '10px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };

    return (
      <div style={myStyle}>
      <center><form>
      <div class="container">
      <center><font color="#C10003"><font size="7"><div class="top"><b>Create Your Account</b></div></font></font></center>
      <br></br><div class="l1"></div>
      <div class="name"><input type="text" placeholder="Firstname" name="firstname" required />
      <input type="text" placeholder="Lastname" name="lastname" required /></div>
      <center><input type="text" placeholder="Enter Email ID or Phone Number" name="email" required /></center>
      <center><div class="pass"><input type="password" placeholder="Enter Password" name="password" required /></div></center>
      <button type="submit">SIGN UP</button>
      <br></br><br></br><div class="l2"><div class="or">or</div></div>
      <div class="cont">Continue With
      <img src="ggl.png" width="57" height="53" class="ggl"></img>
      <img src="fb.png" width="55" height="50" class="fb"></img>
      <img src="twit.png" width="60" height="50" class="twit"></img>
      <img src="appl.png" width="50" height="53" class="appl"></img></div>
      <img src="logo3.png" width="110" height="100" class="logo"></img>
      </div>
      </form></center>
      </div>
    );
  }
}

export default Signup;