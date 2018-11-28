import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// Screen Components
import Home from './components/Home';

import Buses from './components/Buses';
import AddBus from './components/AddBus';

import Keberangkatan from './components/Keberangkatan';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/buses">Bus</Link></li>
            <li><Link to="/departure">Keberangkatan</Link></li>
          </ul>
          
          <Route exact path="/"component={Home} />
          <Route path="/buses" component={Buses} />
          <Route path="/add-bus" component={AddBus} />
          <Route path="/departure" component={Keberangkatan} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;