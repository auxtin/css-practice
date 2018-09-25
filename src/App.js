import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from './Components/header';
import Footer from './Components/footer';
import Landing from './Components/Landing';

import about from './Components/about';
import projects from './Components/projects';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Landing/>
          <hr className='style-eight'></hr>

          {/* <Route path='/about' component={about} />
          <Route path='/projects' component={projects} /> */}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
