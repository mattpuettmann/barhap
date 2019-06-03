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
            isLoading: true
        }
    }
    componentDidMount(){
        console.log(this.state.center.lat)
        console.log(this.props)
        console.log(this.state)
        this.setState({
            isLoading: false,
            center: {
                lat: this.props.lat,
                lng: this.props.lng
            }
        })
    }

    render(){
        return <div className="barsContainer">
            <h4>Bars in {this.props.city}:</h4>
            {this.props.lat &&
                <div className="mapContainer" style={{ height: '400px', width: '680px' }}>
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