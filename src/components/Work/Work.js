import React from 'react'
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

const Work = () => {
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
                <Box pb={15} />
              </Paper>
              
          </Grid>
          <Box mt={15} />
        </Box>
      </Grid>
    </div>
  )
}

export default Work
