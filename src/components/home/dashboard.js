import React, { Component } from 'react';
import './home.scss'


class Dashboard extends Component {
 
   RedirectNewCampaigns = () => {
    document.location.href="http://localhost:8080/newcampaigns"; 
   }

   RedirectViewCampaigns = () => {
    document.location.href="http://localhost:8080/viewcampaigns"; 
   }

  render() {

    return (
      <div className="center-div ">
        <h1>Bienvenue sur le dashboard de marketing in-app</h1><br/>
        <button className="btn-class" onClick={this.RedirectNewCampaigns}>Créer une nouvelle campagne</button>
        <button className="btn-class" onClick={this.RedirectViewCampaigns}>Visualiser une campagne</button>
      </div>
    );
  }
}


export default Dashboard;
