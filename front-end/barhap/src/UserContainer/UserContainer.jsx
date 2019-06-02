import React, {Component} from 'react';

class UserContainer extends Component {
    constructor(){
        super();
        this.state = {
            showModal: false
        }
    }


    render(){
        return <div>
            <h3>Welcome, {this.props.username}</h3>
            <h3>You live in {this.props.city}, {this.props.state}</h3>
            <button onClick={this.props.handleLogout}>Logout</button>
            
        </div>
    }
}



export default UserContainer