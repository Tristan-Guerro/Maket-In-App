import React, { Component } from 'react';
import Button from '@material-ui/core/Button'

class NewCampaigns extends Component {

  
  render() {

    return (
      <div className="centre">
        <h1>Veuillez remplir le formulaire pour créer une nouvelle campagne</h1>
        <Button className="btn-class" onClick={executeStatement}>Valider</Button>
      </div>
    );
  }
}


export default NewCampaigns;
