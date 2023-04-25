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
            <div className="animation-title">
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
          </div>
            {/*title*/}
            <div className="banner-text">
              <h1 className="animation-title">Cloud Engineer</h1>

              <hr/>
              {/*skills*/}
              <p className="animation-skills">AWS | Linux | Jenkins | Git | Python | Vault | Terraform | Mesos | Kubernates</p>

              <div className="socila-links">
              {/*Linked in*/}
                <a href="https://www.linkedin.com/in/mohamed-noor-80349319a/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin" aria-hidden="true"/>
                </a>
              {/*Github link*/}
                <a href="https://github.com/MohamedNoor" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github" aria-hidden="true"/>
                </a>
                {/*Medium link*/}
                <a href="https://medium.com/@mohamed.noor2106/my-first-3-scripts-6b163dfbfaf4" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-medium" aria-hidden="true"/>
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