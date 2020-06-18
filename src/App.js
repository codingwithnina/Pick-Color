import React from 'react';
import { Header } from './components/Header';
import { Picker } from './components/Picker';
import { Colorlist } from './components/Colorlist';

import './App.scss';

function App() {
  return (
    <div>
    <Header />
    <Picker />
    <Colorlist />
    </div>
  );
}

export default App;