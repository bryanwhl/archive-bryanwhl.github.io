import React from 'react'
import { Card, Dialog, Box, Paper, Divider, Button, CardContent, ButtonBase, Grid, withStyles, CardActionArea, Typography, makeStyles, CardMedia } from '@material-ui/core';

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
}));

const CarouselCard = ({ image }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia className={classes.cardMedia} image={image} />
    </Card>
  )
}

export default CarouselCard
