import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
/*Tabs and Tab are imported form React mdl library*/

class Projects extends Component {
  constructor (props) {
    super(props);
    this.state = {activeTab: 0};
    /*initail tab will 0 so it start at the first one which is HTML/CSS*/
  }
  /*the method for toggleing between catagories and what are shown is below*/
  toggleCategories() {
    if (this.state.activeTab===0) {
      return (
        /*HTML and CSS projects*/
        /*project 1 Orginal Portfolio site*/
      <div className="projects-grid">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', background: 'url(https://t4.ftcdn.net/jpg/00/79/35/79/240_F_79357980_pV8vjOF7YPG1J6E31z7udnJDyjQxgulM.jpg) center / cover'}}>
            Orginal Portfolio site
          </CardTitle>
          <CardText>
            A simple static Portfolio page, where it is built with HTML and CSS
          </CardText>
          <CardActions border>
            <Button colored>
              <a href="https://github.com/MohamedNoor/portfolio" rel="noopener noreferrer" target="_blank">Github</a>
            </Button>
            <Button colored>
              <a href="https://mohamednoor.github.io/portfolio/" rel="noopener noreferrer" target="_blank">Live Demo</a>
            </Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card>
      </div>

      )
      /*different tabs are below for javascript and React*/
    } else if (this.state.activeTab===1) {
      return (
        /*Javascript Projects*/
        /*project 1 Memory Game*/
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://pbs.twimg.com/media/DZ6ayRWWkAAOfyx.jpg) center / cover'}}>
              Memory Game
            </CardTitle>
            <CardText>
              A Memory Game is played where the Functionality of the game is created using javascript.
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/MohamedNoor/fend-project-memory-game" rel="noopener noreferrer" target="_blank">Github</a>
              </Button>
              <Button colored>
                <a href="https://mohamednoor.github.io/fend-project-memory-game/" rel="noopener noreferrer" target="_blank">Live Demo</a>
              </Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>

            {/*project2 Classic Arcade Game*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/639/1*wyq4YUbU0X93njpmDUEG0A.png) center / cover'}}>
              Classic Arcade Game
            </CardTitle>
            <CardText>
              The Functionality of the Arcade game is created using JavaScript..
            </CardText>
            <CardActions border>
            {/*github link*/}
              <Button colored>
                <a href="https://github.com/MohamedNoor/classic-arcade-game-clone" rel="noopener noreferrer" target="_blank">Github</a>
              </Button>
              {/*live demo link*/}
              <Button colored>
                <a href="https://mohamednoor.github.io/classic-arcade-game-clone/" rel="noopener noreferrer" target="_blank">Live Demo</a>
              </Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>
        </div>
      )
    }
    else if (this.state.activeTab===2) {
      return (
        /*React Projects*/
        /*project 1 Weather App*/
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://wi-images.condecdn.net/image/doEYpG6Xd87/crop/2040/f/weather.jpg) center / cover'}}>
              React Weather App
            </CardTitle>
            <CardText>
              A weather app was created where you enter your city and country, an API call is then made and the relevent information about the weather is fetched and displayed.
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://www.google.co.uk" rel="noopener noreferrer" target="_blank">Github</a>
              </Button>
              <Button colored>
                <a href="https://mohamednoor.github.io/React-Weather/" rel="noopener noreferrer" target="_blank">Live Demo</a>
              </Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>
            {/*project 2 Portfolio site*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDI5Tb9h2dpRFJ8K1SF5L0M-71dmJRQF7ekh0yNz-VGPQLxcA8GA) center / cover'}}>
              React Portfolio site
            </CardTitle>
            <CardText>
              (Currently On) A portfolio site was created with react router that shows landing page and other sections required for a portfolio.
            </CardText>
            <CardActions border>
            {/*button links for github and live demo*/}
              <Button colored>
                <a href="https://github.com/MohamedNoor/React-Portfolio" rel="noopener noreferrer" target="_blank">Github</a>
              </Button>
              {/*<Button colored>
                Live Demo
              </Button>*/}
            </CardActions>
            {/*share icon*/}
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab===3) {
      return (
        <div className="project-grid">
          {/*Python Projects 1 Todo app*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'white', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwyxYpsegx_YREa3rCNjXNmn4a1_9Is07z8uMqLiA_g0O7-ak&s)'}}>
              Todo App
            </CardTitle>
            <CardText>
              A Todo app built with django.
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/MohamedNoor/Todo-App">Github</a>
              </Button>
            </CardActions>
          </Card>
        </div>
      )
    }
  }

  render() {
    /*tabs changes depending on what tab is selected*/
    return (
      <div className="category-tabs">
      <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
        <Tab>HTML/CSS</Tab>
        <Tab>JavaScript</Tab>
        <Tab>React</Tab>
        <Tab>Python</Tab>
      </Tabs>
      {/*once the tab is selected it is put into a grid styling*/}
      <Grid>
        <Cell col={12}>
          <div className="content">
            {this.toggleCategories()}
          </div>
        </Cell>
      </Grid>

      </div>
    );
  }
}

export default Projects;
