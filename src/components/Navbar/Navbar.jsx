import React from "react";
import logo from "../../assets/logo.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  // const refes = () => {
  //   if (location.pathname.startsWith("/doctor")) {
  //     useNavigate("/my-booking");
  //   }
  // };
  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-auto mr-2" />
          <span className="font-bold text-xl text-gray-800">Phudu</span>
        </div>
        <div className="hidden md:flex space-x-7">
          <NavLink to="/" className="text-gray-600 hover:text-blue-500">
            Home
          </NavLink>
          <NavLink
            // onClick={refes}
            to="/my-booking"
            className="text-gray-600 hover:text-blue-500"
          >
            My-Bookings
          </NavLink>
          <NavLink to="/blogs" className="text-gray-600 hover:text-blue-500">
            Blogs
          </NavLink>
          <NavLink to="/contact" className="text-gray-600 hover:text-blue-500">
            Contact us
          </NavLink>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-full font-bold py-2 px-4 focus:outline-none focus:shadow-outline">
          Emergency
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
