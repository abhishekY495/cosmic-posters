import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { AuthContext } from "../../contexts/AuthContext";
import { auth } from "../../config/firebase";
import showPasswordIcon from "../../assets/password/showPasswordIcon.svg";
import hidePasswordIcon from "../../assets/password/hidePasswordIcon.svg";
import "./Authentication.css";

export default function Authentication({ signup, login }) {
  const { signUpUser, loginUser, updateProfile } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const guestCredentials = {
    email: "neilarmstrong@nasa.com",
    password: "neil@123456",
  };
  const redirectTo = () => {
    if (location.state) {
      return navigate(location?.state?.from?.pathname);
    } else {
      return navigate("/posters-listing");
    }
  };

  const signUpBtnHandler = async () => {
    const toastId = toast.loading("Signing you Up", {
      position: "top-center",
    });
    try {
      await signUpUser(email, password);
      await updateProfile(auth.currentUser, { displayName: name });
      toast.success("Signed Up", {
        id: toastId,
        position: "top-center",
      });
      redirectTo();
    } catch (error) {
      if (error.message.includes("invalid-email")) {
        toast.error("Invalid email format", {
          id: toastId,
          position: "top-center",
        });
      } else if (error.message.includes("weak-password")) {
        toast.error("Password should be atleast 6 characters", {
          id: toastId,
          position: "top-center",
        });
      } else {
        toast.error("Something went wrong", {
          id: toastId,
          position: "top-center",
        });
        console.log(error.message);
      }
    }
  };

  const loginBtnHandler = async () => {
    const toastId = toast.loading("Logging you In", {
      position: "top-center",
    });
    try {
      await loginUser(email, password);
      toast.success("Logged In", {
        id: toastId,
        position: "top-center",
      });
      redirectTo();
    } catch (error) {
      if (error.message.includes("user-not-found")) {
        toast.error("User not found", {
          id: toastId,
          position: "top-center",
        });
      } else if (error.message.includes("wrong-password")) {
        toast.error("Wrong password", {
          id: toastId,
          position: "top-center",
        });
      } else {
        console.log(error.message);
        toast.error("Something went wrong", {
          id: toastId,
          position: "top-center",
        });
      }
    }
  };

  const guestLogin = async () => {
    setEmail(guestCredentials.email);
    setPassword(guestCredentials.password);
    try {
      await toast.promise(
        loginUser(guestCredentials.email, guestCredentials.password),
        {
          loading: "Logging you In",
          success: <b>Logged In</b>,
          error: <b>Something went wrong</b>,
        }
      );
      redirectTo();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
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
        <div id="password-input-container">
          <input
            required
            value={password}
            type={hidePassword ? "password" : "text"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <img
            id="password-toggle-icon"
            onClick={() => setHidePassword(!hidePassword)}
            src={hidePassword ? showPasswordIcon : hidePasswordIcon}
            alt={hidePassword ? "hide password" : "show password"}
          />
        </div>
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
    </form>
  );
}
