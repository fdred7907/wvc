import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import EmailDialog from './EmailDialog';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" color="secondary" sx={{ flexGrow: 1 }}>
            <Link href='/' color="inherit">
              Home
            </Link>
          </Typography>
          <Typography variant="h6" component="div" color="secondary" sx={{ flexGrow: 1 }}>
            <Link href="/services" color="inherit">
              Services
            </Link>
          </Typography>
          <Typography variant="h6" component="div" color="secondary" sx={{ flexGrow: 1 }}>
            <Link href="/about" color="inherit">
              About Us
            </Link>
          </Typography>
          <Typography variant="h6" component="div" color="secondary" sx={{ flexGrow: 1 }}>
            <Link href="/blog" color="inherit">
              Blog
            </Link>
          </Typography>
          <EmailDialog/>
        </Toolbar>
      </AppBar>
      
    </Box>
  );
}