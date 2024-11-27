import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const loginWithToken = async (token) => {
  try {

    console.log("se ejecuto Login With Token");

    const response = await axios.get("http://localhost:8080/api/auth/validateToken",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data.response;

  } catch (error) {
    console.log("error", error);

  }
};


const Home = () => {

    
    const navigate = useNavigate()
    const dispatch = useDispatch()

   useEffect(()=> {
    const params = new URLSearchParams(window.location.search)
    const token = params.get("token")
    if (token) {
      localStorage.setItem("token",token)

    
        loginWithToken(token).then((user) => {
          dispatch(setUser({ user, token }))
        });
      }
      navigate("/")
 },[dispatch])
    



  return (
    <div 
      className="p-8 h-screen bg-cover bg-center flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-white drop-shadow-lg mb-4">Cities</h1>
      <p className="text-xl text-white drop-shadow-md">This is where the city search will go.</p>
    </div>
  );
};

export default Home;