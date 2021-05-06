import { Typography, Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CodeIcon from '@material-ui/icons/Code';

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

    return (
        <Box className={classes.outerBox}>
            <Box className={classes.innerBox}>
                <Container maxWidth="sm">
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                    <CodeIcon />
                    Bryan Wong
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        trying this out lol
                    </Typography>
                </Container>
            </Box>
        </Box>
    )
}

export default Header
