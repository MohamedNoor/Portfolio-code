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
            jobName={"Sainsbury's - Cloud Engineer"}
            jobDescription={ 
            <p>
            - Ensuring platform stability at Sainsbury's, focusing on performance and availability.<br></br>
            - Deployed/managed AWS resources to maintain highly available and scalable infrastructure, leveraging services such as EC2, S3 and RDS.<br></br>
            - Automated infrastructure deployment using CloudFormation/Terraform.<br></br>
            - Utilized Ansible for configuration management, system administration tasks.<br></br>
            - Supported developers on jenkins pipelines, enabling efficient software delivery.<br></br>
            - Leveraged Datadog for monitoring and alerting, established dashboards and implemented alerts to identify and address performance bottlenecks and system issues.<br></br>
            - Implemented Vault for secure credential management. Assisting developers in debugging and troubleshooting Vault-related issues.<br></br>
            - Utilized the ELK Stack for log management and analysis.<br></br>
            - Troubleshoot complex issues across the platform.<br></br>
            - Actively participated in knowledge sharing and collaborated with cross-functional teams to improve platform stability and implement best practices.<br></br>
            </p>
          }
            location={"London/Remote"}
          />

          <Experience
            startYear={"Nov-2019"}
            endYear={"March-2020"}
            jobName={"AWS Re:Start - Trainee Engineer"}
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
          <hr style={{borderTop: '3px solid #e22947'}}/>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;