import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class About extends Component {
  render() {
    return (
    <div className="about-body">
      <Grid className="about-grid">
        <Cell col={12}>
        <h4 style={{fontFamily: 'Oxygen'}}>Here is a bit more about me.</h4>
        <p>
        My name is Mohamed and I'm a self-taught developer and tech enthusiast. I first developed my passion for IT when I created my own website with Adobe Dreamweaver, 
        Since then I continued on learning and improving my skills and with a bit of luck and hard work, I managed to get into AWS Re:Start programme where we learnt about Amazon Web services as well as Linux, MySQL and many other technologies. 
        I've always been interested and fascinated in technology how it really impacts our lives.
        </p>
        </Cell>
      </Grid>
    </div>
    );
  }
}

export default About;
