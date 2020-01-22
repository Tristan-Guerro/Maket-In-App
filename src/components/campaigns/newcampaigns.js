import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import NavBar from './NavBar';

class NewCampaigns extends Component {


  render() {

    return (
      <div className="centre">
        <NavBar/>
        <h1>Veuillez remplir le formulaire pour créer une nouvelle campagne</h1>
        <Button className="btn-class">Valider</Button>
      </div>
    );
  }
}


export default NewCampaigns;
