import React from 'react';
import { Card, CardActionArea, CardContent, Grid, withStyles, Paper, Typography, Box, Container, makeStyles, Divider, CardMedia } from '@material-ui/core';
import Header from "../Home/Header.js";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import DSO from "../../images/dsotransparent.png"
import ProtosLabs from "../../images/protoslabs.png"
import SAF from "../../images/saf.png"
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: "80%",
    maxWidth: "80%",
    position: "relative",
    margin: 20,
  },
  cardMedia: {
    width: '100%',
    paddingTop: '84%', // 16:9
  },
  dsoCardMedia: {
    width: '100%',
    paddingTop: '66%', // 16:9
  },
  safCardMedia: {
    width: '100%',
    paddingTop: '108%', // 16:9
  },
  font: {
    position: "absolute",
    top: "35%",
    width: "100%",
    textAlign: "center",
    color: "white",
    textDecoration: 'underline',
  },
  oppositeContent: {
    // TODO: adjust this value accordingly
    flex: 0.6
  },
}))

const Work = () => {
  const classes = useStyles()

  const protoslabs = [
    "Worked alongside 2 cofounders in a pre-seed stage Cybersecurity startup doing web development, backend development and architecture development",
    "Worked with various AWS technologies to implement authentication, microservices and to automate workflows",
    "Worked on React and Redux to develop the frontend user interface of the product",
    "Worked on solving diverse challenges and problems, including algorithmic problems and Machine Learning problems"
  ];

  const dso = [
    "Built a full Search Engine user interface with Vue.js, Vuex store and Vuetify library",
    "Built a dockerized microservice that provides functionality for Video and Audio transcription with HTTP requests and REST APIs",
    "Worked with Elasticsearch and Java for the system’s backend"
  ];

  const saf = [
    "Built a telegram bot that serves more than 500 daily users, providing functionality for checking canteen menu daily",
    "Worked on the backend of a web application that provides navigation functionality on a map",
    "Automated processes and workflows on Microsoft Excel using VBA"
  ]

  return (
    <div>
      <Box pt={20} />
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
                  Work Experience
                </Typography>
              </Box>
              <Timeline>
                <TimelineItem>
                  <TimelineOppositeContent className={classes.oppositeContent}>
                    <Typography variant="h6">
                    Protos Labs
                    </Typography>
                    Aug 2021 - Dec 2021
                  </TimelineOppositeContent>  
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card className={classes.card} style={{backgroundColor: "#d3f2e5"}}>
                      <Box display="flex" justifyContent="center" py={2}>
                        <Box width="80%">
                          <CardMedia className={classes.cardMedia} image={ProtosLabs} style={{ justifyContent: "center", display: "flex" }} />
                        </Box>
                      </Box>
                      <CardContent>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems:'start'}}>
                          <ul>
                            {protoslabs.map(skill => {
                              return <li>
                                <Typography variant="body2">
                                  {skill}
                                  <br></br>
                                </Typography>
                                <Box pb={2} />
                              </li>
                            })}
                          </ul>
                        </Box>
                      </CardContent>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent className={classes.oppositeContent}>
                    <Typography variant="h6">
                    DSO National Laboratories
                    </Typography>
                    May 2021 - July 2021
                  </TimelineOppositeContent>  
                  <TimelineSeparator>
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card className={classes.card} style={{backgroundColor: "#d3f2e5"}}>
                      <Box display="flex" justifyContent="center" py={2}>
                        <Box width="80%">
                          <CardMedia className={classes.dsoCardMedia} image={DSO} style={{ justifyContent: "center", display: "flex" }} />
                        </Box>
                      </Box>
                      <CardContent>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems:'start'}}>
                          <ul>
                            {dso.map(skill => {
                              return <li>
                                <Typography variant="body2">
                                  {skill}
                                  <br></br>
                                </Typography>
                                <Box pb={2} />
                              </li>
                            })}
                          </ul>
                        </Box>
                      </CardContent>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent className={classes.oppositeContent}>
                    <Typography variant="h6">
                    Singapore Armed Forces (Conscription)
                    </Typography>
                    Apr 2018 - Apr 2020
                  </TimelineOppositeContent>  
                  <TimelineSeparator>
                    <TimelineDot color="secondary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card className={classes.card} style={{backgroundColor: "#d3f2e5"}}>
                      <Box display="flex" justifyContent="center" py={2}>
                        <Box width="70%">
                          <CardMedia className={classes.safCardMedia} image={SAF} />
                        </Box>
                      </Box>
                      <CardContent>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems:'start'}}>
                          <ul>
                            {saf.map(skill => {
                              return <li>
                                <Typography variant="body2">
                                  {skill}
                                  <br></br>
                                </Typography>
                                <Box pb={2} />
                              </li>
                            })}
                          </ul>
                        </Box>
                      </CardContent>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
              <Box pb={15} />
            </Paper>
          </Grid>
          <Box mb={15} />
        </Box>
      </Grid>
    </div>
  )
}

export default Work
