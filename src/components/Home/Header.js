import React from 'react'
import BackgroundImage from "../../images/background.jpg"
import AvatarImage from "../../images/avatar.jpg"
import ProjectCard from "./ProjectCard.js"
import { Card, Grid, Fade, withStyles, Paper, Typography, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, CardContent, Avatar, makeStyles, Divider, CardMedia } from '@material-ui/core';
import resumeLink from "../../images/BryanWong_CV.pdf"
import PersonalPicture from "../../images/background3.jpg"
import SkillsPaper from "./SkillsPaper.js"
import FindOutMore from "./FindOutMore.js"
import HobbiesPaper from "./HobbiesPaper.js"

const useStyles = makeStyles((theme) => ({
  paper: {
    opacity: 1,
    backgroundColor: 'transparent',
    width: "30vw",
    padding: theme.spacing(2),
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
}))

const Header = () => {
  const classes = useStyles()

  return (
    <div>
      <Box display="flex" justifyContent="center" paddingTop="60px" width="100%">
        <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className={classes.paper}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Avatar src={AvatarImage} style={{ height: '200px', width: '200px', animationName: "mymove", animationDuration: 4 }} />
          <Box paddingLeft={3} />
          <CardContent>
            <Typography style={{color:"#00adb5"}} variant="h5" component="div">
              Hi, I'm Bryan,  
            </Typography>
            <Typography style={{color:"#00adb5"}} variant="h5" component="div">
              a Full Stack Developer.
            </Typography>
            <Box paddingTop={3} />
            <a href={resumeLink} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" download>
              <Button variant="contained" style={{width: "100%"}}>
                <Typography variant="body2">
                  Download Resume
                </Typography>
              </Button>
            </a>
          </CardContent>
          </Box>
        </Card>
        <Box mb={90} />
      </Box>
    </div>
  )
}

export default Header
