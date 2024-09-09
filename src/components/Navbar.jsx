// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "../movieLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 flex space-x-8 items-center pl-3 py-4">
      <img className="w-[50px] mt-1" src={Logo}></img>
      <Link to="/" className="text-blue-500 text-3xl font-bold">
        Home
      </Link>
      <Link to="/watchlist" className="text-blue-500 text-3xl font-bold">
        WatchList
      </Link>
    </div>
  );
};

export default Navbar;
