import React, { Component } from 'react';
import { Button, Card, CardMedia } from '@material-ui/core';
// import { executeStatement } from '../bdd/bddrequest.js';
import './viewcampaigns.scss';


class ViewCampaigns extends Component {

  render() {
    return (
      <div>
        <h1>Visualiser</h1>
        <Card className="card">
          <CardMedia className="card-image" image="img/xlstatlogo.jpg" alt="logo"/>
        </Card>  
        <Button className="btn-class">Valider</Button>
      </div>
    );
  }
}


export default ViewCampaigns;