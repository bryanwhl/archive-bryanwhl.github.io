import React from 'react'
import { Card, Dialog, Box, Paper, Link, Divider, Button, CardContent, ButtonBase, Grid, withStyles, CardActionArea, Typography, makeStyles, CardMedia } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'
import CarouselCard from "./CarouselCard.js"
import ReactHtmlParser from 'react-html-parser';

const useStyles = makeStyles((theme) => ({
  image: {
    width: 128,
    height: 128,
  },
  paper: {
    padding: theme.spacing(3),
    width: "70%"
  },
  innerPaper: {
    padding: theme.spacing(5),
    width: "100%"
  },
  divider: {
    background: theme.palette.primary.main,
    width: "70%"
  },
  cardMedia: {
    width: '100%',
    paddingTop: '84%', // 16:9
  },
  carousel: {
    width: '50vw',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
}));

const ProjectSection = ( { project } ) => {
  const classes = useStyles();

  console.log(project);

  return (
    <Box pt={10} pb={10} display="flex" justifyContent="center">
      <Paper elevation={0} className={classes.paper}>
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item>
            <Box pb={5}>
              <Typography gutterBottom variant="h4">
                {ReactHtmlParser(project.projectName)}
              </Typography>
            </Box>
          </Grid>
          <Grid item>        
            <Carousel className={classes.carousel}>
              {
                project.projectScreenshots.map( image => <CarouselCard image={image} /> )
              }
            </Carousel> 
          </Grid>
          <Paper elevation={0} className={classes.innerPaper}>
            <Grid container direction="column" justify="start">
              <Box pb={5}>
                <Grid item> 
                  <Typography variant="h5">
                    Description:
                  </Typography>
                  <br></br>
                  <Typography variant="subtitle2">
                    {ReactHtmlParser(project.projectDescription)}
                  </Typography>
                </Grid>
              </Box>
              <Grid item>
                <Typography variant="h5">
                  Tech Stack:
                </Typography>
                <Typography variant="subtitle2">
                  {ReactHtmlParser(project.projectStack)}
                </Typography>
              </Grid>
              <br></br>
              <br></br>
              {project.projectLink !== '' ? <Grid item>
                <Button variant="contained" color="secondary" style={{textTransform: "none"}} href={project.projectLink}>
                  <Typography variant="subtitle2">
                    Visit Project Here!
                  </Typography>
                </Button>
              </Grid> : null}
            </Grid>
          </Paper>
        </Grid>
      </Paper>
    </Box>
  )
}

export default ProjectSection
