import React from 'react'
import BackgroundImage from "../../images/background.jpg"
import AvatarImage from "../../images/avatar.jpg"
import ProjectCard from "./ProjectCard.js"
import { Card, Grid, withStyles, Paper, Typography, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, CardContent, Avatar, makeStyles, Divider, CardMedia } from '@material-ui/core';
import resumeLink from "../../images/BryanWong_CV.pdf"
import PersonalPicture from "../../images/background3.jpg"
import SkillsPaper from "./SkillsPaper.js"
import FindOutMore from "./FindOutMore.js"

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(languages, frameworks, dataScience, database, devOps) {
  return { languages, frameworks, dataScience, database, devOps };
}

const rows = [
  createData('JavaScript', 'React (+Redux, Material-UI)', 'Pandas', 'MongoDB', 'Docker'),
  createData('Python', 'Vue.js (+ Vuex, Vuetify)', 'OpenCV', 'SQL (SQLite, PostGreSQL, SQLAlchemy)', 'AWS Amplify'),
];

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
    width: '200%',
    paddingTop: '50%', // 16:9
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
              <Button variant="contained" style={{width: "30vmin"}}>
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
          <Box width="70%">
            <Grid item>
              <Paper style={{backgroundColor: "#f7fffe"}} elevation={0} flat square>
                <Box pt={10} mb={5} display="flex" justifyContent="center" id="projects">
                  <Typography variant="h4" style={{ textDecoration: 'underline' }}>
                    Introduction
                  </Typography>
                </Box>
                  <Card className={classes.paper} display="flex" elevation={0} width="80%">
                    <Box display="flex" flexDirection="row">
                      <Box ml={5} />
                      <CardMedia
                        className={classes.media}
                        image={PersonalPicture}
                      />
                      <Box ml={5} />
                      <CardContent>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                          Welcome to my site! I’m Bryan Wong, a penultimate year Computer Engineering student from National University of Singapore (NUS). I currently hold a GPA of 4.67/5.0 and I’m on track to graduate with a First Class Honours degree. I’m also part of the Engineering Scholars Programme, a bond-free scholarship programme in NUS given to the top engineering students of each cohort.
                          <br></br>
                          <br></br>
                          More importantly, I’m a full stack developer and a technology enthusiast. I aim to make a difference in people’s lives through creating new technology that will benefit the world. I strive for a career in Silicon Valley with the goal of driving innovations in the tech field together with like-minded entrepreneurs and tech enthusiasts.
                        </Typography>
                      </CardContent>
                    </Box>
                  </Card>
                <Box pb={5} />
              </Paper>

              <Box mt={15} />

              <SkillsPaper />

              <Box mt={15} />

              <FindOutMore />
        
            </Grid>
          <Grid>
          <Paper>
            <Box mt={15} display="flex" justifyContent="center">
              {/* <Divider className={classes.divider} /> */}
            </Box>
            <Box mt={12} mb={6} display="flex" justifyContent="center" id="projects">
              <Typography variant="h1">
                Skills
              </Typography>
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
