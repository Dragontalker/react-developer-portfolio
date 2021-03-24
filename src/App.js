import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

// Import components
import { Project, Contact } from './components/Pages';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render() {
    //JSX
    return (
      <div>
        <Navbar />
        <br />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/project' component={Project} />
        <Route path='/contact' component={Contact} />
      </div>
    );
  }
  
}

export default App;