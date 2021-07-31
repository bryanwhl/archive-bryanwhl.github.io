import {Typography, IconButton, AppBar, Box, Card, Link, CardActions, Button, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import { useHistory } from "react-router-dom";
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 60
  }
}))

const TopBar = () => {
  const classes = useStyles();
  let history = useHistory();

  return (
    <div>
      <AppBar position="relative">
          <Toolbar className={classes.root}>
            <Grid container spacing={1} alignItems="center" justify="flex-start" wrap="nowrap">
              <Button onClick={() => {history.push('/')}}>
                Home
              </Button>
              <Button onClick={() => {history.push('/about')}}>
                About
              </Button>
              <Button onClick={() => {history.push('/projects')}}>
                Projects
              </Button>
              <Button onClick={() => {history.push('/work')}}>
                Work
              </Button>
              <Button onClick={() => {history.push('/contact')}}>
                Contact
              </Button>
            </Grid>
            <Grid container spacing={1} alignItems="center" justify="flex-end" wrap="nowrap">
              <IconButton href="https://www.github.com/bryanwhl">
                <GitHubIcon />
              </IconButton>
              <IconButton href="https://www.instagram.com/bryanwhl">
                <InstagramIcon />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/bryan-wong-91b323156/">
                <LinkedInIcon />
              </IconButton>
              <IconButton href="https://www.facebook.com/bryanwhl1">
                <FacebookIcon />
              </IconButton>
            </Grid>
          </Toolbar>
      </AppBar>
    </div>
  )
}

export default TopBar
