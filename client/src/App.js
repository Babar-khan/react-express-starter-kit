import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor()  {
    super();
    this.state = {
      customers: []
    }
  } //constructor

componentDidMount() {
  fetch("/somedata")
    .then(function (response) {
        return response.json();
        // console.log(response);
        // console.log(response.json());
    })
    .then((customers) => {
      this.setState({ customers });
      // console.log(this.state.customers);
  })
} //componentDidMount

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> React Express App Starter Kit </h1>
        </header>
        <p className="App-intro">
          
          { this.state.customers.map(customer => (
              <li key={ customer.id }> { customer.name } </li>
          )) }
          
        </p>
      </div>
    );
  }
}

export default App;
