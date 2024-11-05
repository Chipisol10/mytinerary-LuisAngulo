import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom'; 
import { fetchCities, search } from '../store/action/actionCity';

const CityGrid = () => {
  const {cities,searchQuery} = useSelector(state => state.reducerCities)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchCities())
    dispatch(search(""))
  },[])
  
  const handlerNavigate = (city) => {
    navigate('/city',{state:city})
  }
  return (
  <div className="flex flex-col items-center p-4">
  <div className="mb-6 w-full max-w-md md:max-w-lg lg:max-w-xl">
    <input
      value={searchQuery}
      type="text"
      className="w-full p-2 border border-gray-300 rounded-lg"
      placeholder="Enter a Text"
      onChange={(e) => dispatch(search(e.target.value))}
    />
  </div>
  {cities.length === 0 ? (
    <p className="text-center text-white bg-blue-500 p-4 w-full max-w-md">
      There are no cities with that letter.
    </p>
  ) : ''}

    <div className={`grid gap-4 ${cities.length > 0 && cities.length <= 4 ? 'grid-cols-1 justify-center' : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'}`}>
   
        {cities.map((city, index) => (
          <div key={index} className="bg-blue-200 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
            <img src={city.photo} alt={city.name} className="w-full h-40 object-cover sm:h-48 md:h-56 lg:h-64 xl:h-72" />
            <div className="p-3 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{city.name}</h3>
             
                <button onClick={()=>handlerNavigate(city)} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  View Details
                </button>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityGrid;

