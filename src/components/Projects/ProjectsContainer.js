import React from 'react'
import ProjectSection from "./ProjectSection.js"
import { Card, CardActionArea, Grid, withStyles, Paper, Typography, Box, Container, makeStyles, Divider, CardMedia } from '@material-ui/core';
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

  return (
    <div>
      <Header />
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
                      {data.projects.map(project => <Box display="flex" justifyContent="center">
                        <Grid container item xs={12} sm={12} md={12} lg={6} xl={4} display="flex" justifyContent="center">
                          <Card className={classes.card} style={{backgroundColor: "#d3f2e5"}}>
                            <CardActionArea>
                              <CardMedia
                                className={classes.cardMedia}
                                image={project.projectLogo}
                              />
                              <Typography
                                gutterBottom
                                variant="h4"
                                component="h4"
                                className={classes.font}
                              >
                                {project.projectName}
                              </Typography>
                            </CardActionArea>
                          </Card>
                        </Grid>
                      </Box>
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
                      {data.hackathons.map(project => <Box display="flex" justifyContent="center">
                        <Grid container item xs={12} sm={12} md={12} lg={6} xl={4} display="flex" justifyContent="center">
                          <Card className={classes.card} style={{backgroundColor: "#d3f2e5"}}>
                            <CardActionArea>
                              <CardMedia
                                className={classes.cardMedia}
                                image={project.projectLogo}
                              />
                              <Typography
                                gutterBottom
                                variant="h4"
                                component="h4"
                                className={classes.font}
                              >
                                {project.projectName}
                              </Typography>
                            </CardActionArea>
                          </Card>
                        </Grid>
                      </Box>
                      )}
                    </Grid>
                  </Box>
                </Box>
              </Paper>
          </Grid>
        </Box>
      </Grid>
    </div>
  )
}

export default ProjectsContainer
