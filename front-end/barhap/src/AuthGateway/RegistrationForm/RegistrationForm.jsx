import React, {Component} from 'react';

class RegistrationForm extends Component {
    constructor(){
        super();
        this.state = {
            username: "",
            email: "",
            city: "",
            state: "",
            password: "",
            verify_password: ""
        }
    }
    render(){
        return <form>
            Username: <input type="text" name="username"/><br/>
            Email: <input type="text" name="email"/><br/>
            City: <input type="text" name="city"/><br/>
            State: <input type="text" name="state"/><br/>
            Password: <input type="password" name="password"/><br/>
            Verify Password: <input type="password" name="verify_password"/><br/>
            <input type="submit"/>
        </form>
    }
}



export default RegistrationForm