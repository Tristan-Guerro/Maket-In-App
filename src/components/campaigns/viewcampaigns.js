import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { executeStatement } from './components/bdd/bddrequest.js';


class ViewCampaigns extends Component {


  render() {

    return (
      <div className>
        <h1>Visualiser</h1>
        <Button className="btn-class">Valider</Button>
      </div>
    );
  }
}


export default ViewCampaigns;