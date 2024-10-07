import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import { IoPersonCircleSharp } from "react-icons/io5"; 

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="bg-slate-900">
      <div className='h-[10vh] flex justify-between items-center px-4 md:px-8 lg:px-20'>
        <div className='flex items-center space-x-3'>
          <img 
            src="data:image/jpeg;base64,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" 
            alt="Logo" 
            className='w-10 h-10 rounded-full object-cover' 
          />
          <span className='text-3xl font-bold text-white'>
            MyTinerary
          </span>
        </div>
        
        <div className='hidden lg:flex items-center space-x-8'>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-blue-600' : 'hover:text-blue-600 transition border-b-2 border-transparent hover:border-blue-600'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/cities"
            className={({ isActive }) =>
              isActive ? 'text-blue-600' : 'hover:text-blue-600 transition border-b-2 border-transparent hover:border-blue-600'
            }
          >
            Cities
          </NavLink>
        </div>

        <div className='flex items-center space-x-4'>
          {isLoggedIn ? (
            <img
              src='https://via.placeholder.com/40' 
              alt='User'
              className='w-10 h-10 rounded-full object-cover'
            />
          ) : (
            <IoPersonCircleSharp className="text-3xl text-white" aria-label="User profile" />
          )}

          <button 
            className='lg:hidden' 
            onClick={handleClick} 
            aria-label={click ? "Close menu" : "Open menu"}
          >
            {click ? <FaTimes className="text-white"/> : <CiMenuFries className="text-white"/>}
          </button>
        </div>
      </div>

      {click && (
        <div className='lg:hidden bg-white-500 transition ease-in-out duration-300'>
          <ul className='flex flex-col items-center space-y-6 p-6'>
            <NavLink to="/" onClick={handleClick} className="text-white">
              Home
            </NavLink>
            <NavLink to="/cities" onClick={handleClick} className="text-white">
              Cities
            </NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
