import React, { Component } from 'react';
import './App.css';
import DefaultIcon from "./assets/icons/default-icon.png";

class App extends Component {
  render() {
    const identity = "Alex";
    return (
      <div className="header">
        <img src={DefaultIcon} alt="" />
        <h1>Twitter Rojo</h1>
        {
          !identity ?
            (<h1>No usuario</h1>)
            :
            (<h1>Hola {identity}</h1>)

        }
      </div>
    );
  }
}

export default App;
