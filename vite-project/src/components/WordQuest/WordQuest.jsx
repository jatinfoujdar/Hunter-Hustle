import { useState } from "react";

function App() {
  
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
      .map(() => Array(grid[0].length).fill("#CFCFCF"))
  );


  const isAdjacent = (lastPosition, newPosition) => {
    if (!lastPosition) return true;
    const [lastRow, lastCol] = lastPosition;
    const [newRow, newCol] = newPosition;
    return Math.abs(newRow - lastRow) <= 1 && Math.abs(newCol - lastCol) <= 1;
  };

  
  const handleLetterClick = (letter, row, col) => {
 
    if (
      isAdjacent(selectedPositions[selectedPositions.length - 1], [row, col])
    ) {
      setSelectedWord((prev) => prev + letter);
      setSelectedPositions((prev) => [...prev, [row, col]]);

     
      const newColors = [...letterColors];
      newColors[row][col] = "green";
      setLetterColors(newColors);
    }
  };

  
  const checkWord = () => {
    const newColors = [...letterColors];

   
    if (
      wordsToFind.includes(selectedWord) &&
      !foundWords.includes(selectedWord)
    ) {
      setFoundWords((prev) => [...prev, selectedWord]);

      
      for (let pos of selectedPositions) {
        newColors[pos[0]][pos[1]] = "gold";
      }
    } else {

      for (let pos of selectedPositions) {
        newColors[pos[0]][pos[1]] = "#CFCFCF";
      }
    }

   
    setLetterColors(newColors);
    setSelectedWord("");
    setSelectedPositions([]);
  };

  
  return (
    <div className="bg-gradient-to-t flex-col from-lime-50 to-sky-100 min-w-screen min-h-screen flex items-center justify-center">
    <h1 class="text-5xl mb-4 font-semibold text-blue-950">Code Terminology Word <span class="text-yellow-500">Search</span></h1>
     <h2 className=" text-4xl p-4 font-bold text-center text-[#CFCFCF]"> </h2>
      <table className="table-auto ">
        <tbody>
          {grid.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((letter, colIndex) => (
                <td className="px-6 py-2 border font-bold "
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
        <h3 className="font-extrabold text-lg text-[#dd9941] ">Selected Word: {selectedWord}</h3>
        <button className="bg-yellow-500 p-2 mt-2 duration-150 hover:!border-b-2 text-blue-950 rounded-xl drop-shadow-lg group flex items-center border-2 border-b-4 border-blue-950 cursor-pointer active:bg-yellow-400" onClick={checkWord}>Submit Word</button>
      </div>

   
      <div>
        <h3 className="font-extrabold text-lg  ">Words to find:</h3>
        <div className="grid grid-cols-5 gap-4 justify-items-center mx-auto" style={{ width: 'calc(100% - 60px)', margin: '20px auto' }}>
          {wordsToFind.map((word, index) => (
            <div key={word} className={`word-item text-center text-[#CFCFCF] ${foundWords.includes(word) ? 'line-through' : ''}`}>
              <p style={{ textDecoration: foundWords.includes(word) ? "line-through" : "none" }}>
                {word}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
