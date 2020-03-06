import React, { Component } from 'react';
import { Button, Paper, Grid } from '@material-ui/core';
import axios from 'axios';
import User from '../post/datapost/user';
import Campain from '../post/datapost/campain';

let startdate;
let enddate;
var data;

class Postcamp extends Component {



  postjs = () => {

    alert(startdate);
    // axios.post('https://localhost:44391/api/campagne', startdate, {
    // headers: {'content-type': 'application/json', }
     };


  render() {
    
    return (
      <div>
        <Paper>
          <Grid container spacing={3} justify="center" alignItems="center">
            <User />
          </Grid> 
           
          <Grid container spacing={3} justify="center" alignItems="center">
            <Campain />
          </Grid> 

          <Grid>
            <Button className="btn-class" onClick={this.controle}>Valider</Button>
            <Button className="btn-class" onClick={this.postjs}>test</Button>
          </Grid>
        </Paper>
      </div>
    );
  }
}


export default Postcamp;