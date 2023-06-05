import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { auth } from "../../config/firebase";
import "./Authentication.css";

export default function Authentication({ signup, login }) {
  const { signUpUser, loginUser, updateProfile } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const guestCredentials = {
    email: "neilarmstrong@nasa.com",
    password: "neil@123456",
  };

  const signUpBtnHandler = async () => {
    try {
      await signUpUser(email, password);
      await updateProfile(auth.currentUser, { displayName: name });
      setMessage("You have Signed Up.");
    } catch (error) {
      console.log(error);
    }
  };

  const loginBtnHandler = async () => {
    try {
      await loginUser(email, password);
      setMessage("You have Logged In.");
    } catch (error) {
      console.log(error);
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (signup) {
      return signUpBtnHandler();
    } else if (login) {
      return loginBtnHandler();
    }
  };

  const guestLogin = async () => {
    setEmail(guestCredentials.email);
    setPassword(guestCredentials.password);
    try {
      await loginUser(guestCredentials.email, guestCredentials.password);
      setMessage("You have Logged In.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={(e) => formSubmitHandler(e)} id="auth-form">
      {signup && (
        <label>
          Name
          <input
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      )}
      <label>
        Email
        <input
          required
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          required
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {signup && (
        <>
          <button id="signup-btn" type="submit">
            Sign Up
          </button>
          <p id="account-message">
            Have an Account? <Link to="/login">Login</Link>
          </p>
        </>
      )}
      {login && (
        <>
          <div id="login-btn-container">
            <button id="login-btn" type="submit">
              Login
            </button>
            <button id="guest-login-btn" type="button" onClick={guestLogin}>
              Guest Login
            </button>
          </div>
          <p id="account-message">
            Dont have an Account? <Link to="/signup">Sign Up</Link>
          </p>
        </>
      )}
      {message && <p>{message}</p>}
    </form>
  );
}
