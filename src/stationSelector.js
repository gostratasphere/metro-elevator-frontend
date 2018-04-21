import React, { Component } from 'react'; 

class StationSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stations: []

        };
    }
    componentDidMount() {
        fetch('/station-list').then(p => {
            p.json().then(val => {
                // console.log(val);
                this.setState({stations: val});
            })
        })
    }

    stationList() {
        let stationOptions = [];
        for (let i = 0; i < this.state.stations.length; i ++) {
            stationOptions.push(<option>{this.state.stations[i].stationInfo.Name}</option>); 
            console.log(this.state.stations[i])
        }
        return stationOptions;
    }

    render() {
        return (
            <div className="container" id="list-container">
                <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    {/* <img src="/images/elevator-man.svg" width="30" height="30" class="d-inline-block align-top" alt="" /> */}
                    Is Metro Elevator?
                </a>
                </nav>

                <div className="jumbotron">
                    <h1 className="display-4">Pick a station</h1>
                    <hr className="my-4" />

                    <p className="lead">
                    <select className="form-control form-control-lg" id='station-selector'>
                    { this.stationList() }
                    </select>
                    </p>
                    <a className="btn btn-primary btn-lg" id="info-button" role="button">Elevator Info</a>
                </div>
            </div>
        );
    }
}

export default StationSelector;