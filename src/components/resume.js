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
            <p>London</p>
            <h5>Phone</h5>
            <p>07939040441</p>
            <h5>Email</h5>
            <p>Mohamed.Noor2106@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: "75%"}}/>
          </Cell>

          <Cell className="resume-right-col" col={8}>
          {/*Experience Section*/}
          <h2>Experience</h2>

          <Experience
            startYear={"Nov-2019"}
            endYear={"Current"}
            jobName={"AWS Re:Start"}
            jobTitle={"Cloud Engineer"}
            jobDescription={"AWS re/Start is a skills development and job training program that prepares learners for careers in the cloud. The program’s mission is to build local talent by providing accessible AWS Cloud skills development and job opportunities to underserved populations."}
            location={"London"}
          />

          <Experience
            startYear={"Nov-2017"}
            endYear={"June-2019"}
            jobName={"Sainsbury's"}
            jobTitle={"Store Colleague"}
            jobDescription={" Assist with inventory counts and placement of new products, including new in-store or window displays. Restock items that are running low and maintain proper display appearances"}
            location={"London"}
          />

          <Experience
            startYear={"Sept-2017"}
            endYear={"Nov-2017"}
            jobName={"Fujitsu"}
            jobTitle={"First Line IT support (3-Month-Contract)"}
            jobDescription={"Provide first line I.T support (Fix) to end users. Interpret customer requirements and provide advice and support on potential solutions to resolve I.T related issues as they arise."}
            location={"Bracknell"}
          />
          <hr style={{borderTop: '3px solid #e22947'}}/>

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
          
          {/*Skills section*/}
          <h2>Skills</h2>

          <Skills
            skill="Python"
            progress={70}
          />
          <Skills
            skill="Linux"
            progress={50}
          />
          <Skills
            skill="MySQL"
            progress={50}
          />
          <Skills
            skill="AWS"
            progress={50}
          />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
