import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    // Handle login logic here
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">Log In</button>
      </form>
      <NavLink className="navbar-brand fw-bold fw-4" to="/signup">
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("signup")}
      >
        Don't have an account? Register here.
      </button>
      </NavLink>
    </div>
  );
};

export default Login;
