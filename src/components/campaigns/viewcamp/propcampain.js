import React, { Component } from 'react';
import './viewcampaigns.scss';
import { Button, Paper, Grid } from '@material-ui/core';
import CampainProp from '../../api/get/propcampain';
import { useParams } from 'react-router';


const Iddisplay = () => {
  const {id}=useParams(); 
  return <h3>{id}</h3>
}

const Campaindisplay = () => {
  const {id}=useParams(); 
  return <CampainProp id={id}/>
}


class PropCampaing extends Component {

  RedirectViewCampaigns = () => {
    document.location.href="http://localhost:8080/viewcampaigns"; 
   }

  
  render() {

    return (
      <div>
        <Paper>
          <Grid container spacing={3} justify="center" alignItems="center">
            <h1 className="title">Propriétés de la campagne n°<Iddisplay /></h1><br /> 
          </Grid> 
            
            <br/>
          
          <Grid>
            <div>
              <Button className="btn-class" onClick={this.RedirectViewCampaigns}>Retour</Button>
            </div>
          </Grid> 

          <Campaindisplay />
        </Paper>
      </div>
    );
  }
}


export default PropCampaing;