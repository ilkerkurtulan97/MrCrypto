import React from "react";
import { Button } from "reactstrap";
import "../styling/Login.css";

function Login() {
  const submitHandle = () => {
    console.log("Form has submitted !");
  };

  const handleButton = () => {
    console.log("Button has pressed !");
  };

  return (
    <div>
      <form onSubmit={submitHandle} className="login-form">
        <input name="email" type="text" placeholder="E-mail" />
        <input name="password" type="password" placeholder="Password" />
        <button onClick={handleButton}>Login</button>
        <Button color="primary" outline></Button>
      </form>
    </div>
  );
}

export default Login;
