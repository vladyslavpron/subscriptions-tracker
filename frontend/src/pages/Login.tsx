import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import { RouteNames } from "../routes";
import styles from "./Login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submited!");
  };

  return (
    <div className={styles.loginBlock}>
      <form
        className={styles.loginForm}
        onSubmit={(event) => formSubmitHandler(event)}
      >
        <Input
          label="Email: "
          input={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <Input
          label="Password: "
          input={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        ></Input>

        <Button>Login</Button>
      </form>
      <Link className={styles.linkToRegister} to={RouteNames.REGISTER}>
        I haven't registered an account yet
      </Link>
    </div>
  );
}

export default Login;
