import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core';
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
                    <GitHubIcon />
                    <InstagramIcon />
                    <FacebookIcon />
                    <EmailIcon />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default TopBar
