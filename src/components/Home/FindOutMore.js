import React from 'react'
import ProjectImage from "../../images/project.jpg"
import WorkImage from "../../images/work.jpg"
import AvatarImage from "../../images/avatar.jpg"
import ProjectCard from "./ProjectCard.js"
import { Card, Grid, withStyles, Paper, Typography, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, CardContent, Avatar, makeStyles, Divider, CardMedia, CardActionArea } from '@material-ui/core';
import resumeLink from "../../images/BryanWong_CV.pdf"
import PersonalPicture from "../../images/background3.jpg"
import StorageIcon from '@material-ui/icons/Storage';
import AndroidIcon from '@material-ui/icons/Android';
import LanguageIcon from '@material-ui/icons/Language';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: "50vmin",
    maxWidth: "50vmin",
    position: "relative",
    margin: 20,
    transition: "transform 0.15s ease-in-out",
  },
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)"
  },
  cardMedia: {
    width: '100%',
    paddingTop: '84%', // 16:9
    filter: "brightness(50%)",
  },
  font: {
    position: "absolute",
    top: "35%",
    width: "100%",
    textAlign: "center",
    color: "white",
    textDecoration: 'underline',
  }
}))


const FindOutMore = () => {
  const classes = useStyles()
  const [state, setState] = React.useState({
    raised:false,
    shadow:1,
  })

  const [stateTwo, setStateTwo] = React.useState({
    raised:false,
    shadow:1,
  })

  const languages = [
    "JavaScript",
    "Python",
    "C++",
    "Java",
    "HTML/CSS",
    "Dart",
    "C",
    "Visual Basic",
    "Assembly",
    "Verilog",
  ];

  const frameworks = [
    "React (+ Redux, Material-UI)",
    "Vue.js (+ Vuex, Vuetify)",
    "Node.js",
    "Express.js",
    "Flutter",
    "Jest.js",
  ];

  const dataScience = [
    "Pandas",
    "OpenCV",
    "NumPy",
    "scikit-learn",
    "Tableau",
    "R",
  ];

  const dataBase = [
    "MongoDB",
    "SQL (SQLite, PostGreSQL, SQLAlchemy)",
    "GraphQL",
    "REST API",
    "Apollo Client",
  ];

  const devOps = [
    "Docker",
    "AWS Amplify",
    "AWS Cognito",
    "AWS EC2",
    "AWS API Gateway",
    "AWS Lambda",
    "Prometheus",
    "Grafana",
    "Jira",
  ]
  

  return (
    <Paper style={{backgroundColor: "#f7fffe"}} elevation={0} flat square>
      <Box pt={10} mb={5} display="flex" justifyContent="center" id="projects">
        <Typography variant="h4" style={{ textDecoration: 'underline' }}>
          Find out more!
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Box width="80%">
          <Grid container className={classes.root}>
            <Grid container item xs={12} sm={12} md={12} lg={6} xl={6} display="flex" justifyContent="center">
              <Card 
                className={classes.card} 
                style={{backgroundColor: "#d3f2e5"}} 
                classes={{root: state.raised ? classes.cardHovered : ""}}
                onMouseOver={()=>setState({ raised: true, shadow:3})} 
                onMouseOut={()=>setState({ raised:false, shadow:1 })} 
                raised={state.raised} zdepth={state.shadow}
              >
                <CardActionArea href="https://bryanwhl.github.io/bryanwhl.github.io#/projects">
                  <CardMedia
                    className={classes.cardMedia}
                    image={ProjectImage}
                  />
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="h4"
                    className={classes.font}
                  >
                    Projects
                  </Typography>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={6} xl={6} display="flex" justifyContent="center">
              <Card 
                className={classes.card} 
                style={{backgroundColor: "#d3f2e5"}} 
                classes={{root: stateTwo.raised ? classes.cardHovered : ""}}
                onMouseOver={()=>setStateTwo({ raised: true, shadow:3})} 
                onMouseOut={()=>setStateTwo({ raised:false, shadow:1 })} 
                raised={stateTwo.raised} zdepth={stateTwo.shadow}
              >
                <CardActionArea href="https://bryanwhl.github.io/bryanwhl.github.io#/work">
                  <CardMedia
                    className={classes.cardMedia}
                    image={WorkImage}
                  />
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="h4"
                    className={classes.font}
                  >
                    Experience
                  </Typography>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box pb={5} />
    </Paper>
  )
}

export default FindOutMore
