import React from 'react'
import BackgroundImage from "../../images/background.jpg"
import AvatarImage from "../../images/avatar.jpg"
import ProjectCard from "./ProjectCard.js"
import { Card, Grid, Fade, Zoom, withStyles, Paper, Typography, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, CardContent, Avatar, makeStyles, Divider, CardMedia } from '@material-ui/core';
import resumeLink from "../../images/BryanWong_CV.pdf"
import PersonalPicture from "../../images/background3.jpg"
import SkillsPaper from "./SkillsPaper.js"
import FindOutMore from "./FindOutMore.js"
import HobbiesPaper from "./HobbiesPaper.js"
import Header from "./Header.js"

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
}))

const DarkTextTypography = withStyles({
  root: {
    color: "#263238"
  }
})(Typography);

const HomeContainer = ({ loading }) => {
  const classes = useStyles()

  return (
    <div>
      <Zoom in={loading === true} timeout={4000}>
        <Header />
      </Zoom>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Box width="70%">
          <Grid item>
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
                          <Typography variant="body2" color="text.secondary" component="div">
                            Welcome to my site! I’m Bryan Wong, a penultimate year Computer Engineering student from National University of Singapore (NUS). I currently hold a GPA of 4.67/5.0 and I’m on track to graduate with a First Class Honours degree. I’m also part of the Engineering Scholars Programme, a bond-free scholarship programme in NUS given to the top engineering students of each cohort.
                            <br></br>
                            <br></br>
                            More importantly, I’m a full stack developer and a technology enthusiast. I aim to make a difference in people’s lives through creating new technology that will benefit the world. I strive for a career in Silicon Valley with the goal of driving innovations in the tech field together with like-minded entrepreneurs and tech enthusiasts.
                          </Typography>
                        </CardContent>
                      </Grid>
                    </Grid>
                  </Card>
                
        
                <Box pb={5} />
              </Paper>

            <Box mt={15} />

            <SkillsPaper />

            <Box mt={15} />

            <FindOutMore />

            <Box mt={15} />

            <HobbiesPaper />
      
          </Grid>
        </Box>
      </Grid>
    </div>
  )
}

export default HomeContainer
