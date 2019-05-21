import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Avatar from 'avataaars';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <Avatar
                avatarStyle='Circle'
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

            <h2 style={{paddingTop: '2em'}}>Mohamed Noor</h2>
            <h4 style={{color: 'grey'}}>Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: "75%"}}/>
            <h5>Location</h5>
            <p>West London</p>
            <h5>Phone</h5>
            <p>07939040441</p>
            <h5>Email</h5>
            <p>Mohamed.Noor2106@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: "75%"}}/>
          </Cell>

          <Cell className="resume-right-col" col={8}>
          <h2>Education</h2>
          {/*University */}
          <Education
            startYear={2012}
            endYear={2015}
            schoolName={"Kingston University"}
            schoolDescription={"Bsc Mechanical Engineering"}
            schoolGrades={"2:1"}
          />
          {/*A levels*/}
          <Education
            startYear={2010}
            endYear={2012}
            schoolName={"Harlington High School"}
            schoolDescription={"3 A-levels"}
          />
          <hr style={{borderTop: '3px solid #e22947'}}/>
          {/*Experience Section*/}
          <h2>Experience</h2>

          <Experience
            startYear={"Nov-2017"}
            endYear={"Current"}
            jobName={"Self-Studying"}
            jobDescription={"Teaching my self to code and learning new Languages like javascript Html and Css"}
          />

          <Experience
            startYear={"Jan-2018"}
            endYear={"Current"}
            jobName={"Taaj Services"}
            jobDescription={"IT-Support"}
            location={"London"}
          />

          <Experience
            startYear={"Oct-2017"}
            endYear={"Jan-2018"}
            jobName={"Fujitsu"}
            jobDescription={"First Line IT support (3-Month-Contract)"}
            location={"Bracknell"}
          />
          <hr style={{borderTop: '3px solid #e22947'}}/>
          {/*Skills section*/}
          <h2>Skills</h2>

          <Skills
            skill="JavaScript"
            progress={50}
          />
          <Skills
            skill="HTML"
            progress={70}
          />
          <Skills
            skill="CSS"
            progress={50}
          />
          <Skills
            skill="React"
            progress={30}
          />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
