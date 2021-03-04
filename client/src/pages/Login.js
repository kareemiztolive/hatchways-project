import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login(props) {
  const [email, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="backgroundcolor">
        <h1 className="title">Converse with anyone with any language</h1>
      </div>

      <div>
        <h2 className="title2"> Don't have an account?</h2>
      </div>

      <div>
        <Link to="/signup">
          <button className="button1">Create Account</button>
        </Link>
      </div>

      <div>
        <h2 className="title3">Welcome Back!</h2>
      </div>

      <form>
        <input
          className="inputcontainer1"
          placeholder="E-mail address"
          type="email"
          required
          onChange={(e) => setEmailAddress(e.target.value)}
        />

        <input
          className="inputcontainer2"
          placeholder="Password"
          type="password"
          required
          minLength="6"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="button2">Login</button>
      </form>
    </div>
  );
}

export default Login;
