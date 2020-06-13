import React, { Component } from "react";

class Header extends Component {
  render() {
    return(
   <header style={headerStyle}>
     <h1>Colorpicker app</h1>
   </header>
    );
  }
}

const headerStyle = {
  background:'#667',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default Header;