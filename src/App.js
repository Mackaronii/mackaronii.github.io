import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar/MyNavbar';
import Jumbo from './components/Jumbo/Jumbo';
import About from './components/About/About';
import Timeline from './components/Timeline/Timeline';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

const WOW = require('wowjs');

class App extends React.Component {
  constructor() {
    super();
    window.wow = new WOW.WOW();
    window.wow.init();
  }

  render() {
    return (
      <div>
        <MyNavbar/>
        <Jumbo/>
        <About/>
        <Timeline/>
        <Projects/>
        <Footer/>
      </div>
    );
  }
}

export default App;
