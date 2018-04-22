import React, { Component } from 'react';

class StationDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entrances: this.props.entrances || []
        };
    }
    // componentWillReceiveProps(){
    //     this.setState({entrances: this.props.entrances})
    //     this.entranceList()
    // }

    entranceList() {
        let entrances = [];
        if (this.props.entrances && this.props.entrances.length > 0) { 
            for (let i = 0; i < this.props.entrances.length; i++) {
                console.log(this.props.entrances[i]);
                // if (this.props.entrances[i].Description.includes('Elevator') || this.props.entrances[i].Description.includes('elevator')){
                    entrances.push(<li>{ this.props.entrances[i].Description }</li>)
                // }    
            }
        }
        return entrances;
    }

    parseIncidents() {
        let warnings = [];
        if (this.props.incidents && this.props.incidents.length > 0) {
            for(let i = 0; i < this.props.incidents.length; i++) {
                console.log(this.props.incidents[i])
                warnings.push([this.props.incidents[i].SymptomDescription, this.props.incidents[i].LocationDescription]);
            }
            // warnings.map(el => {
            //     if (el.UnitType == 'ELEVATOR') {
            //         warning = true;
            //         warningListStr += '<li>' + el.SymptomDescription + '<br />' + i.LocationDescription + '</li>';
            //     }
            // });
            // if (!warning) {
            //     warningListStr += '<p>No Elevator Incidents</p>'
            // }
        }
        return warnings;
    }

    render() {
        return (
            <div className="col-lg-12 text-left" id="display-container">
                {/* <h2 id="station-name-head">{this.props.stationName}</h2> */}
                <ul className="list-unstyled" id="entrance-list">
                    {this.entranceList()}
                </ul>
                <div id="elevator-warning">
                {this.parseIncidents()}
                </div>
            </div>
        );
    }
}

export default StationDetails;