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
      state: null,
      lat: null,
      lng: null
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

  handleLogin = async (formData) => {
    try{
      const response = await fetch('http://localhost:8000/users/login', {
        method: "POST",
        body: JSON.stringify(formData),
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const parsedResponse = await response.json()
      console.log(parsedResponse)
      if(response.status === 201){
        this.setState({
          loggedIn: true,
          username: formData.username,
          email: parsedResponse.email,
          city: parsedResponse.city,
          state: parsedResponse.state
        })
      }
    }catch(err){
      console.log(err)
    }
  }

  handleLogout =  () => {
    this.setState({
      loggedIn: false
    })
  }
  handleGeo = async (city, state) => {
    const result = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city},+${state}&key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg`)
    const parsedResult = await result.json();
    console.log(parsedResult.results[0].geometry.location.lat)
    await this.setState({
      lat: parsedResult.results[0].geometry.location.lat,
      lng: parsedResult.results[0].geometry.location.lng
    })
  }

  showState = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  render(){
    return <div className="App">
      <div className="header">
        <h2>BarHapp</h2>
      </div>
      {this.state.loggedIn ?
      <UserContainer handleLogout={this.handleLogout} username={this.state.username} city={this.state.city} state={this.state.state}/>
      :
      <AuthGateway handleRegister={this.handleRegister} handleLogin={this.handleLogin} handleGeo={this.handleGeo}/>
      }

      <button onClick={this.showState}>State</button>
      <div className="footer">© 2019 RARE BREED COLLECTIVE</div>
    </div>
  }
}


export default App;
