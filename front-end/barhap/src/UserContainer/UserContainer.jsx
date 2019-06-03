import React, {Component} from 'react';
import BarsContainer from '../BarsContainer/BarsContainer';

class UserContainer extends Component {
    constructor(){
        super();
        this.state = {
            showBars: false,
            city: null,
            bars: []
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.props)
        this.props.handleQuery(this.state.city)
        this.setState({
            city: [e.target.value]
        })
        console.log(this.state.city)
        this.searchBars()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    showState = () => {
        console.log(this.state)
        console.log(this.props)
    }
    searchBars = async (formData) => {
        console.log(formData)
        console.log(this.props.city)
        console.log(this.state.city)
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=bars+in+${this.state.city}&key=AIzaSyA2318qe8rH7UavfkasiDAngRA5wT3ESsw`)
        const parsedResponse = await response.json()
        console.log(parsedResponse)
        console.log(parsedResponse.results[0].name)
        this.setState({
            bars: parsedResponse.results
        })
        console.log(this.state.bars)
    }


    render(){
        return <div className="userContainer">
            <h3>Welcome, {this.props.username}</h3>
            <form onSubmit={this.handleSubmit}>
                Find Bars In: <input onChange={this.handleChange} type="text" name="city"/>
                <input type="submit"/>
            </form>
            <button onClick={this.props.handleLogout}>Logout</button>
            {this.props.lat ?
            <BarsContainer searchBars={this.searchBars} city={this.state.city} lat={this.props.lat} lng={this.props.lng}/>
            :
            null
            }
            
            
        </div>
    }
}



export default UserContainer