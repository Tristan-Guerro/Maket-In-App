import React from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Link } from 'react-router-dom';


export default class CampainList extends React.Component {
 
 state = {
       persons: []
     }


   controle = () => {
     axios.get(`https://localhost:44391/api/campagne/-1`)
       .then(res => {
         const persons = res.data;
         this.setState({ persons });
       })
     }


  render() {
    return (
      <Paper>
        <div className="button-table">
      <Button className="btn-class" onClick={this.controle}>Visualiser !</Button>
       </div>
      <TableContainer>
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Campagne ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Enabled</TableCell>
            <TableCell align="center">Link</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
        {this.state.persons.map(person => (

            <TableRow >
              <TableCell align="right">{person.id}</TableCell>
              <TableCell align="right">{person.name}</TableCell>
              <TableCell align="right">
                  {person.enabled && <CheckCircleIcon />}
              </TableCell>
              <TableCell align="center">
                  <Button className="btn-class"><Link to={"/viewcampaigns/" + person.id + "/propcampain" }>Details</Link></Button>
                  <Button className="btn-class"><Link to={"/viewcampaigns/" + person.id + "/logs" }>Log</Link></Button>
              </TableCell>
            </TableRow>
         ))}
        </TableBody>
      </Table>  
      </TableContainer>
      </Paper>
    )
  }
}
