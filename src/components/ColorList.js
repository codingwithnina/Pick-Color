import React from 'react';

export const Colorlist = ({ history }) => {
  let content = '';
  if (history) {
    content = history.map((color, index) => {
      if (color !== '')
        return <li>{ color }</li>
    });
  }

  return (
    <div className="listColors">
      <h5>Previous colors were:</h5>
        <ul>
          { content }
        </ul>
    </div>
  );
};
