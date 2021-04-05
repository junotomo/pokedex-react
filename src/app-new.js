import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

//import './App.scss';
import {NavBar} from './components/Navbar';
import Dashboard from './components/Dashboard';

import Pokemon from './components/PokemonInfo';

const App = () =>{
    return (
      <Router>
        <div className="App" >
          <NavBar />
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
