import React, { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom'; 

const CityGrid = () => {
  const navigate = useNavigate()
  const [cities, setCities] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); 

  useEffect(() => {
    if(searchQuery === '') {
      fetch('http://localhost:8080/api/cities/all')
      .then(response => response.json())
      .then(data => {
        if (data && data.response) {
          setCities(data.response);
        }
      })
      .catch(error => console.error('Error fetching cities:', error));
    } else {
      fetch(`http://localhost:8080/api/cities/all?name=${searchQuery}`) 
      .then(response => response.json())
      .then(data => {
        if (data && data.response) {
          setCities(data.response);
        }
      })
      .catch(error => console.error('Error fetching cities:', error));
    }
    
  }, [searchQuery]);

  const handlerSearch = (even) => {
    setSearchQuery(even.target.value);
  }
  const handlerNavigate = (city) => {
    navigate('/city',{state:city})
  }
  return (
    <div className="p-4">
      <div className="mb-6">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder='Enter a Text'
          onChange={(e) => handlerSearch(e) }
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {cities.length === 0 ? (
          <p className="text-center text-white bg-blue-500 p-4">There are no cities with that letter.</p>
        ) : ''}
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

