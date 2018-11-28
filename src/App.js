import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// Screen Components
import Home from './components/Home';
import Buses from './components/Buses';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/buses">Bus</Link></li>
          </ul>
          
          <Route exact path="/"component={Home} />
          <Route path="/buses" component={Buses} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;