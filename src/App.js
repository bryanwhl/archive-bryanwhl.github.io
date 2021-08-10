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
import ProjectsContainer from "./components/Projects/ProjectsContainer.js"

// Pet Social Pictures Import
import PetSocialLogo from "./images/pet-social/pet-social-logo.jpg"
import PetSocialScreenshotOne from "./images/pet-social/pet-social-ss1.png"
import PetSocialScreenshotTwo from "./images/pet-social/pet-social-ss2.png"
import PetSocialScreenshotThree from "./images/pet-social/pet-social-ss3.png"
import PetSocialScreenshotFour from "./images/pet-social/pet-social-ss4.png"
import PetSocialScreenshotFive from "./images/pet-social/pet-social-ss5.png"

// NUSMods Timetable Generator Pictures Import
import NUSModsTimetableLogo from "./images/nusmods-generator/nusmods-generator.png"

// DSO Pictures Import
import DSOScreenshotOne from "./images/dso/dso-ss1.png"
import DSOScreenshotTwo from "./images/dso/dso-ss2.png"
import DSOScreenshotThree from "./images/dso/dso-ss3.png"
import DSOLogo from "./images/dso/dso-logo.png"

// SBN Cookhouse Pictures Import
import SBNCookhouseLogo from "./images/sbn-cookhouse/sbn-cookhouse-logo.jpg"

// parkWhere Pictures Import
import ParkWhereLogo from "./images/parkWhere/parkwhere.png"

// NUS Statistics Pictures Import
import NusStatisticsLogo from "./images/nus-statistics/nus-statistics.png"

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

  let data = {
    projects: [{
      projectName: "Pet Social (Orbital 2021)",
      projectLogo: PetSocialLogo,
      projectDescription: "Pet Social is a social media platform built for <u>pet owners</u> to congregate and exchange information about owning a pet. It aims to eventually centralize and digitize every needs of a pet owner for their convenience.",
      projectStack: "React (Material-UI Library), Node.js, Express.js, MongoDB, GraphQL, Apollo Client",
      projectScreenshots: [PetSocialScreenshotOne, PetSocialScreenshotTwo, PetSocialScreenshotThree, PetSocialScreenshotFour, PetSocialScreenshotFive]
    },
    {
      projectName: "DSO Search Engine",
      projectLogo: DSOLogo,
      projectDescription: "Full-stack developer internship project for DSO. Worked on creating a Search Engine UI in vue.js, and a microservice for video and audio transcription.",
      projectStack: "Vue.js (Vuetify UI Library), Node.js, Express.js, Java Backend, ElasticSearch Database, Docker, Prometheus, Grafana",
      projectScreenshots: [DSOScreenshotOne, DSOScreenshotTwo, DSOScreenshotThree]
    },
    {
      projectName: "SBN Cookhouse Bot",
      projectLogo: SBNCookhouseLogo,
      projectDescription: "Developed a telegram bot that serves more than 500 daily users, providing functionality for checking daily food menu of SAF Cookhouses",
      projectStack: "Python, Telegram Bot API, SQLAlchemy, JavaScript",
      projectScreenshots: []
    }],
    hackathons: [{
      projectName: "Hack & Roll 2021 - parkWhere?",
      projectLogo: ParkWhereLogo,
      projectDescription: "Pet Social is a social media platform built for <u>pet owners</u> to congregate and exchange information about owning a pet. It aims to eventually centralize and digitize every needs of a pet owner for their convenience.",
      projectStack: "React (Material-UI Library), Node.js, Express.js, MongoDB, GraphQL, Apollo Client",
      projectScreenshots: []
    },
    {
      projectName: "NUS Data Science Competition 2021",
      projectLogo: NusStatisticsLogo,
      projectDescription: "Full-stack developer internship project for DSO. Worked on creating a Search Engine UI in vue.js, and a microservice for video and audio transcription.",
      projectStack: "Vue.js (Vuetify UI Library), Node.js, Express.js, Java Backend, ElasticSearch Database, Docker, Prometheus, Grafana",
      projectScreenshots: []
    },
    {
      projectName: "Hack & Roll 2021 - Timetable Generator",
      projectLogo: NUSModsTimetableLogo,
      projectDescription: "Developed a telegram bot that serves more than 500 daily users, providing functionality for checking daily food menu of SAF Cookhouses",
      projectStack: "Python, Telegram Bot API, SQLAlchemy, JavaScript",
      projectScreenshots: []
    }]
  }

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
            <Route path="/projects">
              <ProjectsContainer data={data}/>
            </Route>
            <Route path="/">
              <HomeContainer data={data}/>
            </Route>
          </Switch>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
