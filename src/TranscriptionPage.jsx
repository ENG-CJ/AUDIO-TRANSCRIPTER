import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Paper, LinearProgress, Alert } from '@mui/material';

const TranscriptionPage = ({ mode }) => {
  const [transcribedText, setTranscribedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [duration, setDuration] = useState(10);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type !== 'audio/wav') {
      setError('Only .wav files are allowed.');
      setFile(null);
    } else {
      setError('');
      setFile(selectedFile);
    }
  };

  const handleTranscription = async () => {
    setTranscribedText("");
    if (mode === 'audio' && !file) {
      setError('Please upload a .wav file.');
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append('audio', file);
    let response;

    if (mode === 'live') {
      response = await fetch('http://localhost:5000/start-live-transcription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ duration }),
      });
    } else {
      const formData = new FormData();
      formData.append('audio', file);

      response = await fetch('http://localhost:5000/transcribe', {
        method: 'POST',
        body: formData,
      });
    }

    const data = await response.json();
    if(data.error) {
      setError(data.error);
    }
    setTranscribedText(data.transcription);
    setIsLoading(false);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        color: 'white',
        pt: 2,
        pb: 2,
        backgroundImage: 'url("../../a3.jfif")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: 'calc(100vh - 32px)',
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
          zIndex: 1,
        },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ mt: 3 }}>
          <Typography variant="h4" gutterBottom>
            {mode === 'live' ? 'Live Transcription' : 'Pre-recorded Audio Transcription'}
          </Typography>

          <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          {mode === 'live' && (
              <TextField
                label="Duration (seconds)"
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                fullWidth
                variant="outlined"
                sx={{ mb: 3 }}
              />
            )}
            {mode === 'audio' && (
              <>
                <input
                  type="file"
                  accept=".wav"
                  onChange={handleFileChange}
                  style={{ marginBottom: '16px' }}
                />
                {error && <Alert severity="error">{error}</Alert>}
              </>
            )}

           
              <TextField
                label="Transcribed Text Will Appear Here"
                multiline
                fullWidth
                rows={10}
                value={transcribedText}
                variant="outlined"
                InputProps={{
                  readOnly: true,
                }}
              />
              {isLoading && (
              <>
                <LinearProgress sx={{mt: 2}} />
                <Typography>Please Wait, Processing Your Audio..</Typography>
              </>
              )}
           
          </Paper>

          <Button
            variant="contained"
            color="primary"
            onClick={handleTranscription}
            disabled={isLoading}
          >
            {mode === 'live' ? 'Start Live Transcription' : 'Transcribe Audio'}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TranscriptionPage;
