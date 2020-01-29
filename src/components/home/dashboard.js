import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './home.scss';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


class Dashboard extends Component {
 
   RedirectNewCampaigns = () => {
    document.location.href="http://localhost:8080/newcampaigns"; 
   }

   RedirectViewCampaigns = () => {
    document.location.href="http://localhost:8080/viewcampaigns"; 
   }

  render() {

    return (
      <div>
        <Grid container spacing={3} justify="center" alignItems="center">
          <h1>Bienvenue sur le dashboard de marketing in-app</h1>
        </Grid> 

        <br/>
        
        <Grid container spacing={3} justify="center" alignItems="center">
         <Grid item>
          <Card>
          <CardMedia image={'https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg'}  title="Contemplative Reptile"/>
             <CardContent>
                <Typography variant="h5" component="h2">
                   Créer une nouvelle campagne
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button className="btn-class" onClick={this.RedirectNewCampaigns}>Créer !</Button>
              </CardActions>
           </Card>    
          </Grid>
          
          <Grid item>
          <Card>
             <CardContent>
                <Typography variant="h5" component="h2">
                   Visualiser une campagne
                  <br />
                </Typography>
              </CardContent>
              <CardActions justify="center" alignItems="center">
              <Button className="btn-class" onClick={this.RedirectViewCampaigns}>Visualiser !</Button>
              </CardActions>
           </Card>
          </Grid>
        </Grid> 
      </div>
    );
  }
}


export default Dashboard;
