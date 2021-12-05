import React from 'react';
import { Card, Fade, CardActionArea, CardContent, Grid, CardHeader, withStyles, Paper, Typography, Box, Container, makeStyles, Divider, CardMedia } from '@material-ui/core';
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
    maxWidth: "50vmin",
    position: "relative",
    margin: 20
  },
  cardMedia: {
    width: '100%',
    paddingTop: '84%', // 16:9
  },
  dsoCardMedia: {
    width: '100%',
    paddingTop: '57%', // 16:9
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
    flex: 0.4
  },
}))

const WorkXSDownCard = ({ company }) => {
  const classes = useStyles()

  return (
    <Card className={classes.card} style={{backgroundColor: "#242423"}}>
      <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" py={2}>
        <Box width="80%">
          <CardMedia className={company.logoStyles} image={company.companyLogo} style={{ justifyContent: "center", display: "flex" }} />
        </Box>
        <Box>
          <CardHeader 
            title={<Typography variant="h4" style={{textAlign: "center"}}>
                    {company.companyName}
                  </Typography>} 
            subheader={<Typography variant="subtitle2" style={{textAlign: "center"}}>
                    {company.date}
                  </Typography>} 
          />
        </Box>
      </Box>
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems:'start'}}>
          <ul>
            {company.description.map(experience => {
              return <li>
                <Typography variant="body2">
                  {experience}
                  <br></br>
                </Typography>
                <Box pb={2} />
              </li>
            })}
          </ul>
        </Box>
      </CardContent>
    </Card>
  )
}

export default WorkXSDownCard
