import React from 'react';
import { Card, Fade, CardActionArea, Zoom, Tooltip, Fab, CardContent, Grid, withStyles, Paper, Typography, Box, Container, makeStyles, Divider, CardMedia } from '@material-ui/core';
import Header from "../Home/Header.js";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: "60vmin",
    position: "relative",
    margin: 10
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
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

const WorkSMUpCard = ({ company }) => {
  const classes = useStyles()
  console.log(company);

  return (
    <TimelineItem>
      <TimelineOppositeContent className={classes.oppositeContent} />
      <TimelineSeparator>
        <TimelineDot color="secondary"/>
        <TimelineConnector />
      </TimelineSeparator>
      <Fade in={true}>
        <TimelineContent>
          <Typography variant="h6">
            {company.companyName}
          </Typography>
            {company.date}
          <Card className={classes.card} style={{backgroundColor: "#242423"}}>
            <Box display="flex" justifyContent="center" py={2}>
              <Box width="80%">
                <CardMedia className={company.logoStyles} image={company.companyLogo} style={{ justifyContent: "center", display: "flex" }} />
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
        </TimelineContent>
      </Fade>
    </TimelineItem>
  )
}

export default WorkSMUpCard
