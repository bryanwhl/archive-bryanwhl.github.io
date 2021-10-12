import React from 'react'
import Work from './Work.js'
import WorkSmall from './WorkSmall.js'
import { Card, Grid, CardHeader, withStyles, Hidden, List, ListItemText, Tooltip, IconButton, ListItem, ListItemSecondaryAction, ListItemAvatar, ListItemIcon, Paper, Typography, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, CardContent, Avatar, makeStyles, Divider, CardMedia, CardActionArea } from '@material-ui/core';

const WorkParent = () => {
  return (
    <div>
      <Hidden smUp>
        <WorkSmall />
      </Hidden>
      <Hidden xsDown>
        <Work />
      </Hidden>
    </div>
  )
}

export default WorkParent
