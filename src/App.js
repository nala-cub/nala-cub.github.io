import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './Components/Header/Header';
import People from './Pages/People/People';
import HomePage from './Pages/HomePage/HomePage';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/people">
        <People />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </Router>
);

export default App;
