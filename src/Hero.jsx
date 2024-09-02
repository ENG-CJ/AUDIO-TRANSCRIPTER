import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        color: 'white',
        pt: 8,
        pb: 6,
        backgroundImage: 'url("../../a3.jfif")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
              fontFamily: "Poppins-bold"
            }}
          >
            Transform Your{' '}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              style={{ color: "yellow" }}
            >
              Voice
            </motion.span>{' '}
            into{' '}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              style={{ color: "yellow" }}
            >
              Text
            </motion.span>
          </Typography>
        </motion.div>
        <Typography variant="h5" align="center" paragraph sx={{ fontSize: { xs: '1rem', md: '1.5rem' } }}>
          Harness the power of AI to seamlessly convert speech to text. Whether it’s live or pre-recorded, our tool delivers accurate and fast transcription.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              m: 1,
              px: 4,
              py: 2,
              fontSize: { xs: '1rem', md: '1.25rem' },
            }}
            href="/live-transcription"
          >
            Start Live Transcription
          </Button>
          <Button
            variant="outlined"
            color="info"
            sx={{
              m: 1,
              px: 4,
              py: 2,
              fontSize: { xs: '1rem', md: '1.25rem' },
              color: "white"
            }}
            href="/audio-transcription"
          >
            Upload Pre-recorded Audio
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
