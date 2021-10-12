import React from 'react'
import ProjectImage from "../../images/project.jpg"
import WorkImage from "../../images/work.jpg"
import AvatarImage from "../../images/avatar.jpg"
import ProjectCard from "./ProjectCard.js"
import { Card, Grid, CardHeader, withStyles, Hidden, List, ListItemText, Tooltip, IconButton, ListItem, ListItemSecondaryAction, ListItemAvatar, ListItemIcon, Paper, Typography, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, CardContent, Avatar, makeStyles, Divider, CardMedia, CardActionArea } from '@material-ui/core';
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
import EmailIcon from '@material-ui/icons/Email';
import CropPortraitIcon from '@material-ui/icons/CropPortrait';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import { CopyToClipboard } from "react-copy-to-clipboard";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%"
  },
  subCard: {
    minWidth: "50vmin",
    maxWidth: "50vmin",
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

const ContactMe = () => {
  const classes = useStyles()
  const [copy, setCopy] = React.useState(0);

  const handleCopy = (state) => {
    setCopy(state);
    setTimeout(() => {
      setCopy(0);
    },1000);
  }

  return (
    <Paper style={{backgroundColor: "#f7fffe"}} elevation={0} flat square>
      <Box display="flex" justifyContent="center" alignItems="center" id="projects" pt={10} mb={2}>
        <Typography variant="h4" style={{ textDecoration: 'underline' }}>
          Contact Me
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Box width="50vmin">
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <EmailIcon />
                </Avatar>
              </ListItemAvatar>
              <Hidden smDown>
                <ListItemText
                  primary="bryanwhl1999@gmail.com"
                />
              </Hidden>
              <Hidden mdUp>
                <ListItemText
                  primary="Email"
                />
              </Hidden>
              <CopyToClipboard
                text={"bryanwhl1999@gmail.com"}
                onCopy={() => handleCopy(1)}
              >
                <ListItemSecondaryAction>
                  <Tooltip title={copy === 1 ? "Copied!" : "Copy"} aria-label="add">
                    <IconButton edge="end" aria-label="delete">
                      <CropPortraitIcon />
                    </IconButton>
                  </Tooltip>
                </ListItemSecondaryAction>
              </CopyToClipboard>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PhoneIphoneIcon />
                </Avatar>
              </ListItemAvatar>
              <Hidden smDown>
                <ListItemText
                  primary="+65 9385 8356"
                />
              </Hidden>
              <Hidden mdUp>
                <ListItemText
                  primary="Contact"
                />
              </Hidden>
              <CopyToClipboard
                text={"+6593858356"}
                onCopy={() => handleCopy(2)}
              >
                <ListItemSecondaryAction>
                  <Tooltip title={copy === 2 ? "Copied!" : "Copy"} aria-label="add">
                    <IconButton edge="end" aria-label="delete">
                      <CropPortraitIcon />
                    </IconButton>
                  </Tooltip>
                </ListItemSecondaryAction>
              </CopyToClipboard>
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box pb={5} />
    </Paper>
  )
}

export default ContactMe
