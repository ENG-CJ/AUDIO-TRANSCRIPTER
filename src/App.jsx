import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import TranscriptionPage from './TranscriptionPage';

function App() {
  return (
  <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/live-transcription" element={<TranscriptionPage mode="live" />} />
        <Route path="/audio-transcription" element={<TranscriptionPage mode="audio" />} />
      </Routes>
      <Footer />
    </Router>
     
  </>
  );
}

export default App;
