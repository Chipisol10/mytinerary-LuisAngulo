import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cities from './pages/Cities';
import PrivateRoute from './components/PrivateRoute'
import CitiesDetail from './pages/CitiesDetail';
import SignTotal from './pages/SignTotal';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from './store/action/signIn';

import MainLayout from './components/MainLayout';

import Principal from "./components/Principal"


const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Principal></Principal>,
      },
      {
        path: "/home",
        element: <Principal></Principal>,
      },
      {
        path: "/cities",
        element: (
       
            <Cities></Cities>
        





        ),
      },
      {
        path: "/city",
        element: <CitiesDetail></CitiesDetail>,
      },
      {
        path: "/signIn",
        element: (

          <SignIn></SignIn>

        ),
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signTotal",
        element: <SignTotal></SignTotal>,
      },
    ],
  },

]);

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
}


function App() {
  const dispatch = useDispatch()
  let token = localStorage.getItem("token")
  if (token) {
    loginWithToken(token).then((user) => {
      dispatch(setUser({ user, token }))
    })
  }

  return <RouterProvider router={router} />;
}
export default App;








