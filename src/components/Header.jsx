import React, { useEffect } from 'react';
import NavBar from './NavBar'; 
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../store/action/actionCity.js';
import { loginIN } from '../store/action/signIn.js';

const Header = () => {
  const { searchQuery} = useSelector(state => state.reducerCities)
  const dispatch = useDispatch()
  //login de Prueba
  const {user,loading,error,token} = useSelector(state => state.reducerLogin)
  console.log("Users",user,"loading",loading,"error",error,"token",token);
  
  useEffect(()=>{
    dispatch(loginIN({email:"luis103@gmail.com",password:"luis102"}))
  },[])
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

