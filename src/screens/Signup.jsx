import "./screen.css";
import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "./database/firebace.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = (props) => {
  console.log("🚀 ~ Signup ~ props:", props);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSignup(e) {
    setLoading(true);
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (response) => {
        const uid = response.user.uid;
        const userdata = { name, email, uid };
        localStorage.setItem("user", response.user.uid);
        await setDoc(doc(db, "users", uid), userdata);

        Swal.fire({
          title: "Signup Complete",
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

  // Function to handle form submission

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Signup</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Full Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              className="email"
              placeholder="Enter your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          {loading ? (
            <div className="loading-img">
              <img src="https://www.blogson.com.br/wp-content/uploads/2017/10/584b607f5c2ff075429dc0e7b8d142ef.gif" />
            </div>
          ) : (
            <button type="submit" className="login-btn" onClick={handleSignup}>
              Signup
            </button>
          )}
        </form>
        <p className="register-text">
          <a href="/Login">login?</a>Forget Password
        </p>
      </div>
    </div>
  );
};

export default Signup;
