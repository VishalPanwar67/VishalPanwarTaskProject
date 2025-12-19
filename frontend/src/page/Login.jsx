import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import "./Login.css";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login Attempted");
    // Add login logic here later
  };

  return (
    <div className="page-container">
      <Navbar />

      <main className="login-content">
        <div className="login-card">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <Button text="Sign In" type="primary" />
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
