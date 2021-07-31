import React from 'react'
import Image from "material-ui-image";
import BackgroundImage from "../../images/background2.jpg"
import { Card, CardContent, Grid, Paper, Typography, CardActions, Button, Box, Container, makeStyles, Divider, CardMedia } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  media: {
    width: '100%',
    paddingTop: '50.25%', // 16:9
  },
  divider: {
    background: theme.palette.primary.main,
    width: "70%"
  },
  content: {
    flex: '1 0 auto',
  },
  portfolioCards: {
    margin: 16,
    padding: theme.spacing(2),
    width: theme.spacing(46),
    height: theme.spacing(46),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }
}))

const HomeContainer = () => {
  const classes = useStyles()

  return (
    <div>
      <Container maxWidth="lg">
        <Box bgcolor="background.paper" justifyContent="center">
          <Paper style={{backgroundColor: "#3f4443"}} flat square>
            <Card flat square>
              <CardMedia
                className={classes.media}
                image={BackgroundImage}
              />
            </Card>
            <Box p={2}>
              <Typography color="textSecondary" gutterBottom>
                Hi there! I'm Bryan, a year 2 student from NUS. I major in Computer Engineering and I'm also part of the Engineering Scholars Programme. 
                Welcome to my humble portfolio website! This site is still a work-in-progress, but feel free to look around.
              </Typography>
            </Box>
            <Box mt={12} display="flex" justifyContent="center">
              <Divider className={classes.divider} />
            </Box>
            <Box mt={12} mb={6} display="flex" justifyContent="center">
              <Typography variant="h1">
                Projects
              </Typography>
            </Box>
            <Grid container direction="row" justify="space-around">
              <Grid item align="center" xs={12} md={6} lg={4}>
                <Card className={classes.portfolioCards} style={{backgroundColor: '#00bcd4'}}>
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      Card C
                    </Typography>
                    <Typography variant="h5" component="h2">
                      Long content
                    </Typography>
                    <Typography component="p">
                      I have quite a lot to say and as a result I am quite tall, but the
                      other cards heights stretch with me
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item align="center" xs={12} md={6} lg={4}>
                <Card className={classes.portfolioCards} style={{backgroundColor: '#00bcd4'}}>
                  xs=6
                </Card>
              </Grid>
              <Grid item align="center" xs={12} md={6} lg={4}>
                <Card className={classes.portfolioCards} style={{backgroundColor: '#00bcd4'}}>
                  xs=6
                </Card>
              </Grid>
              <Grid item align="center" xs={12} md={6} lg={4}>
                <Card className={classes.portfolioCards} style={{backgroundColor: '#00bcd4'}}>
                  xs=6
                </Card>
              </Grid>
            </Grid>
            <Box mt={12} mb={6} display="flex" justifyContent="center">
              <Typography variant="h1">
                Projects
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>
    </div>
  )
}

export default HomeContainer
