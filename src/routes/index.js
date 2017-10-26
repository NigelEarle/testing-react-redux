import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import {
  Home,
  Profile,
  Login,
} from '../components';

const InstaCloneRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/profile" component={Profile}/>
    </div>
  </Router>
);

export default InstaCloneRouter;