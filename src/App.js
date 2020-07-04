import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import backgroundImage from './assets/pattern.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/layout/Dashboard';
import Pokemon from './components/Pokemon/Pokemon';

function App() {
  return (
    <Router>
      <div className="App" style={{ background: `url(${backgroundImage})` }}>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
