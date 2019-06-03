import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

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
            bars: []
        }
    }
    componentDidMount(){
        console.log(this.props)
        console.log(this.state)
        this.setState({
            isLoading: false,
            center: {
                lat: this.props.lat,
                lng: this.props.lng
            }
        })
        this.searchBars()
    }
    searchBars = async () => {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=bars+in+${this.props.city}&key=AIzaSyA2318qe8rH7UavfkasiDAngRA5wT3ESsw`)
        const parsedResponse = await response.json()
        console.log(parsedResponse.results[0].name)
        console.log(parsedResponse.results)
        this.setState({
            bars: parsedResponse.results
        })
        console.log(this.state.bars)

    }

    render(){
        console.log(this.state.bars)
        const barList = this.state.bars.map((bar) => {
            console.log(this.state.bars)
            return <div key={bar.id}>
                <h5>{bar.name}</h5>
            </div>
        })
        return <div className="barsContainer">
            <small>The local weather in {this.props.city}:</small>
            <h4>Bars in {this.props.city}:</h4>
            {barList}
            {this.props.lat &&
                <div className="mapContainer" style={{ height: '400px', width: '706px' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyDrIbIKBD3WPDwHWhiq7i9yaOEJp-C8xi4'}}
                        defaultCenter={this.state.center}
                        defaultZoom={this.state.zoom}
                    >
                    </GoogleMapReact>
                </div>
            }
        </div>
    }
}


export default BarsContainer