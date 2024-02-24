import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";

const DecryptionChallenge = ({ progressToNextLevel, progress, setProgress }) => {
    const [userInput, setUserInput] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
  
    const originalMessage = "Talk is cheap. Show me the code.";
    const cipheredMessage = originalMessage.split('').map(char => 
      char === ' ' ? ' ' : 
      char === '.' ? '.' : 
      String.fromCharCode(char.charCodeAt(0) + 3)
    ).join('');
  
    const handleCompletion = () => {
      if (userInput.trim() === originalMessage) {
        setIsSuccess(true);
        setTimeout(progressToNextLevel, 1500);
        setProgress(progress + 25); 
      } else {
        setErrorMessage('Wrong Answer. Try Again!');
        setTimeout(() => {
          setErrorMessage('');
        }, 3000);
      }
    };
  
    return (
      
      <div className="bg-gradient-to-t flex-col from-lime-50 to-sky-100 min-w-screen min-h-screen flex items-center justify-center"> 
       <div className="absolute top-0 left-0 ml-4 mt-4">
        <Link to="/" className="absolute top-0 left-0 ml-4 mt-4">
        <IoHome className="text-2xl" />
      </Link>
      </div>
        <h1 className="text-4xl mt-6 mb-4 font-semibold text-blue-950">Decryption  <span className="text-yellow-500">Challenge</span></h1>
        <p className="text-fuchsia-950 mt-6 mb-4 text-2xl"><strong className="text-red-500">Unlock the secret!</strong > Decode the encrypted message below to progress.</p>
        <p className="bg-black text-yellow-300 p-4 px-8 rounded-lg">{cipheredMessage}</p>
        <textarea
          className="mt-6 mb-4 block p-4 px-14  text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          placeholder="Decipher the message here"
          rows="3"
        />
        <br />
        
        {!isSuccess && !errorMessage && <button className="bg-yellow-500 p-2 mt-2 duration-150 hover:!border-b-2 text-blue-950 rounded-xl drop-shadow-lg group flex items-center border-2 border-b-4 border-blue-950 cursor-pointer active:bg-yellow-400" onClick={handleCompletion} >Decrypt and Submit</button>}
        {isSuccess && <div className='bg-black hover:bg-black text-yellow-500 font-bold py-2 px-4 rounded inline-flex items-center'>Correct! You've deciphered the message.</div>}
        {errorMessage && <div className='bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded inline-flex items-center'>{errorMessage}</div>}
        <div className="w-2/4 h-2  bg-[#B3E0E6] rounded-full mt-10 ">
        <div className="h-full bg-[#008080]  rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
      </div>
    );
}

export default DecryptionChallenge;
