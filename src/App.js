import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Import components
import { Project, Home, Contact } from './components/Pages';

class App extends Component {
  render() {
    //JSX
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/project' component={Project} />
        <Route path='/contact' component={Contact} />
      </div>
    );
  }
  
}

export default App;