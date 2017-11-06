import React from 'react';
import AppBarIcon from '../components/AppBar';
import DeputiesList from '../components/deputies/DeputiesList';
import DeputyPage from '../components/deputies/DeputyPage';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

/**
 * Home page.
 */
const Home = () => (
  <Router>
    <div>
      <AppBarIcon />
      <Route exact path="/" component={DeputiesList}/>
      <Route path="/edit/:id" component={DeputyPage}/>
    </div>
  </Router>
);
 
export default Home;
