import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import header from './Components/header';
import footer from './Components/footer';

import about from './Components/about';
import projects from './Components/projects';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <header/>
          <h1>Welcome Page</h1>
          <ul>
            <li>
              <a id='underline' href='/about'>
                About Me
            </a>
            </li>
            <li>
              <a id='underline' href='/projects'>
                Projects
            </a>
            </li>
          </ul>
          <Route path='/about' component={about} />
          <Route path='/projects' component={projects} />
          <footer/>
        </div>
      </Router>
    );
  }
}

export default App;
