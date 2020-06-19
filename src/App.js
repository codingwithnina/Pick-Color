import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Picker } from './components/Picker';
import { Colorlist } from './components/ColorList';

import './App.scss';

function App() {

  const [allColors, setAllColors] = useState([]);
  const [newColor, setNewColor] = useState("");
  const [oldColor, setOldColor] = useState("");

  const fetchColor = async () => {
    try {
      await fetch("http://www.colr.org/json/color/random", { cache: 'reload' })
      .then((result) => result.json())
      .then((result) => {
        setAllColors([ ...allColors, newColor ]);
        if(newColor !== '' && newColor !== '#')
          setOldColor(newColor);
        
        if (result.new_color !== '')
          setNewColor('#' + result.new_color);
      });
    } catch (error) {
      console.log("Error fetching Api:" + error);
    }
  };

  useEffect(() => {
    fetchColor();
  }, []);

  return (
    <div>
    <Header />
    <Picker fetchColor={ fetchColor } newColor={ newColor } oldColor={ oldColor } />
    <Colorlist history={ allColors }/>
    </div>
  );
}

export default App;