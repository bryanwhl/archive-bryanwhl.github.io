import React from 'react'
import { Card, CardContent, Grid, withStyles, CardActionArea, Typography, makeStyles, CardMedia } from '@material-ui/core';
import ReactHtmlParser from 'react-html-parser';

const useStyles = makeStyles((theme) => ({
  media: {
    width: '100%',
    paddingTop: '50.25%', // 16:9
  },
  cardMedia: {
    width: '100%',
    paddingTop: '50%', // 16:9
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
    textAlign: 'start',
    width: theme.spacing(46),
    height: theme.spacing(46),
  }
}))

const DarkTextTypography = withStyles({
  root: {
    color: "#263238"
  }
})(Typography);

const ProjectCard = ({ projectName, projectScreenshot, projectDescription, projectStack }) => {
  const classes = useStyles()

  return (
    <Grid item align="center" xs={12} md={6} lg={4}>
      <Card className={classes.portfolioCards} style={{backgroundColor: '#d9feff'}}>
        <CardActionArea>
          <CardMedia
            className={classes.cardMedia}
            image={projectScreenshot}
          />
          <CardContent>
            <DarkTextTypography variant="h5" component="h2" gutterBottom>
              {ReactHtmlParser(projectName)}
            </DarkTextTypography>
            <DarkTextTypography variant="inherit">
              {ReactHtmlParser(projectDescription)}
              <br></br><br></br>
              <b>Tech Stack: </b> 
              {ReactHtmlParser(projectStack)}
            </DarkTextTypography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default ProjectCard
