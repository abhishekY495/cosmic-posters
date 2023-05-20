import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

export default function Authentication({ signup, login }) {
  const { signUpUser, loginUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const signUpBtnHandler = async () => {
    if (email.length === 0) {
      console.log("Enter email...");
    } else if (password.length === 0) {
      console.log("Enter password...");
    } else {
      try {
        await signUpUser(email, password);
        setMessage("You have Signed Up.");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const loginBtnHandler = async () => {
    if (email.length === 0) {
      console.log("Enter email...");
    } else if (password.length === 0) {
      console.log("Enter password...");
    } else {
      try {
        await loginUser(email, password);
        setMessage("You have Logged In.");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <label>Email</label>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <label>Password</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      {signup && (
        <>
          <button onClick={signUpBtnHandler}>Sign Up</button>
          <p>
            Have an Account? <Link to="/login">Login</Link>
          </p>
        </>
      )}
      {login && (
        <>
          <button onClick={loginBtnHandler}>Login</button>
          <p>
            Dont have an Account? <Link to="/signup">Sign Up</Link>
          </p>
        </>
      )}
      {message && <p>{message}</p>}
    </div>
  );
}
