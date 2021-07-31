import { Typography, Box, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    outerBox: {
        backgroundColor:"#00FFFF",
        height:"300px"
    },
    innerBox: {
        height:"150px",
        backgroundPosition:"center",
        backgroundrepeat:"no-repeat",
        backgroundSize:"cover",
        position:"relative",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"#000000",
        fontSize:"4rem",
    }
}))

const Header = () => {
    const classes = useStyles();

    // return (
    //     // <Box className={classes.outerBox}>
    //     //     <Grid>
    //     //         <img src={Image} width="1440px" height="960px" />
    //     //     </Grid>
    //     //     <Box className={classes.innerBox}>
    //     //         <Container maxWidth="sm">
    //     //             <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
    //     //             <br></br><i>Bryan Wong</i>
    //     //             </Typography>
    //     //             <Typography variant="h5" align="center" color="textSecondary" paragraph>
    //     //                 trying this out lol
    //     //             </Typography>
    //     //         </Container>
    //     //     </Box>
    //     // </Box>
    // )
}

export default Header
