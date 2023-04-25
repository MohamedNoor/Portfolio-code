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
        Hi my name is Mohamed :), I'm a self-taught developer that started my coding journey by building simple websites with HTML for fun. As I grew more passionate about the craft, I transitioned to learning React and building my personal website with it. However, building websites was only half the battle. I also wanted to showcase my work to others and this led me to explore different hosting options.<br></br>     
        <br></br>
        It was during my search for a suitable hosting platform that I stumbled upon AWS. I found myself intrigued by the vast array of cloud services they offered and their potential applications. Motivated to learn more, I enrolled in the AWS re/Start program, where I gained valuable knowledge and experience in cloud computing. This eventually led me to land a position as a cloud engineer for the platform team at Sainsbury's.<br></br>
        <br></br>
        One thing that has always driven me is my curiosity of figuring things out I really the process of problem-solving. This drive has led me to continuously expand my skill set and deepen my understanding of different technologies. As a result, I'm constantly pushing myself to grow and improve.
        </p>
        </Cell>
      </Grid>
    </div>
    );
  }
}

export default About;
