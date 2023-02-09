import React from "react";
import "./Login.css";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../features/authenticationSlice";
import { useSelector } from "react-redux";
import { Navbar } from "../../components/Navbar";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, error } = useSelector((state) => state.auth);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      console.log("Here");
      navigate("/dashboard");
    }
  }, [isLoggedIn]);

  console.log(isLoggedIn, "From Login screen");

  console.log(userEmail, userPassword);

  const handleLogin = () => {
    dispatch(
      loginUser({
        email: userEmail,
        password: userPassword,
      })
    );
  };

  return (
    <div className="login-wrapper">
      <Navbar />
      <div className="login-container">
        <Link to="/">
          <AiOutlineClose
            style={{ position: "relative", left: 250, top: -15 }}
          />
        </Link>
        <h1>Log In</h1>
        <p>
          Don't have an account?{" "}
          <Link to="/login/Create">Create your account</Link>, it takes less
          than a minute.
        </p>
        <label>Email</label>
        <input
          type={"text"}
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type={"text"}
          onChange={(event) => {
            setUserPassword(event.target.value);
          }}
        />
        <br></br>
        <p
          style={{
            color: "red",
          }}
        >
          {error}
        </p>
        <div className="login-one">
          <button onClick={handleLogin} style={{ backgroundColor: "#011640" }}>
            LOGIN
          </button>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <div className="login-two">
          <button style={{ backgroundColor: "#1877F2" }}>
            <FaFacebook /> LOGIN WITH FACEBOOK
          </button>
        </div>
        <br></br>
        <div className="login-three">
          <button style={{ backgroundColor: "#C63D2D" }}>
            LOGIN WITH GOOGLE
          </button>
        </div>

        <p>Lost your Password</p>
      </div>
    </div>
  );
};
