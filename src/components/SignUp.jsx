import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpRegister } from "../store/action/signUp.js";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    dispatch(
      signUpRegister({
        name,
        lastname,
        email,
        password,
        url: photo,
        country,
      })
    );

    
    navigate("/signIn");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-800">
      <form
        className="bg-blue-400 p-8 rounded-lg shadow-lg w-full max-w-xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

        <div className="mb-4">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastname" className="text-sm font-medium text-gray-700">
            Lastname
          </label>
          <input
            type="text"
            id="lastname"
            className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="photo" className="text-sm font-medium text-gray-700">
            Photo
          </label>
          <input
            type="text"
            id="photo"
            className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="country" className="text-sm font-medium text-gray-700">
            Country
          </label>
          <select
            id="country"
            className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          >
            <option value="">Select a country</option>
            <option value="United States">United States</option>
            <option value="Argentina">Argentina</option>
            <option value="Colombia">Colombia</option>
            <option value="México">México</option>
            <option value="Japan">Japan</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="Spain">Spain</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-950 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;



