import React, { Component } from 'react'

class ColorList extends Component {
  constructor() {
    super()
  
    this.state = {
      data: [],
    };
  }
  

  render() {
    return (
        <div>Lista boja
          <ul>
           <li>1.</li>
           <li>2.</li>
           <li>3.</li>
          </ul>
        </div>
    );
  }
}

export default ColorList;