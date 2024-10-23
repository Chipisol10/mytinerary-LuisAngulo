import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CitiesDetails = () => {
  const navigate = useNavigate(); 
   const location = useLocation()
   console.log(location.state) 
  return (
    <div 
      className="p-8 h-screen bg-cover bg-center flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-white drop-shadow-lg mb-4">City {location.state.name}</h1>
      <img src={location.state.photo} alt="" />
      <p className="text-center py-3 text-xl text-white drop-shadow-md mb-6">Sorry for the inconvenience but this page is currently being rebuilt to provide a pleasant experience </p>
      <button 
        onClick={() => navigate(-1)} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
      >
       Back to Cities
      </button>
    </div>
  );
};

export default CitiesDetails;