import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
//import '../img';
import image from '../img/AWS-diagram-my-websites.png';
import cicd from '../img/CICD.png';

class Projects extends Component {
  render() {
    return (
        <Grid className="contact-grid">

          <Cell col={12}>
            <div className="contact-list">
              <h3 className="details">How I Built this website</h3>
              <hr/>
            </div>
          </Cell>
          <Cell col={12}>
            <img src={image} alt="AWS-setup" />
            <p>This website is built using React and utilizes the react-mdl library for its components. The infrastructure is provisioned with Terraform, which sets up an environment on the cloud. The application is hosted on an EC2 instance, which is automatically scaled using an autoscaling group to handle varying traffic demands. To ensure optimal performance and distribution of traffic, a load balancer is placed in front of the EC2 instance, effectively managing the load levels to ensure a seamless user experience</p>
          </Cell>

          <Cell col={12}>
            <img src={cicd} alt="CICD-setup" />
            <p>Whenever changes are made to the application repository, a GitHub Actions job is triggered. This job is responsible for building the Docker image for the application and pushing it to Docker Hub. By automating this process, any updates or modifications to the application are seamlessly reflected in the Docker image, ensuring that the latest version of the application is readily available on Docker Hub for deployment or distribution purposes.</p>
                <hr/>
          </Cell> 

        </Grid>
    );
  }
}

export default Projects;
