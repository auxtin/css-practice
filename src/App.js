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
import Subtitle from './Components/Subtitle';
import Lightning from './Components/lightning'

import about from './Components/about';
import projects from './Components/projects';


class App extends Component {
  render() {
    return (
      <Router>
        <div id='page-wraper' className="App">
          <Header/>
          <Landing/>
          <hr className='style-eight'></hr>
          <div>
          <br></br>
          </div>
          <Subtitle/>
          <div>
            <p>
              <br/>
              <br/>
              <br/>
            </p>
          </div>
          <Lightning/>
          <div>
            <p>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            </p>
          </div>
          <section id='about'>
            <h2>About Austin....</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id enim justo. Integer ullamcorper eget mi sit amet ultricies. Proin bibendum nunc vitae felis hendrerit, eu auctor arcu auctor. Pellentesque pretium justo leo, et sagittis justo auctor et. Etiam cursus leo ut porta cursus. Phasellus mollis risus non justo euismod, sit amet imperdiet leo sodales. Sed efficitur, turpis ornare consequat rhoncus, enim ante mattis lectus, ut interdum dolor enim sit amet arcu. Nulla id tortor nec lacus accumsan hendrerit at vitae tortor. Etiam at pretium nunc, ac rhoncus arcu. Praesent ligula sem, porttitor rutrum mattis et, eleifend eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
          </section>
          {/* <Route path='/about' component={about} />
          <Route path='/projects' component={projects} /> */}
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
