import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom'

import './App.css';
import Login from './Login';
import Workflows from './containers/WorkflowDashboard'
import WorkflowDetail from './containers/workflowDetail'

function App() {
  return (
    <Router>
      <Switch>
      <Route path='/' exact component={Workflows}>
        </Route>
        <Route path='/workflow/:id' component={WorkflowDetail}>
        </Route>
        <Route path='/login' component={Login}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
//Create Workflows Dashboard component
//Create workflows top level json
//Style Dashboard
//create filter component
//
//
//
