import React, { Component } from 'react';
import { Button,Typography,Grid,Card,CardActions,CardContent,CardMedia,Paper  } from '@material-ui/core';
import './home.scss';


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
        <Paper>
        <Grid container spacing={3} justify="center" alignItems="center">
          <h1 className="title">Bienvenue sur le dashboard de marketing in-app</h1>
        </Grid> 

        <br/>
        
        <Grid container spacing={3} justify="center" alignItems="center">
         <Grid item>
          <Card className="card">
          <CardMedia className="card-image" image="img/diffu.png" alt="logo"/>
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
          <Card className="card">
          <CardMedia className="card-image" image="img/visu.png" alt="logo"/>
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
        </Paper>
      </div>
    );
  }
}


export default Dashboard;
