import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, UserCircle2 } from 'lucide-react';

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = () => {
    setClick(!click);
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  const handleSignIn = () => {
    setShowUserMenu(false);
    navigate('/signIn');
  };

  const handleSignUp = () => {
    setShowUserMenu(false);
    navigate('/signUp');
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setShowUserMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-slate-900">
      <div className="h-[10vh] flex justify-between items-center px-4 md:px-8 lg:px-20">
       
        <div className="flex items-center space-x-3">
          <span className="text-3xl font-bold text-white">MyTinerary</span>
        </div>

       
        <div className="hidden lg:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-900'
                : 'text-blue-200 hover:text-blue-600 transition border-b-2 border-transparent hover:border-blue-600'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/cities"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600'
                : 'text-blue-200 hover:text-blue-600 transition border-b-2 border-transparent hover:border-blue-600'
            }
          >
            Cities
          </NavLink>
        </div>

      
        <div className="flex items-center space-x-4">
      
          <div className="relative flex items-center" ref={userMenuRef}>
            <button
              onClick={toggleUserMenu}
              className="flex items-center space-x-2 focus:outline-none"
              aria-label="User menu"
            >
              {isLoggedIn ? (
                <img
                  src="https://via.placeholder.com/40"
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <>
                  <UserCircle2 className="text-white w-8 h-8 hover:text-blue-400 transition-colors duration-200" />
                  <span className="text-white text-sm hidden md:inline hover:text-blue-400 transition-colors duration-200">
                    Login
                  </span>
                </>
              )}
            </button>

         
            {showUserMenu && (
              <div
                className="absolute right-0 top-[120%] w-48 bg-blue-300 rounded-md shadow-lg py-1 z-10"
              >
                {!isLoggedIn ? (
                  <>
                    <button
                      onClick={handleSignIn}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-200 transition-colors duration-200"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={handleSignUp}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-200 transition-colors duration-200"
                    >
                      Sign Up
                    </button>
                  </>
                ) : (
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    Sign Out
                  </button>
                )}
              </div>
            )}
          </div>

    
          <button
            className="lg:hidden"
            onClick={handleClick}
            aria-label={click ? 'Close menu' : 'Open menu'}
          >
            {click ? (
              <X className="text-white w-6 h-6" />
            ) : (
              <Menu className="text-white w-6 h-6" />
            )}
          </button>
        </div>
      </div>


      {click && (
        <div className="lg:hidden bg-slate-800 transition-all ease-in-out duration-300">
          <ul className="flex flex-col items-center space-y-6 p-6">
            <NavLink
              to="/"
              onClick={handleClick}
              className="text-white hover:text-blue-400 transition-colors duration-200"
            >
              Home
            </NavLink>
            <NavLink
              to="/cities"
              onClick={handleClick}
              className="text-white hover:text-blue-400 transition-colors duration-200"
            >
              Cities
            </NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
