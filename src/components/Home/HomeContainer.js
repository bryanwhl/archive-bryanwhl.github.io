import React from 'react'
import BackgroundImage from "../../images/background.jpg"
import AvatarImage from "../../images/avatar.jpg"
import ProjectCard from "./ProjectCard.js"
import { Card, Grid, Fade, Zoom, Tooltip, withStyles, Paper, Fab, Typography, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, CardContent, Avatar, makeStyles, Divider, CardMedia } from '@material-ui/core';
import resumeLink from "../../images/BryanWong_CV.pdf"
import PersonalPicture from "../../images/background3.jpg"
import SkillsPaper from "./SkillsPaper.js"
import FindOutMore from "./FindOutMore.js"
import HobbiesPaper from "./HobbiesPaper.js"
import ContactMe from "./ContactMe.js"
import Header from "./Header.js"
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

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
    paddingTop: '100%',
    minWidth: '100%',
    maxWidth: '100%',
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
  },
  table: {
    minWidth: 700,
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

const DarkTextTypography = withStyles({
  root: {
    color: "#263238"
  }
})(Typography);

const HomeContainer = ({ loading }) => {
  const classes = useStyles()

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <Fade in={true}>
        <Header />
      </Fade>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Box width="70%">
          <Grid item>
            <Fade in={true}>
              <Paper style={{backgroundColor: "#f7fffe"}} elevation={0} flat square>
                <Box pt={10} mb={5} display="flex" justifyContent="center" id="projects">
                  <Typography variant="h4" style={{ textDecoration: 'underline' }}>
                    Introduction
                  </Typography>
                </Box>
                
                  <Card className={classes.paper} elevation={0}>
                    <Grid container>  
                      <Grid container item xs={12} sm={12} md={6} lg={6} xl={6} justifyContent="center" alignItems="center">
                        <CardMedia
                          className={classes.media}
                          image={PersonalPicture}
                        />  
                      </Grid>
                      <Grid container item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <CardContent>
                          <ul>
                            <li>
                              <Typography variant="subtitle2">
                                Name: Bryan Wong
                              </Typography>
                            </li>
                            <li>
                              <Typography variant="subtitle2">
                                Age: 22
                              </Typography>
                            </li>
                            <li>
                              <Typography variant="subtitle2">
                                Education: Computer Engineering Undergraduate (Penultimate Year) at National University of Singapore
                              </Typography>
                            </li>
                            <li>
                              <Typography variant="subtitle2">
                                Scholarship: Engineering Scholars Programme (bond-free scholarship programme given to the top engineering students in NUS)
                              </Typography>
                            </li>
                            <li>
                              <Typography variant="subtitle2">
                                GPA: 4.67/5.0 (Highest Distinction)
                              </Typography>
                            </li>
                            <li>
                              <Typography variant="subtitle2">
                                Graduating by: May 2023
                              </Typography>
                            </li>
                          </ul>
                          <Typography variant="body2" color="text.secondary" component="div">
                            <br></br>
                            Hi there! I’m a full stack developer with a keen passion in technlogy. I aim to make a difference in people’s lives through creating new technology that will benefit the world. I spend my free time working on software projects and improving my technical skills. I'm also deeply interested in Computer Vision and Machine Learning, as well as UI/UX design to maximize the usability of applications that I develop. I strive for a career in Silicon Valley with the goal of driving innovations in the tech field together with like-minded entrepreneurs and tech enthusiasts.
                            <br></br>
                            <br></br>
                            P.S. This site is made from scratch using React and Material UI!
                          </Typography>
                        </CardContent>
                      </Grid>
                    </Grid>
                  </Card>
                
        
                <Box pb={5} />
              </Paper>
            </Fade>
            <Box mt={15} />

            <Fade in={true}>
              <SkillsPaper />
            </Fade>

            <Box mt={15} />
            
            <Fade in={true}>
              <FindOutMore />
            </Fade>

            <Box mt={15} />

            <Fade in={true}>
              <HobbiesPaper />
            </Fade>

            <Box mt={15} />

            <Fade in={true}>
              <ContactMe />
            </Fade>

            <Box mb={15} />
      
          </Grid>
        </Box>
      </Grid>
      <Zoom
        in={true}
      >
        <Tooltip title="Back To Top" aria-label="Back To Top">
          <Fab color="secondary" className={classes.fab} onClick={scrollToTop}>
            <ArrowUpwardIcon />
          </Fab>
        </Tooltip>
      </Zoom>
    </div>
  )
}

export default HomeContainer
