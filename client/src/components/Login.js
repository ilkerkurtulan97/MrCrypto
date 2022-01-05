import React, { useState } from "react";
import { Button } from "reactstrap";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "../styling/Login.css";

function Login() {
  const [iconToggle, setIconToggle] = useState(true);
  const [passwordToggle, setPasswordToggle] = useState("password");

  const submitHandle = () => {
    console.log("Form has submitted !");
    
  };

  const handleButton = () => {
    console.log("Button has pressed !");
  };

  const handleTrigger = () => {
    setIconToggle(!iconToggle);
    console.log("Toggled!");
  };

  return (
    <div>
      <a href="http://localhost:3000/register" className="register">
        Register
      </a>
      <form onSubmit={submitHandle} className="login-form">
        <input
          name="email"
          type="text"
          placeholder="E-mail"
          className="login-email"
        />

        <div className="togglePasswordDiv">
          <input
            name="password"
            type={passwordToggle}
            placeholder="Password"
            className="login-password"
          />
          {iconToggle ? (
            <FiEye
              onClick={() => {
                handleTrigger();
                setPasswordToggle("text");
              }}
              className="toggleIcon"
            />
          ) : (
            <FiEyeOff
              onClick={() => {
                handleTrigger();
                setPasswordToggle("password");
              }}
              className="toggleIcon"
            />
          )}
        </div>

        <Button
          color="primary"
          outline
          onClick={handleButton}
          className="login-button"
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
