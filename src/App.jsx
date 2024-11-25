import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Cities from './pages/Cities';
import PrivateRoute from './components/PrivateRoute'
import CitiesDetail from './pages/CitiesDetail';
import Header from './components/Header';
import SignTotal from './pages/SignTotal';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from './store/action/signIn';
import SignRoute from './components/SignRoute';


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
    console.log("error",error);
    
  }
}


function App() {
const dispatch = useDispatch()
let token = localStorage.getItem("token")
  if (token) {
    loginWithToken(token).then((user)=>{
      dispatch(setUser({user,token}))
    })
  }


  return (
    <Router>
      <div className="bg-primary min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<div><Hero /><Carousel /></div>} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/city" element={<CitiesDetail />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signTotal" element={<SignTotal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;













