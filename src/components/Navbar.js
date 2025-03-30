// src/components/Navbar.js
import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setUser(null);
    // Optionally, you could redirect to the login page here.
  };

  return (
    <div className="flex max-w-[1240px] mx-auto items-center p-4 justify-between">
      <div className="cursor-pointer">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-4xl">Eatify</h1>
      </div>
      <div className="flex items-center">
        {/* Conditionally render based on whether user is logged in */}
        {!user && (
          <button className="bg-black text-white px-5 py-1 ml-2 h-10 w-[100px] rounded-md">
            Login
          </button>
        )}
        {user && (
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Hi, {user.name}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
