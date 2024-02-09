import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WordQuest from "./components/WordQuest/WordQuest.jsx";
import Home from './components/Home.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wordquest" element={<WordQuest />} />
      </Routes>
    </Router>
  );
}

export default App;
