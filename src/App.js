import Header from './components/Header'
import TopBar from './components/TopBar'
import { ThemeProvider, createTheme, responsiveFontSizes, makeStyles } from '@material-ui/core/styles'
import { blue, purple } from '@material-ui/core/colors'
import { Paper, Box, Fade, Zoom, Fab } from '@material-ui/core'
import { css } from "@emotion/react";
import CssBaseline from "@material-ui/core/CssBaseline";
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BackgroundImage from "./images/background.jpg"
import HomeContainer from "./components/Home/HomeContainer.js"
import ProjectsContainer from "./components/Projects/ProjectsContainer.js"
import WorkParent from "./components/Work/WorkParent.js"
import ComingSoon from "./components/ComingSoon.js"
import Loader from "react-loader-spinner";

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
import DSOScreenshotFour from "./images/dso/dso-ss4.jpg"
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

// RC4FoodBud Pictures Import
import RC4FoodBudLogo from "./images/RC4FoodBud/rc4foodbud.jpg"
import RC4FoodBudScreenshotOne from "./images/RC4FoodBud/rc4foodbud-ss1.jpg"
import RC4FoodBudScreenshotTwo from "./images/RC4FoodBud/rc4foodbud-ss2.png"
import RC4FoodBudScreenshotThree from "./images/RC4FoodBud/rc4foodbud-ss3.png"

// Facebook Comments Pictures Import
import FacebookLogo from "./images/facebook-comments/FacebookLogo.png"
import FacebookScreenshotOne from "./images/facebook-comments/facebook-ss1.png"
import FacebookScreenshotTwo from "./images/facebook-comments/facebook-ss2.png"

// ModMan Pictures Import
import ModManLogo from "./images/modman/modman.png"
import ModManScreenshotOne from "./images/modman/modman-ss1.png"
import ModManScreenshotTwo from "./images/modman/modman-ss2.png"

// RC4 Welfare Pictures Import
import RC4WelfareLogo from "./images/rc4welfare/rc4welfare.png"
import RC4WelfareScreenshotOne from "./images/rc4welfare/rc4welfare-ss1.png"
import RC4WelfareScreenshotTwo from "./images/rc4welfare/rc4welfare-ss2.png"
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import React from 'react'

let customTheme = createTheme({
  palette: {
    primary: {
      // Grey
      main: '#34a0a4',
    },
    secondary: {
      // Teal
      main: '#b8f2e6',
    },
    background: {
      // Darker Grey
      default: '#ffffff',
      // Not-as-dark Grey
      paper: '#c9fbff'
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: [
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
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

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


function App() {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(true);
  const [color, setColor] = React.useState("#e1edeb");

  React.useEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  },[])

  let data = {
    projects: [{
      projectName: "Pet Social (Orbital 2021)",
      projectLogo: PetSocialLogo,
      projectDescription: "Pet Social is a social media platform built for pet owners to congregate and exchange information about owning a pet. It aims to digitize every needs of a pet owner for their convenience and to create a global community of pet owners.",
      projectStack: "React (Material-UI Library), Node.js, Express.js, MongoDB, GraphQL, Apollo Client, Jest.js",
      projectLink: "https://github.com/bryanwhl/pet-social",
      projectScreenshots: [PetSocialScreenshotOne, PetSocialScreenshotTwo, PetSocialScreenshotThree, PetSocialScreenshotFour, PetSocialScreenshotFive]
    },
    {
      projectName: "DSO Search Engine",
      projectLogo: DSOLogo,
      projectDescription: "Created a Search Engine and a dockerized microservice for video and audio transcription for my summer internship at DSO National Laboratories. Also built a dashboard with metrics and charts that shows the health of the microservice.",
      projectStack: "Vue.js (Vuetify UI Library), Node.js, Express.js, Java Backend, ElasticSearch Database, Docker, Prometheus, Grafana",
      projectLink: "",
      projectScreenshots: [DSOScreenshotOne, DSOScreenshotTwo, DSOScreenshotThree, DSOScreenshotFour]
    },
    {
      projectName: "SBN Cookhouse Bot",
      projectLogo: SBNCookhouseLogo,
      projectDescription: "Developed a telegram bot that now serves more than 500 daily users, providing functionality for checking daily food menu of canteens in the military.",
      projectStack: "Python, Telegram Bot API, SQLAlchemy, JavaScript",
      projectLink: "https://t.me/SBN_cookhouse_bot",
      projectScreenshots: [SBNCookhouseLogo, SBNCookhouseScreenshotTwo]
    },
    {
      projectName: "Facebook Comments Volume Prediction",
      projectLogo: FacebookLogo,
      projectDescription: "(Ongoing Project) Working on a Machine Learning project with a group of 5 to predict comment volume of facebook posts based on a set of characteristic of the facebook post. Currently working on implementing Neural Networks and a Multilayer perceptron model using scikit-learn,  as well as to experiment with other models to maximize the accuracy of the prediction.",
      projectStack: "Python, scikit-learn, Keras, pandas, NumPy",
      projectLink: "https://github.com/bryanwhl/facebook-comments",
      projectScreenshots: [FacebookScreenshotOne, FacebookScreenshotTwo]
    },
    {
      projectName: "ModMan",
      projectLogo: ModManLogo,
      projectDescription: "Short for Module Manager, ModMan is a desktop app designed to help teaching assistants manage their module(s). It is optimized for use via a Command Line Interface (CLI). ModMan helps to track module details as well as students’ progress and data, all in one platform.",
      projectStack: "Java",
      projectLink: "https://github.com/bryanwhl/ModMan",
      projectScreenshots: [ModManScreenshotOne, ModManScreenshotTwo]
    },
    {
      projectName: "RC4 Welfare System",
      projectLogo: RC4WelfareLogo,
      projectDescription: "A web application + telegram bot that automates the welfare distribution system within RC4. The web application serves as a dashboard for the administrator (Director of Welfare) to manage welfare events and to do any administrative tasks required for an event. The telegram bot is meant for RC4 residences to sign up for welfare and to automate any administrative tasks required from the residences.",
      projectStack: "React (React-Boostrap UI), Node.js, Python, Flask, SQLite Database, REST API",
      projectLink: "https://t.me/rc4welfarebot",
      projectScreenshots: [RC4WelfareScreenshotOne, RC4WelfareScreenshotTwo]
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
      projectDescription: "Created a model that automates supply chain tasks with Computer Vision algorithms (e.g. Feature Matching, Hough Transform, Thresholding). Team emerged as a finalist team, clinching the Top 10 position of the competition out of more than 260 teams.",
      projectStack: "Python, opencv2",
      projectLink: "https://github.com/bryanwhl/nus-data-science-competition-2021",
      projectScreenshots: [NusStatisticsScreenshotOne, NusStatisticsScreenshotTwo]
    },
    {
      projectName: "Hack & Roll 2021 - Timetable Generator",
      projectLogo: NUSModsTimetableLogo,
      projectDescription: "Built a web app that generates an optimized timetable for an NUS student based on his/her customization and preferences. Worked primary on the frontend of the application.",
      projectStack: "HTML, CSS, Bootstrap, Python, Flask",
      projectLink: "https://devpost.com/software/nusmods-timetable-generator",
      projectScreenshots: [NUSModsTimetableLogo, NUSModsScreenshotOne]
    }]
  }

  return loading === true ? (
  <Box display="flex" justifyContent="center" alignItems="center" width="100vw" height="100vh">
    <Loader
      type="Grid"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={2500} //3 secs
    />
  </Box>
  ) : (
    <Router>
      <Fade in={true}>
        <div width="fluid" className="App-background">
          <ThemeProvider theme = {customTheme}>
            <CssBaseline />
            <TopBar />
            <Switch>
              <Route path="/projects">
                <ProjectsContainer data={data}/>
              </Route>
              <Route path="/work">
                <WorkParent />
              </Route>
              <Route path="/">
                <HomeContainer loading={loading}/>
              </Route>
            </Switch>
          </ThemeProvider>
        </div>
      </Fade>
    </Router>
    );
}

export default App;
