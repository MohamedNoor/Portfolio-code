import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
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
            <h5>Email</h5>
            <p>Mohamed.Noor2106@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: "75%"}}/>
          </Cell>

          <Cell className="resume-right-col" col={8}>
          {/*Experience Section*/}
          <h2>Experience</h2>
          
          <Experience
            startYear={"March-2020"}
            endYear={"Current"}
            jobName={"Sainsbury's"}
            jobTitle={"Cloud Engineer"}
            jobDescription={ 
            <p>
            - Managed the infrastructure of the organizations cloud environment using CloudFormation, Ansible, and Vault to create resources, deploy applications, and manage secrets.<br></br>
            - Conducted cost analysis on the AWS environment, upgraded infrastructure, and automated procedures to improve efficiency.<br></br>
            - Collaborated with developers to resolve issues during application deployment on Mesos, ensured version control, and conducted code reviews.<br></br>
            - Created implementation documentation to help support teams and developers utilize the cloud environment effectively.<br></br>
            - Managed incidents and participated in on-call rotation to ensure the smooth operation of the cloud infrastructure.<br></br>
            - Set up alerts and monitors on services to proactively identify and address potential issues, and responded to alerts in production and lower environments.<br></br>
            </p>
          }
            location={"London/Remote"}
          />

          <Experience
            startYear={"Nov-2019"}
            endYear={"March-2020"}
            jobName={"AWS Re:Start"}
            jobTitle={"Cloud Engineer"}
            jobDescription={"AWS re/Start is a skills development and job training program that prepares learners for careers in the cloud. The program’s mission is to build local talent by providing accessible AWS Cloud skills development and job opportunities to underserved populations."}
            location={"London"}
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
          

          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
