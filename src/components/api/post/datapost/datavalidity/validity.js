import React, { Component } from 'react';
import { Grid, TextField } from '@material-ui/core';

export default class Validity extends React.Component {

    render() {
        return (
          <div>
                <Grid container spacing={3} justify="center" alignItems="center">
                  <TextField id="startdate" label="Startdate" type="date" InputLabelProps={{shrink: true,}}/>
                </Grid>
            <br /><br /><br />

            <Grid container spacing={3} justify="center" alignItems="center">
                  <TextField id="enddate" label="Enddate" type="date" InputLabelProps={{shrink: true,}}/>
                </Grid>
            <br /><br /><br />
          </div>
        );
      }
}