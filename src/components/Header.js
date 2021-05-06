import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const Header = () => {
    return (
        <Box bgcolor="primary.main">
            <Container>
                <h1>bryanwhl</h1>
                <Button variant="contained" color="secondary">
                    Primary
                </Button>
            </Container>
        </Box>
    )
}

export default Header
