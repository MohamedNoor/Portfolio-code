import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
/*props for the starting and ending of the jobs history as well as the job name and describtion */
class Experience extends Component {
  render () {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop: '8px'}}> {this.props.jobName}</h4>
          <p>{this.props.jobDescription}</p>
          <p>{this.props.location}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;
