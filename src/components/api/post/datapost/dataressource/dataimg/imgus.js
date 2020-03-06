import React, { Component } from 'react';
import { Grid, TextField } from '@material-ui/core';

export default class ImgUs extends React.Component {

    
    render() {
        return (
          <div>
                <Grid container spacing={3} justify="center" alignItems="center">
                  <TextField required id="urlus" label="Url"/>
                  <TextField required id="linkus" label="Link"/>
                  <TextField required id="messageus" label="Message"/>
                  <TextField required id="languageus" label="Language"/>
                </Grid>      
            <br /><br /><br />
          </div>
        );
      }
}