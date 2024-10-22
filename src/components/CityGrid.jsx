import React, { useEffect, useState } from 'react';

const CityGrid = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/cities/all')
    .then(response => response.json())
    .then(data => {
      if (data && data.response) {
        setCities(data.response);
      }
    })
    .catch(error => console.error('Error fetching cities:', error));
    
  }, []);
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4">
      {cities.map((city, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
          <img src={city.photo} alt={city.name} className="w-full h-40 object-cover sm:h-48 md:h-56 lg:h-64 xl:h-72" />
          <div className="p-3">
            <h3 className="text-center text-lg font-semibold text-gray-800">{city.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CityGrid