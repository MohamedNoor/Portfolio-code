import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';
/*progress bar for the skill section in experience tab*/
class Skills extends Component {
  render () {
    return(
      <Grid>
        <Cell col={12}>
          <div style={{display: 'flex'}}>
          {this.props.skill} <ProgressBar style={{margin:'auto', width: '100%'}} progress={this.props.progress}/>
          </div>
        </Cell>
      </Grid>
    )
  }
}

export default Skills;
