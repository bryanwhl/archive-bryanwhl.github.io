import React from 'react';
import { Card, Fade, CardActionArea, Zoom, Tooltip, Fab, CardContent, Grid, withStyles, Paper, Typography, Box, Container, makeStyles, Divider, CardMedia } from '@material-ui/core';
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
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import WorkSMUpCard from "./WorkSMUpCard.js"

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

const WorkSMUp = ({ data }) => {
  const classes = useStyles()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

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
            <Fade in={true}>
              <Paper style={{backgroundColor: "#333533"}} elevation={0} flat>
                <Box pt={6} mb={5} display="flex" justifyContent="center" id="projects">
                  <Typography variant="h4">
                    Work Experience
                  </Typography>
                </Box>
                <Timeline>
                  {data.work.map(company => {
                    return <WorkSMUpCard company={company} />
                  })}
                </Timeline>
                <Box pb={15} />
              </Paper>
            </Fade>
          </Grid>
          <Box mb={15} />
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

export default WorkSMUp
