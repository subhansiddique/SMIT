import React from "react";
import { Link } from "react-router-dom";
import "./screen.css"; // Optional: For styling

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/home">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
