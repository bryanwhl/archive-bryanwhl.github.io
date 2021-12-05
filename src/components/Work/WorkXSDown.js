import React from 'react';
import { Card, Fade, CardActionArea, CardContent, Grid, CardHeader, withStyles, Paper, Typography, Box, Container, makeStyles } from '@material-ui/core';
import WorkXSDownCard from "./WorkXSDownCard.js"

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: "50vmin",
    position: "relative",
    margin: 20
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
}))

const WorkXSDown = ({ data }) => {
  const classes = useStyles()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
              <Paper style={{backgroundColor: "#333533"}} elevation={0} flat square>
                <Box pt={10} mb={5} display="flex" justifyContent="center" id="projects">
                  <Typography variant="h4" style={{ textDecoration: 'underline' }}>
                    Work Experience
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
                  {data.work.map(company => {
                    return <WorkXSDownCard company={company} />
                  })}
                </Box>
                <Box pb={15} />
              </Paper>
            </Fade>
          </Grid>
          <Box mb={15} />
        </Box>
      </Grid>
    </div>
  )
}

export default WorkXSDown
