import React, { Component } from 'react';
import Postcamp from '../../api/post/postcamp';


class NewCampaigns extends Component {

  
  render() {

    return (
      <div className="centre">
        <h1 className="title">Créer une nouvelle campagne</h1>
        <Postcamp />
      </div>
    );
  }
}


export default NewCampaigns;
