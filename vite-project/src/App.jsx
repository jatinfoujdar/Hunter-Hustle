import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WordQuest from "./components/WordQuest/WordQuest.jsx";
import Home from './components/Home.jsx';
import DecryptionChallenge from './components/DecryptionChallenge/DecryptionChallenge.jsx';

const App = () => {
  const [progress, setProgress] = useState(0); 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home progress={progress} setProgress={setProgress} />}  />
        <Route
          path="/wordquest"
          element={<WordQuest />}
        />
        <Route
          path="/decryption-challenge"
          element={<DecryptionChallenge progress={progress} setProgress={setProgress} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
