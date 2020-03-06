import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/authentication/login';
import Register from '../components/authentication/register';
import ForgotPassword from '../components/authentication/forgot-password';
import ResetPassword from '../components/authentication/reset-password';
import RequireAuth from '../components/hoc/require-auth';
import AuthenticatedRoutes from './authenticated/';
import Dashboard from '../components/home/dashboard';
import ViewCampaigns from '../components/campaigns/viewcamp/viewcampaigns';
import Logs from '../components/campaigns/viewcamp/logs';
import PropCampaing from '../components/campaigns/viewcamp/propcampain';
import NewCampaigns from '../components/campaigns/newcamp/newcampaigns';

const TopLevelRoutes = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={RequireAuth(AuthenticatedRoutes)} />
    <Route exact path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password/:token" component={ResetPassword} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/newcampaigns" component={NewCampaigns} />
    <Route exact path="/viewcampaigns" component={ViewCampaigns} />    
    <Route path="/viewcampaigns/:id/logs" component={Logs} />
    <Route path="/viewcampaigns/:id/propcampain" component={PropCampaing} />
  </Switch>
);

export default TopLevelRoutes;
