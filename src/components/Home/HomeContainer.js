import React from 'react'
import BackgroundImage from "../../images/background.jpg"
import AvatarImage from "../../images/avatar.jpg"
import ProjectCard from "./ProjectCard.js"
import { Card, Grid, withStyles, Paper, Typography, Box, Container, CardContent, Avatar, makeStyles, Divider, CardMedia } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  paper: {
    opacity: 1,
    backgroundColor: 'transparent',
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  media: {
    width: '100%',
    paddingTop: '50.25%', // 16:9
  },
  cardMedia: {
    width: '100%',
    paddingTop: '50%', // 16:9
  },
  divider: {
    background: theme.palette.primary.main,
    width: "70%"
  },
  content: {
    flex: '1 0 auto',
  },
  portfolioCards: {
    margin: 16,
    textAlign: 'start',
    width: theme.spacing(46),
    height: theme.spacing(46),
  }
}))

const DarkTextTypography = withStyles({
  root: {
    color: "#263238"
  }
})(Typography);

const HomeContainer = ({ data }) => {
  const classes = useStyles()

  return (
    <div>
      <Container maxWidth="lg">
      <Paper className={classes.paper}>
        <Box display="flex" justifyContent="center" paddingTop="20px">
          <Card className={classes.paper}>
            <Avatar src={AvatarImage} style={{ height: '200px', width: '200px' }} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                <br></br>
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Paper>
      </Container>
      <div style={{paddingTop: "1000px"}}>
        <Container maxWidth="lg">
          <Paper style={{backgroundColor: "#3f4443"}} flat square>
            <Card flat square>
              <CardMedia
                className={classes.media}
                image={BackgroundImage}
              />
            </Card>
            <Box p={2}>
              <Typography color="textSecondary" gutterBottom>
                Hi there! I'm Bryan, a year 2 student from NUS. I major in Computer Engineering and I'm also part of the Engineering Scholars Programme.
                <br></br>
                Welcome to my humble portfolio website! While the site is still a work-in-progress, feel free to look around.
                <br></br>
                <br></br>
                Here's a little bit about me.
                <br></br>
                <br></br>
                I am generally an ambitious person with a passion for technology and learning about the constantly-evolving tech field.
                <br></br>
                I enjoy making a positive impact in people's lives through new technology and innovation. I also find the process of creating new technology fun and fulfilling.  
                <br></br>
                I am a sociable person with an interest in meeting new people. Exchanging knowledge, ideologies and life experiences with others is fascinating to me.
                <br></br>
                In terms of a career goal, I strive to be at the forefront of tech innovations, driving the limits of technology at Silicon Valley by 25.
                <br></br>
                <br></br>
                As of now, my interest lies in full-stack development; from frontend web development with React.js and Vue.js, to setting up backends with GraphQL/Rest APIs, to implementing Microservices with Docker and/or AWS Lambda, I am familiar with all of them.
                <br></br>
                <br></br>
                I spent the first year of my undergraduate life doing various software engineering projects. In this site, I detail some of my internships, projects and hackathon experiences. 
                <br></br>
                <br></br>
                This semester, I am taking Machine Learning and Computer Vision modules that will gain me knowledge and exposure to projects in these fields.
                <br></br>
                Learning deep tech has been a treat for me thus far; on top of my full-stack development projects, I'm hoping to gain more exposure to deep tech through upcoming projects and internships.
                <br></br>
                <br></br>
                Feel free to connect with me using the buttons at the top right corner of the site!
              </Typography>
            </Box>
          </Paper>
          <Paper>
            <Box mt={12} display="flex" justifyContent="center">
              <Divider className={classes.divider} />
            </Box>
            <Box mt={12} mb={6} display="flex" justifyContent="center" id="projects">
              <Typography variant="h1">
                Projects
              </Typography>
            </Box>
            <Grid container justify="space-around">
              {data.projects.map((project) => {
                return <ProjectCard 
                  project={project}
                />
              })}
            </Grid>
            <Box mt={12} display="flex" justifyContent="center">
              <Divider className={classes.divider} />
            </Box>
            <Box mt={12} mb={6} display="flex" justifyContent="center">
              <Typography variant="h1" id="hackathons">
                Hackathons
              </Typography>
            </Box>
            <Grid container justify="space-around">
              {data.hackathons.map((project) => {
                return <ProjectCard 
                  project={project}
                />
              })}
            </Grid>
            <Box mt={12} pb={12} display="flex" justifyContent="center">
              <Divider className={classes.divider} />
            </Box>
          </Paper>
        </Container>
      </div>
    </div>
  )
}

export default HomeContainer
