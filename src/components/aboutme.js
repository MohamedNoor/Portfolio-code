import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class About extends Component {
  render() {
    return (
    <div className="about-body">
      <Grid className="about-grid">
        <Cell col={12}>
        <h4 style={{fontFamily: 'Oxygen'}}>Here is a bit more about me.</h4>
        <p>My name is Mohamed and I'm a self-taught developer and tech enthusiast. I developed a passion for web development when I first created my own website with Adobe Dreamweaver and
          have always been interested in how techonogly inpacts our lives.</p>
        </Cell>
      </Grid>
    </div>
    );
  }
}

export default About;
