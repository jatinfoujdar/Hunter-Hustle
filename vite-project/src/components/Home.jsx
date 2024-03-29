import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import { LuFileJson2 } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const Home = () => {
  const [progress, setProgress] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const updateProgress = (newProgress) => {
    setProgress(newProgress);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); 
  };

  return (
    <div className='bg-gradient-to-t flex-col from-lime-50 to-sky-100 relative'>
    <div className='p-4'>
      {isSidebarOpen ? (
        <IoClose className='h-7 w-7 absolute  z-10 ' onClick={toggleSidebar} />
      ) : (
        <TiThMenu className='h-5 w-5' onClick={toggleSidebar} />
      )}
    </div>
    {isSidebarOpen && (
    <a href="/json" className="absolute top-8 left-0 w-60 rounded-md bg-white shadow h-screen flex ">
    <LuFileJson2 className='h-8 w-8 m-8' />
    <p className=" mt-8 text-md">JSON Parser</p>
    
  </a>
  
  
    )}
    <div className="flex flex-col items-center justify-center h-screen ">
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
    </div>
  );
}

export default Home;
