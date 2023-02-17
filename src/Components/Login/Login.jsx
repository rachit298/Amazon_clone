import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login(event) {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  }

  function register(event) {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://pngimg.com/uploads/amazon/small/amazon_PNG24.png"
          alt=""
        ></img>
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <h5>Password</h5>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
          <button onClick={login} className="login__signinBtn">
            Sign in
          </button>
        </form>
        <p className="login__terms">
          By continuing, you agree to Amazon's <span>Conditions of Use</span>{" "}
          and <span>Privacy Notice.</span>
        </p>
        <button onClick={register} className="login__registerBtn">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
