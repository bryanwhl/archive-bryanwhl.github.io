import React from 'react'
import BackgroundImage from "../../images/background2.jpg"
import PetSocialImage from "../../images/pet-social-image.png"
import PetSocialLogo from "../../images/pet-social-logo.jpg"
import DSOLogo from "../../images/dso-logo.png"
import ProjectCard from "./ProjectCard.js"
import { Card, Grid, withStyles, Paper, Typography, Box, Container, makeStyles, Divider, CardMedia } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
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

const HomeContainer = () => {
  const classes = useStyles()

  let projects = [
    {
      projectName: "Pet Social (Orbital 2021)",
      projectScreenshot: PetSocialLogo,
      projectDescription: "Pet Social is a social media platform built for <u>pet owners</u> to congregate and exchange information about owning a pet. It aims to eventually centralize and digitize every needs of a pet owner for their convenience.",
      projectStack: "React (Material-UI Library), Node.js, Express.js, MongoDB, GraphQL, Apollo Client"
    },
    {
      projectName: "DSO Search Engine",
      projectScreenshot: DSOLogo,
      projectDescription: "Full-stack developer internship project for DSO. Worked on creating a Search Engine UI in vue.js a microservice with video and audio transcription service.",
      projectStack: "Vue.js (Vuetify UI Library), Node.js, Express.js, Java Backend, ElasticSearch Database, Docker, Prometheus, Grafana"
    }
  ]

  return (
    <div>
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
              Welcome to my humble portfolio website! This site is still a work-in-progress, but feel free to look around.
            </Typography>
          </Box>
          <Box mt={12} display="flex" justifyContent="center">
            <Divider className={classes.divider} />
          </Box>
          <Box mt={12} mb={6} display="flex" justifyContent="center">
            <Typography variant="h1">
              Projects
            </Typography>
          </Box>
          <Grid container justify="space-around">
            {projects.map((project) => {
              return <ProjectCard 
                projectName={project.projectName} 
                projectScreenshot={project.projectScreenshot} 
                projectDescription={project.projectDescription} 
                projectStack={project.projectStack} 
              />
            })}
          </Grid>
          <Box mt={12} mb={6} display="flex" justifyContent="center">
            <Typography variant="h1">
              Projects
            </Typography>
          </Box>
        </Paper>
      </Container>
    </div>
  )
}

export default HomeContainer
