import React from 'react'
import WorkSMUp from './WorkSMUp.js'
import WorkXSDown from './WorkXSDown.js'
import { Card, Grid, CardHeader, withStyles, Hidden, List, ListItemText, Tooltip, IconButton, ListItem, ListItemSecondaryAction, ListItemAvatar, ListItemIcon, Paper, Typography, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, CardContent, Avatar, makeStyles, Divider, CardMedia, CardActionArea } from '@material-ui/core';

const WorkContainer = ({ data }) => {
  return (
    <div>
      <Hidden smUp>
        <WorkXSDown data={data} />
      </Hidden>
      <Hidden xsDown>
        <WorkSMUp data={data} />
      </Hidden>
    </div>
  )
}

export default WorkContainer
