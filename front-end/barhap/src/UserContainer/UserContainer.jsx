import React, {Component} from 'react';
import BarsContainer from '../BarsContainer/BarsContainer';

class UserContainer extends Component {
    constructor(){
        super();
        this.state = {
            showBars: false,
            city: null,
            // lat: null,
            // lng: null
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.props)
        this.props.handleQuery(this.state.city)
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


    render(){
        return <div className="userContainer">
            <h3>Welcome, {this.props.username}</h3>
            <form onSubmit={this.handleSubmit}>
                Find Bars In: <input onChange={this.handleChange} type="text" name="city"/>
                <input type="submit"/>
            </form>
            <button onClick={this.props.handleLogout}>Logout</button>
            {this.props.lat ?
            <BarsContainer city={this.state.city} lat={this.props.lat} lng={this.props.lng}/>
            :
            null
            }
            
            
        </div>
    }
}



export default UserContainer