import React, {Component} from 'react';
import BarsContainer from '../BarsContainer/BarsContainer';

class UserContainer extends Component {
    constructor(){
        super();
        this.state = {
            showBars: false,
            city: null,
            bars: [],
            searched: false
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        this.props.handleQuery(this.state.city)
        this.showState()
        this.setState({
            searched: true
        })

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    showState = () => {
        console.log(this.state.city)
        console.log(this.props)
    }

    render(){
        console.log(this.props);
        return <div className="userContainer">
          
            <h3>Welcome, {this.props.username}</h3>
            {this.state.searched ?
            null
            :
            <form onSubmit={this.handleSubmit}>
                Find Bars In: <input onChange={this.handleChange} type="text" name="city"/>
                <input type="submit"/>
            </form>
            }


            
            {this.props.isSearched ?
            <BarsContainer searchBars={this.searchBars} city={this.state.city} lat={this.props.lat} lng={this.props.lng}/>
            :
            null
            }  
            <button onClick={this.props.handleLogout}>Logout</button> 
        </div>
    }
}



export default UserContainer