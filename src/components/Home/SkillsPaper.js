import React from 'react'
import BackgroundImage from "../../images/background.jpg"
import AvatarImage from "../../images/avatar.jpg"
import ProjectCard from "./ProjectCard.js"
import { Card, Grid, withStyles, Paper, Typography, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, CardContent, Avatar, makeStyles, Divider, CardMedia } from '@material-ui/core';
import resumeLink from "../../images/BryanWong_CV.pdf"
import PersonalPicture from "../../images/background3.jpg"
import StorageIcon from '@material-ui/icons/Storage';
import AndroidIcon from '@material-ui/icons/Android';
import LanguageIcon from '@material-ui/icons/Language';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: "92%",
    maxWidth: "92%",
    margin: 20,
  },
}))


const SkillsPaper = () => {
  const classes = useStyles()

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
    "Matplotlib",
    "scikit-learn",
    "Keras",
    "Tableau",
    "R"
  ];

  const dataBase = [
    "MongoDB",
    "SQL (SQLite, PostGreSQL, SQLAlchemy)",
    "Elasticsearch",
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
          Skills
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Box width="80%">
          <Grid container className={classes.root}>
            <Grid container item xs={12} sm={12} md={12} lg={4} xl={4} display="flex" justifyContent="center">
              <Card className={classes.card} style={{backgroundColor: "#d3f2e5"}}>
                <CardContent>
                  <Box display="flex" justifyContent="center">
                    <Typography variant="h6" style={{fontWeight: 600}}>
                      <LanguageIcon style={{ fontSize: 18 }} />
                      &nbsp;Language
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems:'start'}}>
                    <ul>
                      {languages.map(language => {
                        return <li>
                          <Typography variant="subtitle2">
                            {language}
                            <br></br>
                          </Typography>
                        </li>
                      })}
                    </ul>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={4} xl={4} display="flex" justifyContent="center">
              <Card className={classes.card} style={{backgroundColor: "#d3f2e5"}}>
                <CardContent>
                  <Box display="flex" justifyContent="center">
                    <Typography variant="h6" style={{fontWeight: 600}}>
                      <AndroidIcon style={{ fontSize: 18 }} />
                      &nbsp;Frameworks
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems:'start'}}>
                    <ul>
                      {frameworks.map(framework => {
                        return <li>
                          <Typography variant="subtitle2">
                            {framework}
                            <br></br>
                          </Typography>
                        </li>
                      })}
                    </ul>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={4} xl={4} display="flex" justifyContent="center">
              <Card className={classes.card} style={{backgroundColor: "#d3f2e5"}}>
                <CardContent>
                  <Box display="flex" justifyContent="center">
                    <Typography variant="h6" style={{fontWeight: 600}}>
                      <TrendingUpIcon style={{ fontSize: 18 }} />
                      &nbsp;Data Science
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems:'start'}}>
                    <ul>
                      {dataScience.map(skill => {
                        return <li>
                          <Typography variant="subtitle2">
                            {skill}
                            <br></br>
                          </Typography>
                        </li>
                      })}
                    </ul>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={4} xl={4} display="flex" justifyContent="center">
              <Card className={classes.card} style={{backgroundColor: "#d3f2e5"}}>
                <CardContent>
                  <Box display="flex" justifyContent="center">
                    <Typography variant="h6" style={{fontWeight: 600}} noWrap>
                      <StorageIcon style={{ fontSize: 18 }} />
                      &nbsp;&nbsp;API &amp; Database
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems:'start'}}>
                    <ul>
                      {dataBase.map(skill => {
                        return <li>
                          <Typography variant="subtitle2">
                            {skill}
                            <br></br>
                          </Typography>
                        </li>
                      })}
                    </ul>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={4} xl={4} display="flex" justifyContent="center">
              <Card className={classes.card} style={{backgroundColor: "#d3f2e5"}}>
                <CardContent>
                  <Box display="flex" justifyContent="center">
                    <Typography variant="h6" style={{fontWeight: 600}} noWrap>
                      <AssignmentIcon style={{ fontSize: 18 }} />
                      &nbsp;DevOps / Management
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems:'start'}}>
                    <ul>
                      {devOps.map(skill => {
                        return <li>
                          <Typography variant="subtitle2">
                            {skill}
                            <br></br>
                          </Typography>
                        </li>
                      })}
                    </ul>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box pb={5} />
    </Paper>
  )
}

export default SkillsPaper
