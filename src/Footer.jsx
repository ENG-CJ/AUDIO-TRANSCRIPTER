import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      sx={{ 
        bgcolor: '#021526', 
        color: "white",
        p: 3, 
        mt: 'auto', 
        position: 'fixed', 
        bottom: 0, 
        width: '100%' 
      }} 
      component="footer"
    >
      <Container maxWidth="lg">
        <Typography variant="body1">
          &copy; 2024 Transcription App, All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
