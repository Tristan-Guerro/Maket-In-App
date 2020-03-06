import React, { Component } from 'react';
import './viewcampaigns.scss';
import { Button, Paper, Grid } from '@material-ui/core';
import LogList from '../../api/get/log';
import { useParams } from 'react-router';


const Iddisplay = () => {
  const {id}=useParams(); 
  return <h3>{id}</h3>
}

const Logdisplay = () => {
  const {id}=useParams(); 
  return <LogList id={id}/>
}


class Logs extends Component {

  RedirectViewCampaigns = () => {
    document.location.href="http://localhost:8080/viewcampaigns"; 
   }

  
  render() {

    return (
      <div>
        <Paper>
          <Grid container spacing={3} justify="center" alignItems="center">
            <h1 className="title">Statistiques de la campagne n°<Iddisplay /></h1><br /> 
          </Grid>

            <br/>
            
          <Grid> 
            <div>
              <Button className="btn-class" onClick={this.RedirectViewCampaigns}>Retour</Button>
            </div>
          </Grid> 

          <Logdisplay />
        </Paper>
      </div>
    );
  }
}


export default Logs;