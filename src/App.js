import React, { Component } from 'react';
import StationDetails from './stationDetails.js';
import StationSelector from './stationSelector.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StationSelector></StationSelector>
        <StationDetails></StationDetails>
      </div>
    );
  }
}

export default App;
