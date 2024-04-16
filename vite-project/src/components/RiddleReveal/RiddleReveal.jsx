import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";

const RiddleReveal = ({ progressToNextLevel })=> {
  const [boxes, setBoxes] = useState([false, false, false, false, false]);
  const emojis = ["💻", "🐞", "📖", "⚙️", "🚀"];
  const chosenBox = 1; // The index of the "bug" emoji which is the correct answer to the riddle

  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleClickBox = index => {
    if (index === chosenBox) {
      setIsCorrect(true);
      setShowFeedback(true);
      
      const newBoxes = [...boxes];
      newBoxes[index] = true;
      setBoxes(newBoxes);
  
      setTimeout(() => {
        handleCompletion();
      }, 1500);  // Delay the completion message to let the user see they've found the treasure
    } else {
      setIsCorrect(false);
      setShowFeedback(true);
      
      const newBoxes = [...boxes];
      newBoxes[index] = true;
      setBoxes(newBoxes);

      setTimeout(() => {
        newBoxes[index] = false;  // Reset the clicked box state after 1 second
        setBoxes(newBoxes);
        setShowFeedback(false);   // Hide feedback after 1 second
      }, 1000);
    }
  };
  

  const handleCompletion = () => {
    // console.log("Congratulations! You've completed the treasure hunt!");
    // You can also trigger an animation or effect here
    progressToNextLevel();
  };

  return (
    <div className="bg-gradient-to-t flex-col from-lime-50 to-sky-100 min-w-screen min-h-screen flex items-center justify-center"> 
      <div className="absolute top-0 left-0 ml-4 mt-4">
        <Link to="/" className="absolute top-0 left-0 ml-4 mt-4">
          <IoHome className="text-2xl" />
        </Link>
      </div>
    
      <h2 className="text-4xl mt-6 mb-4 font-semibold text-blue-950">Riddle <span className="text-yellow-500">Reveal</span></h2>
      <p className=" text-yellow-500 mt-6  text-2xl mb-4 ">Answer the riddle related to coding and select the right digital box.</p>
      <strong className="text-red-500">
      <p className="text-lg riddle mb-4">The more you code, the more of me there is.<br />
      <p className='text-fuchsia-950'>I may be gone for now but you can’t get rid of me forever.<br /></p> 
        What am I?</p></strong>
      <div className="grid grid-cols-5 gap-4 ">
        {boxes.map((box, index) => (
          <div 
            key={index}
            className={`box p-8 bg-gray-200 flex items-center justify-center cursor-pointer border border-gray-300 ${box ? "opacity-50" : ""}`}
            onClick={() => handleClickBox(index)}
          >
            {(box && index === chosenBox) ? "🏆" : emojis[index]}  {/* Displays trophy if correct box is clicked */}
          </div>
        ))}
      </div>
      {showFeedback && (
        <div className={`mt-4 text-lg font-bold ${isCorrect ? "text-green-500" : "text-red-500"}`}>
          {isCorrect ? "A bug. That's Correct!" : "Wrong Answer, Try Again!"}
        </div>
      )}
    </div>
    
  );
}

export default RiddleReveal;
