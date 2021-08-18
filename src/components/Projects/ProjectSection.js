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
    width: "100%"
  },
  innerPaper: {
    padding: theme.spacing(13),
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

  return (
    <Box pt={20} pb={10} display="flex" justifyContent="center">
      <Paper elevation={0} className={classes.paper}>
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item>        
            <Carousel className={classes.carousel}>
              {
                project.projectScreenshots.map( image => <CarouselCard image={image} /> )
              }
            </Carousel> 
          </Grid>

            <Paper elevation={0} className={classes.innerPaper}>
            <Grid container direction="column" justify="start">
              <Grid item>   
                <Typography gutterBottom variant="h2" color="secondary">
                  {ReactHtmlParser(project.projectName)}
                </Typography>
              </Grid>
              <Box pb={5}>
                <Grid item> 
                  <Typography variant="subtitle1" gutterBottom>
                    {ReactHtmlParser(project.projectDescription)}
                  </Typography>
                </Grid>
              </Box>
              <Grid item>
                <Typography variant="h5" color="secondary">
                  Tech Stack:
                </Typography>
                <Typography variant="subtitle1">
                  {ReactHtmlParser(project.projectStack)}
                </Typography>
              </Grid>
              <br></br>
              <br></br>
              {project.projectLink !== '' ? <Grid item>
                <Button variant="contained" color="secondary" href={project.projectLink}>
                  Visit Project Here!
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
