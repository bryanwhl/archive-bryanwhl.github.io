import Header from './components/Header'
import TopBar from './components/TopBar'
import { ThemeProvider, createMuiTheme, responsiveFontSizes, makeStyles } from '@material-ui/core/styles'
import { blue, purple } from '@material-ui/core/colors'
import { Paper } from '@material-ui/core'
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BackgroundImage from "./images/background2.jpg"
import HomeContainer from "./components/Home/HomeContainer.js"

let customTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#607d8b',
    },
    secondary: {
      main: '#00bcd4',
    },
    background: {
      default: '#263238',
      paper: '#3f4443'
    },
    type: 'dark',
  },
  typography: {
    fontSize: 16,
    fontFamily: '"Open Sans"'
  }
})

customTheme = responsiveFontSizes(customTheme)

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    minHeight: "100vh",
    maxHeight: "101vh",
    backgroundImage: `url(${BackgroundImage})`
  }
}))

const styles = {
  paperContainer: {
    minHeight: "100vh",
    backgroundImage: `url(${BackgroundImage})`
  }
};

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div width="fluid">
        <ThemeProvider theme = {customTheme}>
          <CssBaseline />
          <TopBar />
          <Switch>
            <Route path="/about">
              {/* <Header /> */}
            </Route>
            <Route path="/users">
            </Route>
            <Route path="/">
              <HomeContainer />
            </Route>
          </Switch>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
