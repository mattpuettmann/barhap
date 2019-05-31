import React, {Component} from 'react';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import LoginForm from './LoginForm/LoginForm';

class AuthGateway extends Component {
    constructor(){
        super();
        this.state = {
            activeTab: '1'
        }
    }
    render(){
        return <div>
            <RegistrationForm handleRegister={this.props.handleRegister}/>
            <LoginForm/>
        </div>
    }
}



export default AuthGateway