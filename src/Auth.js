// src/Auth.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const handleAuth = (e) => {
    e.preventDefault();
    // Simulated authentication logic
    setUser({ name: email.split('@')[0] }); // e.g. using part of the email as user name
    navigate('/home');
  };

  const handleSkip = () => {
    setUser({ name: 'Guest' });
    navigate('/home');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url("https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1350&q=80")` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 bg-white bg-opacity-90 p-10 rounded-xl shadow-2xl transform transition duration-500 hover:scale-105 w-full max-w-md">
        <h2 className="text-4xl font-bold mb-6 text-center text-orange-500 drop-shadow-md">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>
        <form onSubmit={handleAuth}>
          <div className="mb-5">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition duration-300 mb-4 shadow-lg"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <div className="flex justify-between text-sm">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 hover:underline focus:outline-none"
          >
            {isLogin ? 'New user? Sign up' : 'Already have an account? Login'}
          </button>
          <button
            onClick={handleSkip}
            className="text-green-500 hover:underline focus:outline-none"
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
