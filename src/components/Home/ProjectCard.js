import React from 'react'
import { Card, CardContent, Dialog, Grid, withStyles, CardActionArea, Typography, makeStyles, CardMedia } from '@material-ui/core';
import ReactHtmlParser from 'react-html-parser';
import ProjectSection from '../Projects/ProjectSection.js'

const useStyles = makeStyles((theme) => ({
  media: {
    width: '100%',
    paddingTop: '50.25%', // 16:9
  },
  cardMedia: {
    width: '100%',
    paddingTop: '84%', // 16:9
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
    textAlign: 'center',
    width: theme.spacing(46),
    height: theme.spacing(46),
  }
}))

const DarkTextTypography = withStyles({
  root: {
    color: "#263238"
  }
})(Typography);

const ProjectCard = ({ project }) => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <Grid item align="center" xs={12} md={6} lg={4}>
      <Card className={classes.portfolioCards} style={{backgroundColor: '#d9feff'}}>
        <CardActionArea onClick={handleClickOpen}>
          <CardMedia
            className={classes.cardMedia}
            image={project.projectLogo}
          />
          <CardContent>
            <DarkTextTypography variant="body1" component="h2" gutterBottom>
              {ReactHtmlParser(project.projectName)}
            </DarkTextTypography>
            {/* <DarkTextTypography variant="inherit">
              {ReactHtmlParser(projectDescription)}
              <br></br><br></br>
              <b>Tech Stack: </b> 
              {ReactHtmlParser(projectStack)}
            </DarkTextTypography> */}
          </CardContent>
        </CardActionArea>
        <Dialog fullWidth maxWidth='lg'
 onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
          <ProjectSection project={project} handleClose={handleClose} />
        </Dialog>
      </Card>
    </Grid>
  )
}

export default ProjectCard
