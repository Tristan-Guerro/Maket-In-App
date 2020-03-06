import React, { Component } from 'react';
import { Grid, TextField } from '@material-ui/core';


export default class Category extends React.Component {

    render() {
        return (
          <div>
              <Grid container spacing={3} justify="center" alignItems="center">
                <TextField id="category" label="ID" type="number" InputLabelProps={{shrink: true,}}/>
              </Grid>
              <br /><br /><br />
          </div>
        );
      }
}


// id(list)