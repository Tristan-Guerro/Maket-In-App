import React, { Component } from 'react';
import { Grid, TextField } from '@material-ui/core';

export default class ImgFr extends React.Component {

    
    render() {
        return (
          <div>
                <Grid container spacing={3} justify="center" alignItems="center">
                  <TextField required id="urlfr" label="Url"/>
                  <TextField required id="linkfr" label="Link"/>
                  <TextField required id="messagefr" label="Message"/>
                  <TextField required id="languagefr" label="Language"/>
                </Grid>               
            <br /><br /><br />
          </div>
        );
      }
}