// CTA.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./CTA.css"; // Import the CSS file

const CTA = () => {
    return (
      // Home content is high contrast and stands out well against the background
      <div className="flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center my-4 tracking-wide">
          FastQueue <span className="text-gray-800">App</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl">
          Eliminate waiting lines. Pre-register your visit for any service, from
          banking to school appointments.
        </p>
        <Link
          // onClick={() => setCurrentPage('dashboard')}
          to="/regdashboard"
          className="bg-[#F4400D] text-white rounded-full font-semibold shadow-md border border-transparent hover:bg-transparent hover:text-[#F4400D] hover:border-[#F4400D] transition-all duration-300 py-4 px-12 text-lg inline-block"
          // className="bg-sky-500 hover:bg-sky-600 text-white font-extrabold py-4 px-12 text-lg rounded-full shadow-2xl shadow-sky-300 transition-all transform
          // hover:scale-105 focus:outline-none focus:ring-4 focus:ring-sky-500 focus:ring-opacity-50"
        >
          Join Queue
        </Link>
      </div>
    );
};

export default CTA;
