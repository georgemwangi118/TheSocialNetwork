import React, { useRef } from "react";
import "./register.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">The Social Network</h3>
          <span className="loginDesc">
            Connect with friends and the world around you.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              className="loginInput"
              required
              ref={username}
            />
            <input
              placeholder="Email"
              className="loginInput"
              required
              ref={email}
              type="email"
            />
            <input
              placeholder="Password"
              className="loginInput"
              required
              ref={password}
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              className="loginInput"
              required
              ref={passwordAgain}
              type="password"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
