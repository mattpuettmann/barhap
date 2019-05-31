import React, {Component} from 'react';
// import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import './App.css';
import AuthGateway from './AuthGateway/AuthGateway';
import UserContainer from './UserContainer/UserContainer';

class App extends Component {
  constructor(){
    super();
    this.state= {
      loggedIn: false,
      username: null,
      email: null,
      city: null,
      state: null
    }
  }

  handleRegister = async (formData) => {
    const response = await fetch ('http://localhost:8000/users/registration', {
      method: "POST",
      body: JSON.stringify(formData),
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const parsedResponse = await response.json()
    if(response.status === 201){
      this.setState({
        loggedIn: true,
        username: parsedResponse.username,
        city: parsedResponse.city,
        state: parsedResponse.state
      })  
    }
  }





  handleLogout =  () => {
    this.setState({
      loggedIn: false
    })
  }

  render(){
    return <div className="App">
      <h2>BarHap</h2>
      {this.state.loggedIn ?
      <UserContainer handleLogout={this.handleLogout} username={this.state.username}/>
      :
      <AuthGateway handleRegister={this.handleRegister}/>
      }
    </div>
  }
}


export default App;
