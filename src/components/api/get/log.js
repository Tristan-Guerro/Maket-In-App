import React from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';


export default class LogList extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      total: {
        view: 0,
        action: 0,
        download: 0,
        click: 0
      },
      persons: [],
      saisie: 0
    }
  }


  componentDidMount = () => {
     axios.get(`https://localhost:44391/api/log/` + this.props.id)
       .then(res => {
         const persons = res.data;
        
        const total = {
          action: 0,
          view: 0,
          download: 0,
          click: 0
        }

        persons.forEach(person => {
          total.action += person.action,
          total.view += person.view,
          total.download += person.download,
          total.click += person.click
        });
        this.setState({  persons,total });
       })
    }
    

  render() {

    return (
      <Paper>
        <TableContainer>
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Action</TableCell>
                <TableCell align="right">Nb_Downloaded</TableCell>
                <TableCell align="right">Nb_Viewed</TableCell>
                <TableCell align="right">Nb_Click</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
                <TableRow >
                  <TableCell align="right">{this.state.total.action}</TableCell>
                  <TableCell align="right">{this.state.total.download}</TableCell>
                  <TableCell align="right">{this.state.total.view}</TableCell>
                  <TableCell align="right">{this.state.total.click}</TableCell>
                </TableRow>
            </TableBody>
          </Table>  
        </TableContainer>
      </Paper>
    )
  }
}
