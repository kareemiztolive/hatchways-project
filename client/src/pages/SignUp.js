import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../css/style.css";

function SignUp(props) {
  const [username, setUserName] = useState("");
  const [email, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  return (
    <div>
      <div className="backgroundcolor">
        <h1 className="title">Converse with anyone with any language</h1>
      </div>

      <div>
        <h2 className="title2"> Already Have an account?</h2>
      </div>

      <div>
        <Link to="/login">
          <button className="button1">Login</button>
        </Link>
      </div>

      <div>
        <h2 className="title3">Create an account.</h2>
      </div>

      <form>
        <input
          className="inputcontainer1"
          placeholder="Username"
          required
          onChange={(e) => setUserName(e.target.value)}
        />

        <input
          className="inputcontainer2"
          placeholder="Email Address"
          type="email"
          required
          onChange={(e) => setEmailAddress(e.target.value)}
        />

        <input
          className="inputcontainer3"
          placeholder="Password"
          type="password"
          required
          minLength="6"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          className="inputcontainer4"
          placeholder="Confirm Password"
          type="password"
          required
          minLength="6"
          id="confirm_password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="button2">Create</button>
      </form>
    </div>
  );
}

export default SignUp;
