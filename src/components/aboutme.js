import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class About extends Component {
  render() {
    return (
    <div className="about-body">
      <Grid className="about-grid">
        <Cell col={12}>
        <h4 style={{fontFamily: 'Oxygen'}}>Here is a bit more about me.</h4>
        <p>My name is Mohamed and i'm a self-taught developer. I developed a passion for web development when i first created my own website with Adobe Dreamweaver,
        it wasn't pretty and i spent days not knowing what to do but at the end i had a some what of a working website. Since then i started learning the basics and enjoying getting the grip of HTML, CSS and JavaScript, I'm currently in the process of learning and understanding React, my aim for the not so distant future is to starting learning NodeJs and learn how backend and frontend interact with each other to make a fully functional web application.</p>
        </Cell>
      </Grid>
    </div>
    );
  }
}

export default About;
