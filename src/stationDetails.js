import React, { Component } from 'react';

class StationDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stationName : this.props.stationName || 'Sample Entrance',
            entrances: this.props.entrances || []
        };
    }

    entranceList() {
        let html;
        if (this.state.entrances.length > 0) { 
            for (let i = 0; i < this.state.entrances.length; i++) {
                html += <li key={i}>{ this.state.entrances[i].description }</li>
            }
        }
        return html;
    }

    render() {
        return (
            <div id="display-container">
                <h2 id="station-name-head">{this.state.stationName}</h2>
                <ul id="entrance-list">
                    {this.entranceList()}
                </ul>
                <div id="elevator-warning"></div>
            </div>
        );
    }
}

export default StationDetails;