import React from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-hero-pattern bg-cover bg-center h-96 flex flex-col justify-center items-center text-center text-white p-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">MyTinerary</h1>
      <p className="text-lg sm:text-xl md:text-2xl mt-4">Find your perfect trip, designed by insiders who know and love their cities!</p>
      
      <NavLink
        to="/cities"
        className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full inline-flex items-center shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        <span className="ml-2">Explore the World And Discover Cities</span>
      </NavLink>
    </section>
  );
};

export default Hero;

