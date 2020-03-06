import React from 'react';
import axios from 'axios';
import { Paper, List, ListItem, ListItemText } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


export default class CampainProp extends React.Component {
 
  state = {
        persons: []
      }


componentDidMount = () => {
     axios.get(`https://localhost:44391/api/campagne/` + this.props.id)
       .then(res => {
         const persons = res.data;
         this.setState({ persons });
       })
     }


  render() {
    return (
    <Paper>
        <div>
        {this.state.persons.map(person => (
            <List>

                <ListItem>
                    <ListItemText classname="list-items">
                        ID : {person.id}
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        Name : {person.name}
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        Description : {person.description}
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        Category : {person.category.name}
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        Ressource : {person.ressource.id}
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        Createddate : {person.createddate}
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        Startdate : {person.validity.startdate}
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        Enddate : {person.validity.enddate}
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        {person.enabled && <CheckCircleIcon />}
                    </ListItemText>
                </ListItem>
            </List>
        ))}
        </div>
    </Paper>
    )
  }
}
