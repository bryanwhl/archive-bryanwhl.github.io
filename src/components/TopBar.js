import {Typography, IconButton, AppBar, Box, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';

const TopBar = () => {
    return (
        <div>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <Box display="fex" flexGrow={1}>
                        <CodeIcon />
                    </Box>
                    <IconButton>
                        <a href="https://www.github.com/bryanwhl">
                            <GitHubIcon />
                        </a>
                    </IconButton>
                    <IconButton>
                        <a href="https://www.instagram.com/bryanwhl">
                            <InstagramIcon />
                        </a>
                    </IconButton>
                    <IconButton>
                        <a href="https://www.facebook.com/bryanwhl1">
                            <FacebookIcon />
                        </a>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default TopBar
