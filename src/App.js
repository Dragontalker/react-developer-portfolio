import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

// Import components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

class App extends Component {
  render() {
    //JSX
    return (
      <div>
        <Navbar />
        <br />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
      </div>
    );
  }
  
}

export default App;