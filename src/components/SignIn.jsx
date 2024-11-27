import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/action/signIn.js';
import authReducer from '../store/reducer/signInReducer.js';
import { useNavigate, Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  console.log("Estado del Auth", auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8080/api/auth/signIn/google";
  };

  const loading = authReducer.loading;
  const error = authReducer.error;

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-800">
      <form
        className="bg-blue-400 p-10 rounded-lg shadow-lg w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>
        <div className="mb-6">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-950 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Sign In
        </button>
        <button
          type="button"
          className="w-full mt-4 bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-500 transition"
          onClick={handleGoogleLogin}
        >
          Sign In with Google
        </button>
        {loading && <p className="text-center text-teal-400">Loading....</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;



