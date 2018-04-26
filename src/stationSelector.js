import React, { Component } from 'react'; 

class StationSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stations: [],
            selectedStation: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        let stationNames = [];
        fetch('/station-list').then(p => {
            p.json().then(val => {
                val.forEach(element => {
                    stationNames.push(element)
                });
                // remove repeat stations and alphabetize list
                stationNames = Array.from(new Set(stationNames.map(s => {
                    return s.stationInfo.Name
                })));
                stationNames.sort()
                this.setState({stations: stationNames});
                this.props.stationGetter(stationNames[0])
            });
        });
        
    }

    stationList() {
        let stationOptions = [];
        for (let i = 0; i < this.state.stations.length; i ++) {
            stationOptions.push(<option>{this.state.stations[i]}</option>); 
            // console.log(this.state.stations[i])
        }
        return stationOptions;
    }

    handleChange(e) {
        this.setState({selectedStation: e.target.value})
        this.props.stationGetter(e.target.value);
    }

    render() {
        return (
            <div className="col-lg-12" id="list-container">
                {/* <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Is Metro Elevator?
                </a>
                </nav> */}

                <div className="jumbotron">
                    {/* <h1 className="display-4">Pick a station</h1>
                    <hr className="my-4" /> */}

                    <p className="lead">
                    <form>
                        <select className="form-control form-control-lg" id='station-selector' onChange={this.handleChange}>
                        { this.stationList() }
                        </select>
                    </form>
                    </p>
                    {/* <a className="btn btn-primary btn-lg" id="info-button" role="button" onClick={ getStationInfo }>Elevator Info</a> */}
                </div>
            </div>
        );
    }
}

export default StationSelector;