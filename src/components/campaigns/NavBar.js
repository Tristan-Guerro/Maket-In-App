import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

class NavBar extends React.Component {
   
  render() {
  return(
            <AppBar position="static">
                <Typography variant="title" color="inherit">
                    React
                </Typography>
            </AppBar>
    );
}
}
export default NavBar;