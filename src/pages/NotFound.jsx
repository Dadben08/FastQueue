import React from "react";
import { Link } from "react-router-dom";
import { AlertCircle, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-xl">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-red-50 flex items-center justify-center">
            <AlertCircle className="w-12 h-12 text-[#f61b10]" />
          </div>
        </div>

        <h1 className="text-7xl md:text-8xl font-extrabold text-gray-900">
          404
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800">
          Page not found
        </h2>

        <p className="mt-4 text-gray-600 leading-relaxed">
          The page you are looking for may have been moved, deleted,
          or the link you followed is incorrect.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#f61b10] text-white font-semibold hover:bg-red-700 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to home
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition"
          >
            Contact support
          </Link>
        </div>

        <p className="mt-10 text-sm text-gray-400">
          FastQueue • Smart Queue Management
        </p>
      </div>
    </div>
  );
};

export default NotFound;