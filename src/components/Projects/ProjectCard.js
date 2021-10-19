import React from 'react'
import ProjectSection from "./ProjectSection.js"
import { Card, CardActionArea, Grid, Dialog, withStyles, Paper, Fade, IconButton, Typography, Box, DialogTitle, Container, makeStyles, Divider, CardMedia } from '@material-ui/core';
import Header from "../Home/Header.js"
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: "50vmin",
    maxWidth: "50vmin",
    position: "relative",
    margin: 20,
    transition: "transform 0.15s ease-in-out",
  },
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)"
  },
  cardMedia: {
    width: '100%',
    paddingTop: '84%', // 16:9
    filter: "brightness(40%)",
  },
  font: {
    position: "absolute",
    top: "30%",
    width: "100%",
    padding: 4,
    textAlign: "center",
    color: "white",
    textDecoration: 'underline',
  }
}))

const ProjectCard = ({ project }) => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    raised:false,
    shadow:1,
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <Fade in={true}>
      <Box display="flex" justifyContent="center">
        <Grid container item xs={12} sm={12} md={12} lg={6} xl={4} display="flex" justifyContent="center">
          <Card 
            className={classes.card} 
            style={{backgroundColor: "#242423"}}
            classes={{root: state.raised ? classes.cardHovered : ""}}
            onMouseOver={()=>setState({ raised: true, shadow:3})} 
            onMouseOut={()=>setState({ raised:false, shadow:1 })} 
            raised={state.raised} zdepth={state.shadow}
          >
            <CardActionArea onClick={handleClickOpen}>
              <CardMedia
                className={classes.cardMedia}
                image={project.projectLogo}
              />
              <Typography
                gutterBottom
                variant="h6"
                component="h6"
                className={classes.font}
              >
                {project.projectName}
              </Typography>
            </CardActionArea>
            <Dialog maxWidth='lg' onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
              <DialogTitle id="id">
                <Box display="flex" alignItems="center">
                  <Box>
                    <IconButton onClick={handleClose}>
                      <CloseIcon style={{fill: "white"}} />
                    </IconButton>
                  </Box>
                  </Box>
                </DialogTitle>
              <ProjectSection project={project} handleClose={handleClose} />
            </Dialog>
          </Card>
        </Grid>
      </Box>
    </Fade>
  )
}

export default ProjectCard
