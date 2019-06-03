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
            verify_password: "",
            lat: "",
            lng: ""
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.handleRegister(this.state)
        this.props.handleGeo(this.state.city, this.state.state)

    }


    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }



    render(){
        return <div className="regForm">
            <form onSubmit={this.handleSubmit}>
                <h3>New User? Sign Up Here:</h3>
                <div className="regFormInput">
                    Username: <br/>
                    <input onChange={this.handleChange} type="text" name="username"/><br/>
                    Email: <br/>
                    <input onChange={this.handleChange} type="text" name="email"/><br/>
                    City: <br/>
                    <input onChange={this.handleChange} type="text" name="city"/><br/>
                    State: <br/>
                    <input onChange={this.handleChange} type="text" name="state"/><br/>
                    Password: <br/>
                    <input onChange={this.handleChange} type="password" name="password"/><br/>
                    Verify Password: <br/>
                    <input onChange={this.handleChange} type="password" name="verify_password"/><br/>
                </div>
                <input type="submit"/>
            </form>
        </div>
    }
}



export default RegistrationForm