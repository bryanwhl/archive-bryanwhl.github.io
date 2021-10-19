import {Typography, IconButton, Divider, AppBar, Box, Hidden, Card, Link, CardActions, Button, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import { useHistory } from "react-router-dom";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/Home';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import AppsIcon from '@material-ui/icons/Apps';


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
      <AppBar position="fixed">
          <Toolbar style={{backgroundColor: "#26547c"}} className={classes.root}>
            <Grid container spacing={1} alignItems="center" justify="flex-start" wrap="nowrap">
              <Button onClick={() => {history.push('/')}}>
                <HomeIcon style={{ fontSize: 17 }} />
                <Typography variant="subtitle2">
                  &nbsp;Home
                </Typography>
              </Button>
              <Divider orientation="vertical" flexItem />
              <Button onClick={() => {history.push('/projects')}}>
                <AppsIcon style={{ fontSize: 17 }} />
                <Typography variant="subtitle2">
                  &nbsp;Projects
                </Typography>
              </Button>
              <Divider orientation="vertical" flexItem />
              <Button onClick={() => {history.push('/work')}}>
                <WorkOutlineIcon style={{ fontSize: 17 }} />
                <Typography variant="subtitle2">
                  &nbsp;Work  
                </Typography>
              </Button>
            </Grid>
            <Hidden smDown>
              <Grid container spacing={1} alignItems="center" justify="flex-end" wrap="nowrap">
                <IconButton href="https://www.github.com/bryanwhl">
                  <GitHubIcon style={{fill: "white"}} />
                </IconButton>
                <IconButton href="https://www.instagram.com/bryanwhl">
                  <InstagramIcon style={{fill: "white"}} />
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/bryan-wong-91b323156/">
                  <LinkedInIcon style={{fill: "white"}} />
                </IconButton>
                <IconButton href="https://www.facebook.com/bryanwhl1">
                  <FacebookIcon style={{fill: "white"}} />
                </IconButton>
              </Grid>
            </Hidden>
          </Toolbar>
      </AppBar>
    </div>
  )
}

export default TopBar
