import React from 'react'
import ProjectCard from "./ProjectCard.js"
import { Card, CardActionArea, Grid, Fade, Dialog, withStyles, Paper, Typography, Box, Container, makeStyles, Divider, CardMedia } from '@material-ui/core';
import Header from "../Home/Header.js"

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
  }
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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

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
                    Projects
                  </Typography>
                </Box>
        
                <Box pb={5} />
                <Box display="flex" justifyContent="center">
                  <Box width="80%" display="flex" justifyContent="center">
                    <Grid container className={classes.root} display="flex" justifyContent="center">
                      {data.projects.map(project => <ProjectCard project={project} />
                      )}
                    </Grid>
                  </Box>
                </Box>
                <Box pb={15} />
              </Paper>
              
          </Grid>
          <Box mt={15} />
          <Grid item>
              <Paper style={{backgroundColor: "#f7fffe"}} elevation={0} flat square>
                <Box pt={10} mb={5} display="flex" justifyContent="center" id="projects">
                  <Typography variant="h4" style={{ textDecoration: 'underline' }}>
                    Hackathons
                  </Typography>
                </Box>
        
                <Box pb={5} />
                <Box display="flex" justifyContent="center">
                  <Box width="80%" display="flex" justifyContent="center">
                    <Grid container className={classes.root} display="flex" justifyContent="center">
                      {data.hackathons.map(project => <ProjectCard project={project} />
                      )}
                    </Grid>
                  </Box>
                </Box>
              </Paper>
          </Grid>
        </Box>
        <Box pb={5} />
      </Grid>
    </div>
  )
}

export default ProjectsContainer
