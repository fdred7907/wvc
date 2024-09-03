import * as React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ServicesGallery from './Components/ServicesGallery';
import Industry from './Components/Industry';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import {teal,lime,deepPurple} from '@mui/material/colors';

const darkTheme = createTheme({
  palette:{
    primary:teal,
    secondary:lime,
    info:deepPurple,
  },
  typography:{
    MuiButton:{
      color:'#ffaa22',
    }
  }

});


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <React.Fragment>
        <CssBaseline/>

        <Navbar/>
        <Hero/>
        <ServicesGallery/>
        <Industry/>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
