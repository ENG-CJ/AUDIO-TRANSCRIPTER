import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" sx={{background:"#021526"}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Transcir
        </Typography>
        <Button color="inherit">Sign Up</Button>
        <Button color="inherit">Sign In</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
