import React from 'react'
import { Card, Dialog, Box, Paper, Divider, Button, CardContent, ButtonBase, Grid, withStyles, CardActionArea, Typography, makeStyles, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    width: '100%',
    paddingTop: '50%', // 16:9
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
