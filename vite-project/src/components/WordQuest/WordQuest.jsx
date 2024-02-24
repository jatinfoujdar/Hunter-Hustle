import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";

function WordQuest() {
  const [selectedWord, setSelectedWord] = useState("");
  const [selectedPositions, setSelectedPositions] = useState([]);

  const wordsToFind = [
    "CODE",
    "HOST",
    "DATABASE",
    "DEVNOTES",
    "SERVER",
    "DOMAIN",
    "HTML",
    "NETWORK",
    "WEB",
    "JAVASCRIPT",
  ];

  const [foundWords, setFoundWords] = useState([]);

  const grid = [
    ["A", "C", "O", "D", "E", "F", "G", "S", "C", "R", "I", "N"],
    ["H", "H", "L", "S", "P", "X", "J", "K", "T", "W", "E", "B"],
    ["J", "R", "W", "D", "B", "T", "Y", "U", "I", "T", "A", "T"],
    ["A", "A", "C", "O", "E", "V", "S", "N", "W", "R", "V", "B"],
    ["D", "D", "V", "M", "A", "I", "E", "O", "T", "H", "O", "S"],
    ["N", "A", "H", "A", "S", "T", "R", "E", "R", "E", "G", "A"],
    ["J", "T", "J", "I", "S", "K", "V", "L", "M", "T", "H", "H"],
    ["A", "A", "D", "N", "G", "C", "E", "E", "R", "T", "Y", "O"],
    ["Q", "B", "E", "R", "T", "Y", "R", "I", "O", "P", "L", "S"],
    ["Z", "A", "C", "V", "B", "N", "M", "I", "W", "E", "R", "T"],
    ["Y", "S", "I", "O", "P", "A", "S", "D", "P", "G", "H", "J"],
    ["H", "E", "K", "L", "D", "E", "V", "N", "O", "T", "E", "S"],
  ];

  const [letterColors, setLetterColors] = useState(
    Array(grid.length)
      .fill()
      .map(() => Array(grid[0].length).fill("#00cec9"))
  );

  const isAdjacent = (lastPosition, newPosition) => {
    if (!lastPosition) return true;
    const [lastRow, lastCol] = lastPosition;
    const [newRow, newCol] = newPosition;
    return (
      Math.abs(newRow - lastRow) <= 1 && Math.abs(newCol - lastCol) <= 1
    );
  };

  const handleLetterClick = (letter, row, col) => {
    const lastPosition = selectedPositions[selectedPositions.length - 1];
    
    if (
      lastPosition &&
      lastPosition[0] === row &&
      lastPosition[1] === col &&
      selectedWord[selectedWord.length - 1] === letter
    ) {
      
      setSelectedWord(selectedWord.slice(0, -1));
      setSelectedPositions(selectedPositions.slice(0, -1));
      const newColors = [...letterColors];
      newColors[row][col] = "#00cec9"; 
      setLetterColors(newColors);
    } else {
      
      if (isAdjacent(lastPosition, [row, col])) {
        setSelectedWord((prev) => prev + letter);
        setSelectedPositions((prev) => [...prev, [row, col]]);
        const newColors = [...letterColors];
        newColors[row][col] = "green";
        setLetterColors(newColors);
      }
    }
  };

  const checkWord = () => {
    const newColors = [...letterColors];
    if (
      wordsToFind.includes(selectedWord.toUpperCase()) &&
      !foundWords.includes(selectedWord.toUpperCase())
    ) {
      setFoundWords((prev) => [...prev, selectedWord.toUpperCase()]);
      for (let pos of selectedPositions) {
        newColors[pos[0]][pos[1]] = "gold";
      }
    } else {
      for (let pos of selectedPositions) {
        newColors[pos[0]][pos[1]] = "#00cec9";
      }
    }
    setLetterColors(newColors);
    setSelectedWord("");
    setSelectedPositions([]);
  };

  return (
    <div className="bg-gradient-to-t flex-col from-lime-50 to-sky-100 min-w-screen min-h-screen flex items-center justify-center">
      <h1 className="text-4xl mt-6 mb-4 font-semibold text-blue-950">Welcome to Hunter Hustle App</h1>
      <div className="absolute top-0 left-0 ml-4 mt-4">
        <Link to="/" className="absolute top-0 left-0 ml-4 mt-4">
        <IoHome className="text-2xl" />
      </Link>
      </div>
      <h3 className="text-2xl mt-6 mb-4 font-semibold text-blue-950">
        Code Terminology Word <span className="text-yellow-500">Search</span>
      </h3>
      <h2 className="text-4xl p-4 font-bold text-center text-[#CFCFCF]"> </h2>
      <table className="table-auto">
        <tbody>
          {grid.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((letter, colIndex) => (
                <td
                  className="px-7 py-3 border font-bold"
                  key={colIndex}
                  style={{ backgroundColor: letterColors[rowIndex][colIndex] }}
                  onClick={() => handleLetterClick(letter, rowIndex, colIndex)}
                >
                  {letter}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3 className="font-extrabold text-lg text-[#dd9941]">
          Selected Word: {selectedWord}
        </h3>
        <button className="bg-yellow-500 p-2 mt-2 duration-150 hover:!border-b-2 text-blue-950 rounded-xl drop-shadow-lg group flex items-center border-2 border-b-4 border-blue-950 cursor-pointer active:bg-yellow-400" onClick={checkWord}>Submit Word</button>
      </div>
      <div>
        <h3 className="font-extrabold text-lg">Words to find:</h3>
        <div className="grid grid-cols-5 gap-4 justify-items-center mx-auto" style={{ width: 'calc(100% - 60px)', margin: '20px auto' }}>
          {wordsToFind.map((word, index) => (
            <div key={word} className={`word-item text-center font-bold ${foundWords.includes(word.toUpperCase()) ? 'line-through' : ''}`}>
              <p style={{ textDecoration: foundWords.includes(word.toUpperCase()) ? "line-through" : "none" }}>
                {word}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WordQuest;
