import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Skylearn</h1>
      <Link to="/login" className="bg-gray-300 text-black px-4 py-2 rounded-full hover:bg-white">Login</Link>
    </header>
  );
};

export default Header;