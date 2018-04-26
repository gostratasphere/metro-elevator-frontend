import React, { Component } from 'react';
import StationDetails from './stationDetails.js';
import StationSelector from './stationSelector.js';
import './App.css';
import './bootstrap/bootstrap.min.css';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stationName: '',
      entrances: [],
      incidents: []
    };
    this.stationSelectorCallback = this.stationSelectorCallback.bind(this);
  }

  stationSelectorCallback(data) {
    let url = '/station?name=' + data;
    fetch(url).then(d => {
        d.json().then(json => {
          console.log(json);
            this.setState({
                entrances: json.entrances,
                incidents: json.incidents,
                stationName: data
            });
        })
    })
    fetch('/stat?name=' + data).then(d => {
      d.text().then(text => {
        this.setState({incidentHTML: text})
      })
    })
  }

  render() {
    return (
      <div className="App container">
      <StationSelector stationGetter={this.stationSelectorCallback}></StationSelector>
      <StationDetails stationName={this.state.stationName} entrances={this.state.entrances} incidents={this.state.incidents} incidentHTML={this.state.incidentHTML}></StationDetails>
      </div>
    );
  }
}

export default App;
