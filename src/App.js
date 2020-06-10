import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Header from "./components/Header";
import InputText from "./components/InputText";
import Picker from "./components/Picker";
import ColorList from "./components/ColorList";

import './App.css';

class App extends Component {
  render() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <InputText />
        <div className="separator"></div>
        <Picker />
        <div className="separator"></div>
        <ColorList />
      </div>
    </div>
    );
  }
}

export default App;