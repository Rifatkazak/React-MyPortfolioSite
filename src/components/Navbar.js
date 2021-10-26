import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { makeStyles } from '@mui/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root :{
    buttons: {
      marginRight : "12rem",   
  },
  navlink : {
    textDecoration : "none"
  }
}
  
}));

export function Navbar() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="fixed"  className = {classes.NavbarContainer} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rifat KAZAK
          </Typography>
          <div className={{ root: classes.buttons}}>
            <NavLink to="/" style={{ textDecoration: 'none',color: 'inherit' }} >
            <Button color="inherit"  >About Me</Button></NavLink> 
            <NavLink to="/Projects" style={{ textDecoration: 'none',color: 'inherit' }}><Button color="inherit">Projects</Button></NavLink> 
            <NavLink to="/Comments" style={{ textDecoration: 'none',color: 'inherit' }}><Button color="inherit">Comments</Button></NavLink>
            <NavLink to="/Contacts" style={{ textDecoration: 'none',color: 'inherit' }} ><Button color="inherit">Contacts</Button></NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
