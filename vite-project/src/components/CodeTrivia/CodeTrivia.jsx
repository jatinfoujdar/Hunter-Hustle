import { Link } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import React, { useState } from 'react';

const questions = [
    {
      question: 'Who is known as the father of the World Wide Web?',
      options: ['Steve Jobs', 'Bill Gates', 'Tim Berners-Lee', 'Mark Zuckerberg'],
      correctAnswer: 2
    },
    {
      question: 'Which of these is NOT a way to store data in JavaScript?',
      options: ['Array', 'List', 'Object', 'Set'],
      correctAnswer: 1
    },
    {
      question: 'Which one is NOT a feature of Hostinger’s Premium Shared Hosting?',
      options: ['Free Domain', 'Weekly Backups', '100 Websites', 'Free Breakfast'],
      correctAnswer: 3
    }     
];

const CodeTrivia = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const question = questions[currentQuestion];

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Handle end of questions, e.g., show results or reset to first question
      setCurrentQuestion(0);
    }
  };

  return (
    <div className="bg-gradient-to-t flex-col from-lime-50 to-sky-100 min-w-screen min-h-screen flex items-center justify-center"> 
      <div className="absolute top-0 left-0 ml-4 mt-4">
        <Link to="/" className="absolute top-0 left-0 ml-4 mt-4">
          <IoHome className="text-2xl" />
        </Link>
      </div>
      <h1 className="text-4xl mt-6 mb-4 font-semibold text-blue-950">Code <span className="text-yellow-500">Trivia </span></h1>
      <p className="text-fuchsia-950 mt-6 mb-4 text-2xl">
        <strong className="text-red-500">From "Just Do It" </strong> to "I'm Lovin' It".
      </p>
      <div>
        <p>{question.question}</p>
        <ul>
          {question.options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </div>
      <button onClick={handleNextQuestion}>Next Question</button>
    </div>
  );
};

export default CodeTrivia;
