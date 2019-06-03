import React, {Component} from 'react';

class ConditionsContainer extends Component {
    constructor(){
        super();
        this.state = {
            temperature: ""
        }
    }

    showLocalConditions = async () => {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/5ade28f3e9751e874bf8fb87b199917e/${this.props.lat},${this.props.lng}`)
        const parsedResponse = await response.json()
        this.setState({
            temperature: parsedResponse.currently.temperature
        })
    }

    render(){
        return <div>

            <h2>It is currently {this.props.temperature}°F in {this.props.city}</h2>
            <button onClick={this.showLocalConditions}>show weather</button>
        </div>
    }
}



export default ConditionsContainer