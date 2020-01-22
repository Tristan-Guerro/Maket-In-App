import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/authentication/login';
import Register from '../components/authentication/register';
import ForgotPassword from '../components/authentication/forgot-password';
import ResetPassword from '../components/authentication/reset-password';
import RequireAuth from '../components/hoc/require-auth';
import AuthenticatedRoutes from './authenticated/';
import Dashboard from '../components/home/dashboard';
import NewCampaigns from '../components/campaigns/newcampaigns';
import ViewCampaigns from '../components/campaigns/viewcampaigns';

const TopLevelRoutes = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={RequireAuth(AuthenticatedRoutes)} />
    <Route exact path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password/:token" component={ResetPassword} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/newcampaigns" component={NewCampaigns} />
    <Route exact path="/viewcampaigns" component={ViewCampaigns} />
  </Switch>
);

export default TopLevelRoutes;
