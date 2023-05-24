import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { auth } from "../../config/firebase";

export default function Authentication({ signup, login }) {
  const { signUpUser, loginUser, updateProfile } = useContext(AuthContext);
  const [name, setName] = useState("");
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
        await updateProfile(auth.currentUser, { displayName: name });
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
      {signup && (
        <label>
          Name -
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </label>
      )}
      <label>
        Email -
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password -
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </label>
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
