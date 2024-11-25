import React, { useEffect } from 'react';
import NavBar from './NavBar'; 
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../store/action/actionCity.js';

const Header = () => {
  const { searchQuery} = useSelector(state => state.reducerCities)
  const dispatch = useDispatch()
  useEffect (()=> {
    dispatch(fetchCities(searchQuery))
  },[searchQuery])
  return (
    <header className="bg-slate-900">
      <NavBar />
     </header>
  );
}

export default Header;
