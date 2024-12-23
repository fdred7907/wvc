import * as React from 'react';
import './App.css';
import Navbar from './Components/Navbar';

import Blog from './Components/Blog';
import Home from './Components/Home';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import {teal,lime,deepPurple} from '@mui/material/colors';
import { Routes, Route }  from 'react-router-dom';
import About from './Components/About';
import Services from './Components/Services';

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
       
        <Routes>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>

        </Routes>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
