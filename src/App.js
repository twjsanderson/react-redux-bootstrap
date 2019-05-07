import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Nav className="navbar text-white mb-2 bg-dark">
          <h1>Hello</h1>
        </Nav>

        <section id="testimonials" class="p-4 bg-dark text-white">
          <div class="container">
            <h2 class="text-center">Testimonials</h2>
          </div>
        </section>
        </div>
    );
  }
}

export default App;
