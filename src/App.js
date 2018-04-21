import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <stationSelector></stationSelector>
        <stationDetails></stationDetails>
      </div>
    );
  }
}

export default App;
