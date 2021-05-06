import Header from './components/Header'
import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { blue, green, purple } from '@material-ui/core/colors'

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
  },
})

function App() {
  return (
    <div className='container'>
      <ThemeProvider theme = {custom_theme}>
        <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
