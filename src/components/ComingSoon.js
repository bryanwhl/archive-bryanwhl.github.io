import React from 'react'
import { Card, Grid, withStyles, Paper, Typography, Box, Container, makeStyles, Divider, CardMedia } from '@material-ui/core';

const ComingSoon = () => {
  return (
    <Container maxWidth="lg">
      <Box mt={7}>
        <Paper style={{backgroundColor: "#3f4443"}} flat square>
          <Box mt={5} pt={10} mb={6} pb={1000} display="flex" justifyContent="center">
            <Typography variant="h1" id="hackathons">
              Section Coming Soon!
            </Typography>
          </Box>
          </Paper>
      </Box>
    </Container>
  )
}

export default ComingSoon
