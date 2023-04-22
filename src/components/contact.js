import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contacts extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">

          <Cell col={12}>
            <div className="contact-list">
              <p className="details">If you want to get in contact with me please dont hestitate to Email me.</p>
              <hr/>
            {/*list imported form list library form mdi*/}
            <List>
              {/*Email icon for contact page*/}
              <ListItem>
                <ListItemContent className="ListItemContent">
                <i className="fa fa-envelope" aria-hidden="true"/>
                Mohamed.Noor2106@gmail.com
                </ListItemContent>
              </ListItem>
              {/*github icon for contact page*/}
              <ListItem>
                <ListItemContent className="ListItemContent">
                <i className="fa fa-map-marker" aria-hidden="true"/>
                Based in London
                </ListItemContent>
              </ListItem>
            </List>
            </div>

          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contacts;
