import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function Main() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorCPassword, setErrorCPassword] = useState("");

  const [progress, setProgress] = useState(0);

  function validate() {
    let newProgress = 0;

    if (username.length > 3) {
      setErrorUsername("");
      newProgress++;
    } else {
      setErrorUsername("Username must be greater than 3 characters long");
    }

    if (email.length > 8 && email.includes("@")) {
      setErrorEmail("");
      newProgress++;
    } else {
      setErrorEmail("Must be a valid email");
    }

    if (password.length > 5) {
      setErrorPassword("");
      newProgress++;
    } else {
      setErrorPassword("Password must be greater than 5 characters long");
    }

    if (password === cPassword && password.length > 5) {
      setErrorCPassword("");
      newProgress++;
    } else {
      setErrorCPassword("Passwords do not match ");
    }

    setProgress((newProgress / 4) * 100);
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <h1>REACT SIGN UP FORM</h1>
          <ProgressBar progressDone={progress} />
          <input
            type="text"
            placeholder="username"
            //form-control is first applied, giving orange border.

            //if the errorUsername is NOT empty, then form-control-error is applied
            //if it IS empty, then check username. if username has a value, apply form-control correct.
            //if it IS empty, and username is also empty, then apply nothing.

            //the tutorial had a const for every input instead as their approach, but that felt impractical. 
            //My approach provides separation of concerns, simpler state management, and better performance
            className={`form-control ${
              errorUsername ? "form-control-error": username ? "form-control-correct": ""
            }`}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p>{errorUsername}</p>

          <input
            type="text"
            placeholder="email"
            className={`form-control ${
              errorEmail ? "form-control-error": email ? "form-control-correct": ""
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>{errorEmail}</p>

          <input
            type="text"
            placeholder="password"
            className={`form-control ${
              errorPassword ? "form-control-error" : password ? "form-control-correct" : ""
            }`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>{errorPassword}</p>

          <input
            type="text"
            placeholder="confirm password"
            className={`form-control ${
              errorCPassword ? "form-control-error" : cPassword ? "form-control-correct" : ""
            }`}
            value={cPassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
          <p>{errorCPassword}</p>

          <button className="btn btn-primary" onClick={validate}>
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}
