import React, { Component } from 'react';
import { Grid, TextField } from '@material-ui/core';
import Imgfr from '../dataressource/dataimg/imgfr';
import Imgus from '../dataressource/dataimg/imgus';


export default class Ressource extends React.Component {

    
    render() {
        return (
          <div>
              <Grid container spacing={3} justify="center" alignItems="center">
                <TextField required id="showed" label="Showed"/>
              </Grid>
                  <br /><br /><br />

              <Grid container spacing={3} justify="center" alignItems="center">
                <Imgfr />
              </Grid>
                <br /><br /><br />

              <Grid container spacing={3} justify="center" alignItems="center">
                <Imgus />
              </Grid>
              <br /><br /><br />
          </div>
        );
      }
}