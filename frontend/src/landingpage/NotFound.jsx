import React from "react";
import { Link } from "react-router-dom"; // if you're using React Router

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-gray-800">
      {/* Logo Centered */}
      <div className="mb-8">
        <img src="/media/logo.svg" alt="Logo" className="h-16 w-auto" />
      </div>

      {/* Big 404 Text */}
      <h1 className="text-8xl font-bold text-red-500 mb-4">404</h1>

      {/* Message */}
      <p className="text-2xl font-semibold mb-2 text-center">
        Oops! Page not found.
      </p>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Go Home Button */}
      <Link
        to="/"
        className="px-6 py-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
