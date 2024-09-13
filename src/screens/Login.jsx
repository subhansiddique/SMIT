import React from "react";
import "./screen.css"; // Import the CSS file for styling
import "./screen.css";
import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "./database/firebace.config";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  function handleLogin(e) {
    setLoading(true);
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(async (response) => {
        const uid = response.user.uid;
        localStorage.setItem("user", uid);
 

        Swal.fire({
          title: "LogIn Complete",
          text: "Enjoy With Your Freinds",
          icon: "succes",
        });
        navigate("/home");

        // ...
      })
      .catch((error) => {
        Swal.fire({
          title: "Something Went Wrong!",
          text: error.message,
          icon: "error",
        });
        setLoading(false);
      });
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          {loading ? (
            <div className="loading-img">
              <img src="https://www.blogson.com.br/wp-content/uploads/2017/10/584b607f5c2ff075429dc0e7b8d142ef.gif" />
            </div>
          ) : (
            <button type="submit" onClick={handleLogin} className="login-btn">
              Login
            </button>
          )}
        </form>
        <p className="register-text">
          <a href="/Signup">signup?</a> Forget Password
        </p>
      </div>
    </div>
  );
};

export default Login;
