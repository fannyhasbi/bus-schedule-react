import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// Screen Components
import Home from './components/Home';

import Buses from './components/bus/Buses';
import AddBus from './components/bus/AddBus';

import Departure from './components/departure/Departure';
import AddDeparture from './components/departure/AddDeparture';

import Arrival from './components/arrival/Arrival';
import AddArrival from './components/arrival/AddArrival';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/buses">Bus</Link></li>
            <li><Link to="/departure">Keberangkatan</Link></li>
            <li><Link to="/arrival">Kedatangan</Link></li>
          </ul>
          
          <Route exact path="/"component={Home} />
          <Route path="/buses" component={Buses} />
          <Route path="/add-bus" component={AddBus} />
          <Route path="/departure" component={Departure} />
          <Route path="/add-departure" component={AddDeparture} />
          <Route path="/arrival" component={Arrival} />
          <Route path="/add-arrival" component={AddArrival} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;