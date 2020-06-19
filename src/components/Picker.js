import React, { useState, useEffect } from 'react';
 
export const Picker = () => {
  const [color, setColor] = useState('');
  
  useEffect(async() => {
      const response = await fetch('http://www.colr.org/json/color/random');
      const data = await response.json();
      const [item] = data.colors;
      setColor(item.hex);
      console.log(item.hex);
    }, []);
   
  const handleClick = () => {
    const colors = setColor; 
  }


  return (
    <div className="colorPick">
      <button type="button" className="btn" onClick={(handleClick)}>Change</button>
      {color && <div>{color.hex}</div>}
      <p>New color is: #{color}</p>
      <div className="inputArea">
        <h5>Write some text:</h5>
        <textarea style={{color: {color}}}/>
      </div>
      <p>Your old color is #{color}.</p>
  
    </div>
 )
}
