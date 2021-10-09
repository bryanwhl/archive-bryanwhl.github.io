import React from 'react'
import BackgroundImage from "../../images/background.jpg"
import AvatarImage from "../../images/avatar.jpg"
import ProjectCard from "./ProjectCard.js"
import { Card, Grid, withStyles, Paper, Typography, Box, Button, Container, CardContent, Avatar, makeStyles, Divider, CardMedia } from '@material-ui/core';
import resumeLink from "../../images/BryanWong_CV.pdf"
import PersonalPicture from "../../images/background2.jpg"

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
    height: 0,
    paddingTop: '40.25%', // 16:9,
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
      <Box display="flex" justifyContent="center" paddingTop="60px" width="100%">
        <Card sx={{ display: 'flex' }} className={classes.paper}>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Avatar src={AvatarImage} style={{ height: '200px', width: '200px' }} />
          <Box paddingLeft={3} />
          <CardContent>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography style={{color:"#00adb5"}} gutterBottom variant="h5" component="div">
              Hi, I'm Bryan, 
              <br></br>
              a Full Stack Developer.
            </Typography>
            <Box paddingTop={3} />
            <a href={resumeLink} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" download>
              <Button variant="contained">
                  Download Resume
              </Button>
            </a>
          </Box>
          </CardContent>
          </Box>
        </Card>
      </Box>
      <div style={{paddingTop: "300px"}}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >
          <Box width="80%">
            <Grid item>
              <Paper style={{backgroundColor: "#f7fffe"}} flat square>
                <Box pt={10} mb={6} display="flex" justifyContent="center" id="projects">
                  <Typography variant="h4" style={{ textDecoration: 'underline' }}>
                    Introduction
                  </Typography>
                </Box>
                  <Box width="80%">
                    <Card sx={{ display: 'flex' }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                          <Typography component="div" variant="h5">
                            Live From Space
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            Mac Miller
                          </Typography>
                        </CardContent>
                      </Box>
                      <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={PersonalPicture}
                        alt="Live from space album cover"
                      />
                    </Card>
                  </Box>
              </Paper>
            </Grid>
          <Grid>
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
          </Grid>
          </Box>
        </Grid>
      </div>
    </div>
  )
}

export default HomeContainer
