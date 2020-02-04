import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { executeStatement } from '../bdd/bddrequest.js';
import './viewcampaigns.scss';

class ViewCampaigns extends Component {

  render() {
    return (
      <div>
        <h1>Visualiser</h1>
        <Button className="btn-class" onClick={connection}>Valider</Button>
      </div>
    );
  }
}


export default ViewCampaigns;