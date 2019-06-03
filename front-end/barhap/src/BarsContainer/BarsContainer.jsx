import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import ConditionsContainer from '../ConditionsContainer/ConditionsContainer';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class BarsContainer extends Component {
    constructor(){
        super();
        this.state = {
            activeTab: '1',
            center: {
                lat: null,
                lng: null
            },
            zoom: 13,
            isLoading: true,
            bars: [],
            temperature: null,
            precip: null,
            summary: null
        }
    }
    componentDidMount(){
        this.setState({
            isLoading: false,
            center: {
                lat: this.props.lat,
                lng: this.props.lng
            }
        })
        this.searchBars()
        this.showLocalConditions()
    }
    searchBars = async () => {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=bars+in+${this.props.city}&key=AIzaSyA2318qe8rH7UavfkasiDAngRA5wT3ESsw`)
        const parsedResponse = await response.json()
        this.setState({
            bars: parsedResponse.results
        })
    }
    showLocalConditions = async () => {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/5ade28f3e9751e874bf8fb87b199917e/${this.props.lat},${this.props.lng}`)
        const parsedResponse = await response.json()
        this.setState({
            temperature: parsedResponse.currently.temperature,
            precip: parsedResponse.currently.precipProbability,
            summary: parsedResponse.currently.summary
        })
    }

    render(){
        const mapStuff = this.state.bars.map((bar) => {
            return <AnyReactComponent
                    lat={bar.geometry.location.lat}
                    lng={bar.geometry.location.lng}
                    text="BAR!"
                />
        })
        const barList = this.state.bars.map((bar) => {
            return <div key={bar.id} className="barNames">
                <h5>{bar.name}</h5>
            </div>
        })
        return <div className="barsContainer">
            <h4>The local weather in {this.props.city}:</h4>
            <ConditionsContainer city={this.props.city} lat={this.state.center.lat} lng={this.state.center.lng} temperature={this.state.temperature} precip={this.state.precip} summary={this.state.summary}/>
            <h4>Bars in {this.props.city}:</h4>
            {barList}
            {this.props.lat &&
                <div className="mapContainer" style={{ height: '400px', width: '706px' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyDrIbIKBD3WPDwHWhiq7i9yaOEJp-C8xi4'}}
                        defaultCenter={this.state.center}
                        defaultZoom={this.state.zoom}
                    >
                    {mapStuff}
                    </GoogleMapReact>
                </div>
            }
        </div>
    }
}


export default BarsContainer