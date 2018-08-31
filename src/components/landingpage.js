import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Avatar from 'avataaars';
//grid system is being imported from react mdl library
class Landing extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
              <Avatar
                avatarStyle='Transparent'
                topType='ShortHairDreads01'
                accessoriesType='Blank'
                hairColor='Black'
                facialHairType='BeardLight'
                facialHairColor='Black'
                clotheType='Hoodie'
                clotheColor='Black'
                eyeType='Default'
                eyebrowType='Default'
                mouthType='Smile'
                skinColor='DarkBrown'
              />
            {/*title*/}
            <div className="banner-text">
              <h1>Front-End Developer</h1>

              <hr/>
              {/*skills*/}
              <p>HTML | CSS | Vanilla Js | React Native | React Router </p>

              <div className="socila-links">
              {/*Linked in*/}
                <a href="" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin" aria-hidden="true"/>
                </a>
              {/*Github link*/}
                <a href="https://github.com/MohamedNoor" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github" aria-hidden="true"/>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
