import React from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-hero-pattern bg-cover bg-center h-screen flex flex-col justify-center items-center text-center text-white p-4">
      <div className="absolute  md:h-[1050px]  lg:h-[950px]  inset-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D"
          alt="Travel destinations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">MyTinerary</h1>
        <p className="text-lg sm:text-xl md:text-2xl mt-4 max-w-2xl">
          Find your perfect trip, designed by insiders who know and love their cities!
        </p>
        <NavLink
          to="/cities"
          className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full inline-flex items-center shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <span className="ml-2">Explore the World And Discover Cities</span>
        </NavLink>
      </div>
    </section>
  );
};

export default Hero;


