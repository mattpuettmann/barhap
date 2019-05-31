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
        </div>
    }
}



export default UserContainer