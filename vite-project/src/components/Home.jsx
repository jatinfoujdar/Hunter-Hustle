import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [progress, setProgress] = useState(0);
  const updateProgress = (newProgress) => {
    setProgress(newProgress);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#E6FCFF]">
      <div className="text-4xl font-bold text-[#008080] my-10">Welcome to Hunter Hustle App</div>
      <div className="grid grid-cols-2 gap-4 w-3/4">
        <Link to="/wordquest" className="flex flex-col items-center justify-center py-4 px-6 rounded-xl bg-[#FFCCE6] text-[#800000] font-semibold text-lg hover:bg-[#FF99CC] transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 mb-2"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
          Word Quest
        </Link>

        <Link to="/decryption-challenge" className="flex flex-col items-center justify-center py-4 px-6 rounded-xl bg-[#E6E6FA] text-[#000080] font-semibold text-lg hover:bg-[#CCCCFF] transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 mb-2">
            <path d="M5 12h14"></path>
          </svg>
          Decryption Challenge
        </Link>

        <Link to="/code-trivia" className="flex flex-col items-center justify-center py-4 px-6 rounded-xl bg-[#E6FAE6] text-[#008000] font-semibold text-lg hover:bg-[#CCFFCC] transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 mb-2">
            <circle cx="12" cy="6" r="1"></circle>
            <line x1="5" x2="19" y1="12" y2="12"></line>
            <circle cx="12" cy="18" r="1"></circle>
          </svg>
          Code Trivia
        </Link>

        <Link to="/riddle-reveal" className="flex flex-col items-center justify-center py-4 px-6 rounded-xl bg-[#FAE6E6] text-[#800000] font-semibold text-lg hover:bg-[#FFCCCC] transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 mb-2">
            <circle cx="12" cy="6" r="1"></circle>
            <line x1="5" x2="19" y1="12" y2="12"></line>
            <circle cx="12" cy="18" r="1"></circle>
          </svg>
          Riddle Reveal
        </Link>
      </div>
      <div className="mt-16 text-2xl font-bold text-[#008080]">Your Progress</div>
      <div className="w-3/4 h-2 bg-[#B3E0E6] rounded-full mt-4">
        
      <div className="h-full bg-[#008080] rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

export default Home;
