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
import WorkContainer from "./components/Work/WorkContainer.js"
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

// Past company logos import
import DSO from "./images/dsotransparent.png"
import ProtosLabs from "./images/protoslabs.png"
import SAF from "./images/saf.png"

let customTheme = createTheme({
  palette: {
    primary: {
      // Grey
      main: '#242423',
    },
    secondary: {
      // Teal
      main: '#ffd166',
    },
    background: {
      // Darker Grey
      default: '#242423',
      // Not-as-dark Grey
      paper: '#242423'
    },
    text: {
      primary: "#e8eddf"
    },
    mode: 'dark',
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
  },
  shape: {
    borderRadius: 20,
  },
  subColor: {
    color: '#000000'  
  },
})

customTheme = responsiveFontSizes(customTheme)

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    minHeight: "100vh",
    maxHeight: "101vh",
    backgroundImage: `url(${BackgroundImage})`
  },
  protoslabsCardMedia: {
    width: '100%',
    paddingTop: '84%', // 16:9
  },
  dsoCardMedia: {
    width: '100%',
    paddingTop: '57%', // 16:9
  },
  safCardMedia: {
    width: '100%',
    paddingTop: '108%', // 16:9
  },
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
      projectDescription: "Pet Social is a social media platform built for pet owners to congregate and exchange information about owning a pet. It aims to digitize every needs of a pet owner for their convenience and to create a global community of pet owners. At its current state, Pet Social is a full-fledged social media site with vast features implemented. The project is also well documented. The project attained the highest level of achievement for Orbital Programme 2021, an indepedent software engineering project programme by NUS.",
      projectStack: "React (Material-UI Library), Node.js, Express.js, MongoDB, GraphQL, Apollo Client, Jest.js, Amazon Web Services EC2",
      projectLink: "https://github.com/bryanwhl/pet-social",
      projectScreenshots: [PetSocialScreenshotOne, PetSocialScreenshotTwo, PetSocialScreenshotThree, PetSocialScreenshotFour, PetSocialScreenshotFive]
    },
    {
      projectName: "DSO Search Engine",
      projectLogo: DSOLogo,
      projectDescription: "Created a Search Engine and a dockerized microservice for video and audio transcription for my summer internship at DSO National Laboratories. Also built a dashboard with metrics and charts that shows the health of the microservice. This project was done over a summer internship at DSO National Laboratories.",
      projectStack: "Vue.js (Vuetify UI Library), Node.js, Express.js, Java Backend, Elasticsearch Database, Docker, Prometheus, Grafana",
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
      projectLink: "https://archive.ics.uci.edu/ml/datasets/Facebook+Comment+Volume+Dataset",
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
      projectDescription: "A web application + telegram bot that automates the welfare distribution system within college. The web application serves as a dashboard for an administrator to manage welfare events and to perform any administrative tasks required for a welfare event. The telegram bot is meant for college residents to sign up for welfare and to automate any administrative tasks required from the residents.",
      projectStack: "React (React-Bootstrap UI), Node.js, Python, Flask, SQLite Database, REST API",
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
      projectDescription: "Created a model that automates supply chain tasks with Computer Vision algorithms (e.g. Feature Matching, Hough Transform, Image Thresholding). Team emerged as a finalist team, clinching the Top 10 position of the competition out of more than 260 teams.",
      projectStack: "Python, opencv2",
      projectLink: "https://github.com/bryanwhl/nus-data-science-competition-2021",
      projectScreenshots: [NusStatisticsScreenshotOne, NusStatisticsScreenshotTwo]
    },
    {
      projectName: "Hack & Roll 2021 - Timetable Generator",
      projectLogo: NUSModsTimetableLogo,
      projectDescription: "Built a web app that generates an optimized timetable for an NUS student based on his/her customization and preferences. Worked primarily on the frontend of the application.",
      projectStack: "HTML, CSS, Bootstrap, Python, Flask",
      projectLink: "https://devpost.com/software/nusmods-timetable-generator",
      projectScreenshots: [NUSModsTimetableLogo, NUSModsScreenshotOne]
    }],
    work: [
      {
        companyName: "Protos Labs",
        date: "Aug 2021 - Dec 2021",
        companyLogo: ProtosLabs,
        logoStyles: classes.protoslabsCardMedia,
        description: [
          "Worked alongside 2 cofounders in a pre-seed stage Cybersecurity startup doing web development, backend development and architecture development",
          "Worked with various AWS technologies to implement authentication, microservices and to automate workflows",
          "Worked on React and Redux to develop the frontend user interface of the product",
          "Worked on solving diverse challenges and problems, including algorithmic problems and Machine Learning problems"
        ]
      },
      {
        companyName: "DSO National Laboratories",
        date: "May 2021 - July 2021",
        companyLogo: DSO,
        logoStyles: classes.dsoCardMedia,
        description: [
          "Built a full Search Engine user interface with Vue.js, Vuex store and Vuetify library",
          "Built a dockerized microservice that provides functionality for Video and Audio transcription using Node.js, Express.js, HTTP requests and REST APIs",
          "Worked with Elasticsearch and Java for the system’s backend",
          "Built a dashboard that charts the metric of a Docker container with Prometheus and Grafana"
        ]
      },
      {
        companyName: "Singapore Armed Forces (Conscription)",
        date: "Apr 2018 - Apr 2020",
        companyLogo: SAF,
        logoStyles: classes.safCardMedia,
        description: [
          "Built a telegram bot that serves more than 500 daily users, providing functionality for checking canteen menu daily",
          "Explored and tested Computer Vision algorithms for image processing and noise removal, followed by using tesseract OCR for text extraction",
          "Worked on the backend of a web application that provides navigation functionality on a map",
          "Automated processes and workflows on Microsoft Excel using VBA"
        ]
      }
    ],
    leadership: [
      "Founded a LeetCode and Programming club in College, with about 10 weekly attendees",
      "Vice-President of Engineering Scholars Programme Committee",
      "Vice-President of College Student Committee (IT Committee)",
      "Project Head of Technology Community, OrcaTech, in college",
    ],
    interests: [
      "Swim a lot",
      "Have a gym routine",
      "Blog about food on <a href='https://instagram.com/bryanwhl_food' style='color:orange'>instagram</a>",
      "Solve leetcode and programming challenges online",
      "Play the double bass and bass guitar",
      "Volunteer at charity and community events",
      "Play League Of Legends"
    ]
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
                <WorkContainer data={data} />
              </Route>
              <Route path="/">
                <HomeContainer data={data} loading={loading}/>
              </Route>
            </Switch>
          </ThemeProvider>
        </div>
      </Fade>
    </Router>
    );
}

export default App;
