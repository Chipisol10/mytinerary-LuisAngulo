import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6"; 

const cities = [
  { name: 'New York', img: 'https://media.istockphoto.com/id/1454217037/es/foto/estatua-de-la-libertad-y-horizonte-de-la-ciudad-de-nueva-york-con-el-distrito-financiero-de.webp?a=1&b=1&s=612x612&w=0&k=20&c=4pbxsG8hWCH8F6MHREDzs5iHNt3_PFZD8MTVvJogJVQ=' },
  { name: 'Paris', img:'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D ' },
  { name: 'Tokyo', img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8fDA%3D' },
  { name: 'Berlin', img: 'https://images.unsplash.com/photo-1546726747-421c6d69c929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlcmxpbnxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'London', img: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fExvbmRvbnxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Sydney', img: 'https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN5ZG5leXxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Rome', img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Um9tYXxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Barcelona', img: 'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmFyY2Vsb25hfGVufDB8fDB8fHww' },
  { name: 'Dubai', img: 'https://images.unsplash.com/photo-1489516408517-0c0a15662682?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RHViYWl8ZW58MHx8MHx8fDA%3D' },
  { name: 'Hong Kong', img: 'https://images.unsplash.com/photo-1604712312066-9b9433023576?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SG9uZyUyMGtvbmd8ZW58MHx8MHx8fDA%3D' },
  { name: 'Los Angeles', img: 'https://images.unsplash.com/photo-1518416177092-ec985e4d6c14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TG9zJTIwYW5nZWxlc3xlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Toronto', img: 'https://images.unsplash.com/photo-1507992781348-310259076fe0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VG9yb250b3xlbnwwfHwwfHx8MA%3D%3D' }
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 
    return () => clearInterval(interval); 
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + 3) % 3);
  };

  const slides = [
    cities.slice(0, 4),
    cities.slice(4, 8),
    cities.slice(8, 12),
  ];

  return (
    <div className="relative w-full max-w-screen-xl mx-auto my-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-2 lg:grid-rows-2">
        {slides[currentSlide].map((city, index) => (
          <div 
            key={index} 
            className="w-full flex-shrink-0 bg-gray-200"
          >
            <img 
              src={city.img} 
              alt={city.name} 
              className="w-full h-64 object-cover" 
            />
            <p className="text-center  bg-blue-400 text-lg font-semibold ">{city.name}</p>
          </div>
        ))}
      </div>

     
      <FaArrowLeft
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white opacity-70 hover:opacity-100 rounded-full p-2 cursor-pointer transition-opacity duration-300"
        size={30}
        onClick={prevSlide}
      />
      <FaArrowRight
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white opacity-70 hover:opacity-100 rounded-full p-2 cursor-pointer transition-opacity duration-300"
        size={30}
        onClick={nextSlide}
      />
    </div>
  );
};

export default Carousel;



