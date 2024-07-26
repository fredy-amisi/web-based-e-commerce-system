import React, { useState } from "react";
import "../Css/login.css";
import Scrollbutton from "../Components/Scrollbutton";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost/sydney/Login.php", {
        username,
        password,
      });

      if (response.data.success) {
        // Check the role of the logged-in user
        if (response.data.role === "admin") {
          // Redirect to Admin Dashboard
          window.location.href = "/AdminDashboard";
        } else if (response.data.role === "farmer") {
          // Redirect to Farmers component
          window.location.href = "/FarmersDashboard";
        } else {
          // Normal user login
          alert("You have successfully logged in.");
          window.location.href = "/Dairy";
        }
      } else {
        // Login failed, display specific error message
        alert(response.data.error);
      }
    } catch (error) {
      console.error(error);
      alert("Invalid username or password.");
    }
  };

  return (
    <div>
      <div className="login-section">
        <h3>E-commerce System</h3>
        <p>Sign in to your account</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            Username :
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={handleInputChange}
              placeholder="Enter Your Username Here"
              required
            />
          </label>
          <label htmlFor="password">
            Password :
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              placeholder="Enter Your Password Here"
              required
            />
          </label>
          <div className="div-remember">
            <label htmlFor="checkbox">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <span>Remember Me</span>
            </label>
            <p>Forgot Your Password?</p>
          </div>
          <button 
            className="login_button" 
            type="submit" 
            id="login_button">
            <span>Login</span>
          </button>
          <p className="dont-p">
            Don't Have An Account? <a href="/Signup">Sign Up</a>
          </p>
        </form>
      </div>
      <Scrollbutton />
    </div>
  );
};

export default Login;
