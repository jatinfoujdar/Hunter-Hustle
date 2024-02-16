import React, { useState } from 'react';

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
        <h1 className="text-4xl mt-6 mb-4 font-semibold text-blue-950">Decryption  <span className="text-yellow-500">Challenge</span></h1>
        <p className="text-fuchsia-950 text-2xl"><strong className="text-red-500">Unlock the secret!</strong > Decode the encrypted message below to progress.</p>
        <p className="matrix-style">{cipheredMessage}</p>
        <textarea
          className="textarea"
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          placeholder="Decipher the message here"
          rows="3"
        />
        <br />
        {!isSuccess && !errorMessage && <button className="button" onClick={handleCompletion}>Decrypt and Submit</button>}
        {isSuccess && <div>Correct! You've deciphered the message.</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="mt-4 w-full bg-gray-300 h-4 rounded-full">
          <div className="bg-blue-500 h-full rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    );
}

export default DecryptionChallenge;
