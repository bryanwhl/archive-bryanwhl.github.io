import React from 'react'
import BackgroundImage from "../../images/background.jpg"
import AvatarImage from "../../images/avatar.jpg"
import ProjectCard from "./ProjectCard.js"
import { Card, Grid, Fade, withStyles, Paper, Typography, IconButton, Hidden, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, CardContent, Avatar, makeStyles, Divider, CardMedia } from '@material-ui/core';
import resumeLink from "../../images/BryanWong_CV.pdf"
import PersonalPicture from "../../images/background3.jpg"
import SkillsPaper from "./SkillsPaper.js"
import FindOutMore from "./FindOutMore.js"
import HobbiesPaper from "./HobbiesPaper.js"
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  paper: {
    opacity: 1,
    backgroundColor: 'transparent',
    width: "50vw",
    padding: theme.spacing(2),
    elevation: 0,
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  media: {
    width: '750px',
    minHeight: '550px',
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
  font: {
    position: "absolute",
    top: "35%",
    width: "100%",
    padding: 4,
    textAlign: "center",
    color: "white",
    textDecoration: 'underline',
  }
}))

const Header = () => {
  const classes = useStyles()

  return (
    <div>
      <Box display="flex" justifyContent="center" paddingTop="60px" width="100%">
        <Fade in={true}>
        <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className={classes.paper}>
          <CardContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Avatar src={AvatarImage} style={{ height: '160px', width: '160px', animationName: "mymove", animationDuration: 4 }} />
              <Box pt={2} />
              <Typography style={{color:"#e8eddf", textAlign: "center"}} variant="h5" component="div">
                Hi, I'm Bryan,
              </Typography>
              <Typography style={{color:"#e8eddf", textAlign: "center"}} variant="h5" component="div">
                a Full Stack Developer.
              </Typography>
              <Box paddingTop={3} />
              <a href={resumeLink} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" download>
                <Button variant="contained" color="secondary" style={{width: "100%", textTransform: "none"}}>
                  <Typography variant="body2">
                    Download Resume
                  </Typography>
                </Button>
              </a>
              <Box pt={2}>
                <Grid container spacing={1} flexDirection="row" alignItems="center" justify="flex-end" wrap="nowrap">
                  <IconButton href="https://www.github.com/bryanwhl" >
                    <GitHubIcon style={{fill: "white"}} />
                  </IconButton>
                  <IconButton href="https://www.instagram.com/bryanwhl">
                    <InstagramIcon style={{fill: "white"}} />
                  </IconButton>
                  <IconButton href="https://www.linkedin.com/in/bryan-wong-91b323156/">
                    <LinkedInIcon style={{fill: "white"}} />
                  </IconButton>
                  <Hidden smDown>
                    <IconButton href="https://www.facebook.com/bryanwhl1">
                      <FacebookIcon style={{fill: "white"}} />
                    </IconButton>
                  </Hidden>
                </Grid>
              </Box>

              <Box paddingTop={3} width="55vmin">
                <Typography style={{color:"#e8eddf", textAlign:"center"}} variant="subtitle2">
                  Ambitious-natured, with the goal of driving innovations in the tech field together with like-minded entrepreneurs and tech enthusiasts.
                </Typography>
              </Box>
       
          </Box>
          </CardContent>
        </Card>
        </Fade>
        <Box mb={90} />
      </Box>
    </div>
  )
}

export default Header
