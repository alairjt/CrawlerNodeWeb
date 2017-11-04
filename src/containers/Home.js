import React from 'react';
import AppBarIcon from '../components/AppBar';
import DeputiesList from '../components/deputies/DeputiesList';
import DeputiesForm from '../components/deputies/DeputiesForm';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


const Home = () => (
  <Router>
    <div>
      <AppBarIcon />
      <Route exact path="/" component={DeputiesList}/>
      <Route path="/edit/:id" component={DeputiesForm}/>
    </div>
  </Router>
);
 
export default Home;
