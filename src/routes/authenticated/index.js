import React from 'react';
import { Route, Switch } from 'react-router-dom';


const AuthenticatedRoutes = () => (
  <Switch>
    <Route exact path="/register" component={() => <div>Welcome to the register</div>} />
  </Switch>
);

export default AuthenticatedRoutes;
