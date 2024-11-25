import React, { useState } from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const SignTotal = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-primary">
      <div className="bg-blue-300 p-8 rounded-lg shadow-lg w-96">
        <button
          onClick={toggleForm}
          className="text-sm mb-6 text-center block text-blue-900 underline"
        >
          {isSignIn ? '¿Do not have account? Sign Up' : '¿you already have an account? Inicia sesión'}
        </button>
        {isSignIn ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
};

export default SignTotal;
