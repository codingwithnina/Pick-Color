import React from "react";

function Header() {
 return(
   <header style={headerStyle}>
     <h1>Colorpicker app</h1>
   </header>
 )
}

const headerStyle = {
  background:'#666',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default Header;