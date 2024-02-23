import React, { useState } from "react";

function JsonParser() {
  const [jsonInput, setJsonInput] = useState("");
  const [isValid, setIsValid] = useState(null);

  const handleInputChange = (event) => {
    setJsonInput(event.target.value);
  };

  const handleParseJson = () => {
    try {
      JSON.parse(jsonInput);
      setIsValid(true);
    } catch (error) {
      setIsValid(false);
    }
  };

  return (
    <div className="bg-gradient-to-t flex-col from-lime-50 to-sky-100 min-w-screen min-h-screen flex items-center justify-center">
      <h1 className="text-2xl mt-6 mb-4 font-semibold text-blue-950">JSON <span className="text-yellow-500">Parser</span> </h1>
      <textarea className="block p-2 text-md  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500   "
        value={jsonInput}
        onChange={handleInputChange}
        placeholder="Enter JSON here"
        rows={10}
        cols={50}
      />
      <br />
      <button className="bg-yellow-500 p-2 mt-2 duration-150 hover:!border-b-2 text-blue-950 rounded-xl drop-shadow-lg group flex items-center border-2 border-b-4 border-blue-950 cursor-pointer active:bg-yellow-400" onClick={handleParseJson}>Parse JSON</button>
      {isValid === true && <p className="text-4xl mt-6 mb-4 font-semibold text-blue-950">Valid JSON</p>}
      {isValid === false && <p className="text-4xl mt-6 mb-4 font-semibold text-red-800">Invalid JSON</p>}
    </div>
  );
}

export default JsonParser;
