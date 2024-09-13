import React, { useEffect } from "react";
import "./screen.css"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";

const Loading = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const userId = await localStorage.getItem("userId");
    setTimeout(() => {
      if (userId !== null) {
        navigate("/home");
      } else {
        navigate("/login");
      }
    }, 2000);
  };

  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <h2>Loading...</h2>
    </div>
  );
};

export default Loading;
