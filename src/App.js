import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import header from './Components/header'

import about from './Components/about';
import projects from './Components/projects';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <header/>
          <h1>Welcome Page</h1>
          {/* <li>
            <ul>
              <a id='underline' href='/about'>
                About Me
            </a>
            </ul>
            <ul>
              <a id='underline' href='/projects'>
                Projects
            </a>
            </ul>
          </li> */}


          <Route path='/about' component={about} />
          <Route path='/projects' component={projects} />
          <footer />
        </div>
      </Router>
    );
  }
}

export default App;
