import React, { Component } from 'react';
import { Grid, TextField } from '@material-ui/core';

export default class User extends React.Component {

    
    render() {
        return (
          <div>
                <Grid container spacing={3} justify="center" alignItems="center">
                    <TextField required id="username" label="Username"/>
                </Grid>
                    <br /><br /><br />
                    
                <Grid container spacing={3} justify="center" alignItems="center">
                    <TextField required id="password" label="Password" type="password" autoComplete="current-password"/>
                </Grid>
            <br /><br /><br />
          </div>
        );
      }
}