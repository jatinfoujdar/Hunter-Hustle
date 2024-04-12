import { Link } from 'react-router-dom'
import { IoHome } from 'react-icons/io5'
import React from 'react'

const CodeTrivia = () => {
  return (
    
    <div className="bg-gradient-to-t flex-col from-lime-50 to-sky-100 min-w-screen min-h-screen flex items-center justify-center"> 
    <div className="absolute top-0 left-0 ml-4 mt-4">
     <Link to="/" className="absolute top-0 left-0 ml-4 mt-4">
     <IoHome className="text-2xl" />
   </Link>
   </div>
     <h1 className="text-4xl mt-6 mb-4 font-semibold text-blue-950">Code  <span className="text-yellow-500">Trivia </span></h1>
     <p className="text-fuchsia-950 mt-6 mb-4 text-2xl">
        <strong className="text-red-500">Unlock the secret!</strong > Decode the encrypted message below to progress.</p>
     
     
     <br />
     
     
   </div>
   

  )
}

export default CodeTrivia