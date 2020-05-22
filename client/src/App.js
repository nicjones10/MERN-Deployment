import React from 'react';
import './App.css';
import {Router, Redirect} from '@reach/router';
import CrewList from './views/CrewList';
import NewPirate from './views/NewPirate';
import ShowPirate from './views/ShowPirate';

function App() {
  return (
    <div className="App">
      <Router>
        <Redirect from='/' to='/pirates'/>
        <CrewList path='/pirates'/>
        <NewPirate path='/pirate/new'/>
        <ShowPirate path='/pirate/:id'/>
      </Router>
    </div>
  );
}

export default App;