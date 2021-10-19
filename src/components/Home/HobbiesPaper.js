import React from 'react'
import ProjectImage from "../../images/project.jpg"
import WorkImage from "../../images/work.jpg"
import AvatarImage from "../../images/avatar.jpg"
import ProjectCard from "./ProjectCard.js"
import { Card, Grid, CardHeader, withStyles, Paper, Typography, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, CardContent, Avatar, makeStyles, Divider, CardMedia, CardActionArea } from '@material-ui/core';
import resumeLink from "../../images/BryanWong_CV.pdf"
import PersonalPicture from "../../images/background3.jpg"
import StorageIcon from '@material-ui/icons/Storage';
import AndroidIcon from '@material-ui/icons/Android';
import LanguageIcon from '@material-ui/icons/Language';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Carousel from 'react-material-ui-carousel'
import BassImage from "../../images/interests/bass.jpg"
import FoodImage from "../../images/interests/food.jpg"
import SwimImage from "../../images/interests/swim.jpg"
import KattisImage from "../../images/interests/kattis.png"
import ReactHtmlParser from 'react-html-parser';
import PoolIcon from '@material-ui/icons/Pool';
import ListAltIcon from '@material-ui/icons/ListAlt';

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%"
  },
  subCard: {
    minWidth: "92%",
    maxWidth: "92%",
    margin: 20,
  },
  cardMedia: {
    width: '100%',
    paddingTop: '100%', // 16:9
  },
  font: {
    position: "absolute",
    top: "35%",
    width: "100%",
    textAlign: "center",
    color: "white",
    textDecoration: 'underline',
  },
  carousel: {
    width: '45vmin',
    height: '100%',
    justifyContent: 'center',
  },
  divider: {
    background: theme.palette.primary.main,
  },
}))


const HobbiesPaper = () => {
  const classes = useStyles()

  const leadership = [
    "Founded a LeetCode and Programming club in College, with about 10 weekly attendees",
    "Vice-President of Engineering Scholars Programme Committee",
    "Vice-President of College Student Committee (IT Committee)",
    "Project Head of Technology Community, OrcaTech, in college",
  ];

  const interests = [
    "Swim a lot",
    "Have a gym routine",
    "Blog about food on <a href='https://instagram.com/bryanwhl_food'>instagram</a>",
    "Solve leetcode and programming challenges online",
    "Play the double bass and bass guitar",
    "Volunteer at charity and community events",
    "Play League Of Legends"
  ];

  return (
    <Paper style={{backgroundColor: "#333533"}} elevation={0} flat>
      <Box display="flex" justifyContent="center" alignItems="center" id="projects" pt={6} mb={5}>
        <Typography variant="h4" style={{ textDecoration: 'underline' }}>
          Interests
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Box width="80%">
          <Grid 
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <Carousel className={classes.carousel}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia} image={SwimImage} />
                </Card>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia} image={BassImage} />
                </Card>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia} image={FoodImage} />
                </Card>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia} image={KattisImage} />
                </Card>
              </Carousel>
              <Box mb={5} />
            </Grid>
            <Grid item>
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <Grid container>
                  <Grid container item xs={12} sm={12} md={12} lg={6} display="flex" justifyContent="center">
                    <Card className={classes.subCard} style={{backgroundColor: "#242423"}} elevation={3}>
                      <CardContent>
                        <Box display="flex" justifyContent="center">
                          <Typography variant="h6" style={{fontWeight: 600}}>
                            <ListAltIcon style={{ fontSize: 18 }} />
                            &nbsp;Extracurricular
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems:'start'}}>
                          <ul>
                            {leadership.map(cca => {
                              return <li>
                                <Typography variant="subtitle2">
                                  {ReactHtmlParser(cca)}
                                  <br></br>
                                </Typography>
                              </li>
                            })}
                          </ul>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid container item xs={12} sm={12} md={12} lg={6} display="flex" justifyContent="center">
                    <Card className={classes.subCard} style={{backgroundColor: "#242423"}} elevation={3}>
                      <CardContent>
                        <Box display="flex" justifyContent="center">
                          <Typography variant="h6" style={{fontWeight: 600}}>
                            <PoolIcon style={{ fontSize: 18 }} />
                            &nbsp;Hobbies
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems:'start'}}>
                          <ul>
                            {interests.map(interest => {
                              return <li>
                                <Typography variant="subtitle2">
                                  {ReactHtmlParser(interest)}
                                  <br></br>
                                </Typography>
                              </li>
                            })}
                          </ul>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box pb={5} />
    </Paper>
  )
}

export default HobbiesPaper
