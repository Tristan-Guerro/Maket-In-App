import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import './viewcampaigns.scss';
import Paper from '@material-ui/core/Paper';
import CampainList from '../../api/get/campain';

class ViewCampaigns extends Component {

  
  render() {

    return (
      <div>
        <Paper>
          <Grid container spacing={3} justify="center" alignItems="center">
            <h1 className="title">Page de visualisation</h1>
          </Grid> 
            <br/>

         <CampainList />
        </Paper>
      </div>
    );
  }
}


export default ViewCampaigns;