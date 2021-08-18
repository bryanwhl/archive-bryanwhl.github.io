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
import HackathonsContainer from "./components/Projects/HackathonsContainer.js"
import ComingSoon from "./components/ComingSoon.js"

// Pet Social Pictures Import
import PetSocialLogo from "./images/pet-social/pet-social-logo.jpg"
import PetSocialScreenshotOne from "./images/pet-social/pet-social-ss1.png"
import PetSocialScreenshotTwo from "./images/pet-social/pet-social-ss2.png"
import PetSocialScreenshotThree from "./images/pet-social/pet-social-ss3.png"
import PetSocialScreenshotFour from "./images/pet-social/pet-social-ss4.png"
import PetSocialScreenshotFive from "./images/pet-social/pet-social-ss5.png"

// NUSMods Timetable Generator Pictures Import
import NUSModsTimetableLogo from "./images/nusmods-generator/nusmods-generator.png"
import NUSModsScreenshotOne from "./images/nusmods-generator/nusmods-generator-ss1.png"

// DSO Pictures Import
import DSOScreenshotOne from "./images/dso/dso-ss1.png"
import DSOScreenshotTwo from "./images/dso/dso-ss2.png"
import DSOScreenshotThree from "./images/dso/dso-ss3.png"
import DSOLogo from "./images/dso/dso-logo.png"

// SBN Cookhouse Pictures Import
import SBNCookhouseLogo from "./images/sbn-cookhouse/sbn-cookhouse-logo.jpg"
import SBNCookhouseScreenshotTwo from "./images/sbn-cookhouse/sbn-cookhouse-ss1.png"

// parkWhere Pictures Import
import ParkWhereLogo from "./images/parkWhere/parkwhere.png"
import ParkWhereScreenshotOne from "./images/parkWhere/parkwhere-ss1.png"
import ParkWhereScreenshotTwo from "./images/parkWhere/parkwhere-ss2.png"

// NUS Statistics Pictures Import
import NusStatisticsLogo from "./images/nus-statistics/nus-statistics.png"
import NusStatisticsScreenshotOne from "./images/nus-statistics/nus-statistics-ss1.png"
import NusStatisticsScreenshotTwo from "./images/nus-statistics/nus-statistics-ss2.png"

let customTheme = createMuiTheme({
  palette: {
    primary: {
      // Grey
      main: '#607d8b',
    },
    secondary: {
      // Teal
      main: '#75FFFF',
    },
    background: {
      // Darker Grey
      default: '#263238',
      // Not-as-dark Grey
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
      projectStack: "React (Material-UI Library), Node.js, Express.js, MongoDB, GraphQL, Apollo Client, Jest.js",
      projectLink: "https://github.com/bryanwhl/pet-social",
      projectScreenshots: [PetSocialScreenshotOne, PetSocialScreenshotTwo, PetSocialScreenshotThree, PetSocialScreenshotFour, PetSocialScreenshotFive]
    },
    {
      projectName: "DSO Search Engine",
      projectLogo: DSOLogo,
      projectDescription: "Full-stack developer internship project for DSO. Worked on creating a Search Engine UI in vue.js, and a microservice for video and audio transcription.",
      projectStack: "Vue.js (Vuetify UI Library), Node.js, Express.js, Java Backend, ElasticSearch Database, Docker, Prometheus, Grafana",
      projectLink: "",
      projectScreenshots: [DSOScreenshotOne, DSOScreenshotTwo, DSOScreenshotThree]
    },
    {
      projectName: "SBN Cookhouse Bot",
      projectLogo: SBNCookhouseLogo,
      projectDescription: "A telegram bot that now serves more than 500 daily users, providing functionality for checking daily food menu of SAF Cookhouses.",
      projectStack: "Python, Telegram Bot API, SQLAlchemy, JavaScript",
      projectLink: "https://t.me/SBN_cookhouse_bot",
      projectScreenshots: [SBNCookhouseLogo, SBNCookhouseScreenshotTwo]
    }],
    hackathons: [{
      projectName: "Hack & Roll 2021 - parkWhere?",
      projectLogo: ParkWhereLogo,
      projectDescription: "parkWhere? is a cross-platform mobile application that uses real-time data to display lots availability in Singapore's carpark to users. The mobile application also uses Machine Learning to predict lot availabilities and trends.",
      projectStack: "Flutter, Dart, Google API",
      projectLink: "https://devpost.com/software/parkwhere",
      projectScreenshots: [ParkWhereScreenshotOne, ParkWhereScreenshotTwo]
    },
    {
      projectName: "NUS Data Science Competition 2021",
      projectLogo: NusStatisticsLogo,
      projectDescription: "Created a model that automates Computer Vision tasks as stated in the problem statement by the competition. Team emerged as a finalist team, clinching the Top 10 position of the competition out of more than 260 teams.",
      projectStack: "Python, opencv2",
      projectLink: "https://github.com/bryanwhl/nus-data-science-competition-2021",
      projectScreenshots: [NusStatisticsScreenshotOne, NusStatisticsScreenshotTwo]
    },
    {
      projectName: "Hack & Roll 2021 - Timetable Generator",
      projectLogo: NUSModsTimetableLogo,
      projectDescription: "A web app that generates an optimized timetable for an NUS student based on his/her customization and preferences. ",
      projectStack: "HTML, CSS, Bootstrap, Python, Flask",
      projectLink: "https://devpost.com/software/nusmods-timetable-generator",
      projectScreenshots: [NUSModsTimetableLogo, NUSModsScreenshotOne]
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
            <Route path="/work">
              <ComingSoon />
            </Route>
            <Route path="/contact">
              <ComingSoon />
            </Route>
            <Route path="/hackathons">
              <HackathonsContainer data={data}/>
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
