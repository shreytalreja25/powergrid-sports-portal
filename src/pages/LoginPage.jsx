import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css"; // Import the custom CSS file
import axios from "axios";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // API call to the login endpoint
      const response = await axios.post("http://localhost:5234/api/Auth/login", formData);

      if (response.status === 200) {
        console.log("Login Successful:", response.data);

        // Store user details in localStorage
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("firstName", response.data.firstName);
        localStorage.setItem("lastName", response.data.lastName);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("role", response.data.role);

        // Redirect to the dashboard
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Login Failed:", err);
      // Handle error response
      setError(err.response?.data?.message || "Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <div className="text-center mb-4">
          <h2>Sports Portal Logo</h2>
        </div>
        <h4 className="text-center mb-3">Login to Sports Portal</h4>
        {error && (
          <div className="alert alert-danger text-center" role="alert">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="m@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-dark w-100">
            Sign In
          </button>
        </form>
        <div className="text-center mt-3">
          <span>New User? </span>
          <Link to="/register" className="text-primary">
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
