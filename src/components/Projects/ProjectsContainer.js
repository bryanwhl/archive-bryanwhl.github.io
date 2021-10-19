import React from 'react'
import ProjectCard from "./ProjectCard.js"
import { Card, CardActionArea, Grid, Zoom, Tooltip, Fab, Fade, Dialog, withStyles, Paper, Typography, Box, Container, makeStyles, Divider, CardMedia } from '@material-ui/core';
import Header from "../Home/Header.js"
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: "50vmin",
    maxWidth: "50vmin",
    position: "relative",
    margin: 20,
  },
  cardMedia: {
    width: '100%',
    paddingTop: '84%', // 16:9
    filter: "brightness(40%)",
  },
  font: {
    position: "absolute",
    top: "35%",
    width: "100%",
    textAlign: "center",
    color: "white",
    textDecoration: 'underline',
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

const DarkTextTypography = withStyles({
  root: {
    color: "#263238"
  }
})(Typography);

const ProjectsContainer = ({ data }) => {
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
                    Projects
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="center">
                  <Box width="80%" display="flex" justifyContent="center">
                    <Grid container className={classes.root} display="flex" justifyContent="center">
                      {data.projects.map(project => <ProjectCard project={project} />
                      )}
                    </Grid>
                  </Box>
                </Box>
                <Box pb={5} />
              </Paper>
            </Fade>
          </Grid>
          <Box mt={15} />
          <Grid item>
            <Fade in={true}>
              <Paper style={{backgroundColor: "#333533"}} elevation={0} flat>
                <Box pt={6} mb={5} display="flex" justifyContent="center" id="projects">
                  <Typography variant="h4">
                    Hackathons
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="center">
                  <Box width="80%" display="flex" justifyContent="center">
                    <Grid container className={classes.root} display="flex" justifyContent="center">
                      {data.hackathons.map(project => <ProjectCard project={project} />
                      )}
                    </Grid>
                  </Box>
                </Box>
                <Box pb={5} />
              </Paper>
            </Fade>
          </Grid>
        </Box>
        <Box pb={15} />
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

export default ProjectsContainer
