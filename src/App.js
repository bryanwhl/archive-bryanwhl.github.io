import Header from './components/Header'
import TopBar from './components/TopBar'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { blue, purple } from '@material-ui/core/colors'

const custom_theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[400],
    },
    secondary: {
      main: purple[400],
    }
  },
  typography: {
    fontSize: 20,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})

function App() {
  return (
    <div className='container' width="fluid">
      <ThemeProvider theme = {custom_theme}>
        <TopBar />
        <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
