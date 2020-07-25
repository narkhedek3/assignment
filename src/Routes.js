import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import UserDetails from './pages/UserDetails';

const Routes = () => {
  return (
    <div className="container rental-app-container">
      <Switch>
        <Route path='/Home'>
          <Home />
        </Route>
        <Route path='/user/:id'>
          <UserDetails />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );

}

export default Routes;