import React from 'react';
 
export const Picker = ({ fetchColor, newColor, oldColor }) => {
   
  const handleClick = () => {
   fetchColor();
  }

  const textStyle = {newColor};

  return (
    <div className="colorPick">
      <button type="button" className="btn" onClick={ handleClick }>
        Change
      </button>
      <p>New color is: { newColor }</p>
      <h5>Write some text:</h5>
      <textarea style={ textStyle } />
      <p>Your old color is: { oldColor }.</p>
    </div>
 );
};
