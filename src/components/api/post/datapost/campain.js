import React, { Component } from 'react';
import { Grid, TextField } from '@material-ui/core';
import Category from '../datapost/datacategory/category';
import Ressource from '../datapost/dataressource/ressource';
import Validity from '../datapost/datavalidity/validity';

export default class Campain extends React.Component {
 

    render() {
        return (
          <div>
              <Grid container spacing={3} justify="center" alignItems="center">
                <TextField required id="name" label="Name"/>
              </Grid>
                <br /><br /><br />

              <Grid container spacing={3} justify="center" alignItems="center">
                <TextField multiline id="description" label="Description" multiline/>
              </Grid>
                <br /><br /><br />

              <Grid container spacing={3} justify="center" alignItems="center">
                <Category />
              </Grid>
              <br /><br /><br />

              <Grid container spacing={3} justify="center" alignItems="center">
                <Ressource />
              </Grid>
              <br /><br /><br />

              <Grid container spacing={3} justify="center" alignItems="center">
                <Validity />
              </Grid>
              <br /><br /><br />
          </div>
        );
      }
}