import React from 'react'
import { Card, Dialog, Box, Paper, Divider, Button, CardContent, ButtonBase, Grid, withStyles, CardActionArea, Typography, makeStyles, CardMedia } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'
import CarouselCard from "./CarouselCard.js"

const useStyles = makeStyles((theme) => ({
  image: {
    width: 128,
    height: 128,
  },
  paper: {
    padding: theme.spacing(3),
    margin: 'auto',
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
    width: 800,
  },
}));

function Item(props)
{
    return (
        <Card>
          <CardMedia className/>
        </Card>
    )
}

const ProjectSection = ( { project } ) => {
  const classes = useStyles();

  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!"
    },
    {
      name: "Random Name #2",
      description: "Hello World!"
    }
  ]

  return (
    <div>
      <Box pt={5} pb={5}>
        <Paper elevation={0} flat className={classes.paper}>
          <Box mb={12} display="flex" justifyContent="center">
            <Divider className={classes.divider} />
          </Box>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <Carousel className={classes.carousel}>
                  {
                    project.projectScreenshots.map( image => <CarouselCard image={image} /> )
                  }
                </Carousel>
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Standard license
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Full resolution 1920x1080 • JPEG
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ID: 1030114
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    Remove
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">$19.00</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        </Box>
    </div>
  )
}

export default ProjectSection
