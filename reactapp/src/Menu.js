import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './Menu.css';

class Menu extends Component{
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
      <br></br>
      <div class="ame"><font size="6"><font color="#000473"><b>American Cuisine</b></font></font></div>
      <br></br>
      <div class="arb"><font size="6"><font color="#000473"><b>Arabian Cuisine</b></font></font></div>
      <br></br>
      <div class="ita"><font size="6"><font color="#000473"><b>Italian Cuisine</b></font></font></div>
      <br></br>
      <div class="jap"><font size="6"><font color="#000473"><b>Japanese Cuisine</b></font></font></div>
      <br></br>
      <div class="kor"><font size="6"><font color="#000473"><b>Korean Cuisine</b></font></font></div>
      <br></br>
      <img src="logomenu.png" width="320" height="170" class="mlog"></img>
      <img src="logo3.png" width="120" height="120" class="logo"></img>
      </form></center>
      </div>
    );
  }
}

export default Menu;