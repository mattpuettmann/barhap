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

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.handleRegister(this.state)
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }



    render(){
        return <form onSubmit={this.handleSubmit}>
            Username: <input onChange={this.handleChange} type="text" name="username"/><br/>
            Email: <input onChange={this.handleChange} type="text" name="email"/><br/>
            City: <input onChange={this.handleChange} type="text" name="city"/><br/>
            State: <input onChange={this.handleChange} type="text" name="state"/><br/>
            Password: <input onChange={this.handleChange} type="password" name="password"/><br/>
            Verify Password: <input onChange={this.handleChange} type="password" name="verify_password"/><br/>
            <input type="submit"/>
        </form>
    }
}



export default RegistrationForm