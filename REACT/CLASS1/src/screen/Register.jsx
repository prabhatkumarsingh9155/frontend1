import React from "react";

function Register(props) {
  return (
    <div className="conatainer">
      <div className="header">
        <h1>Register</h1>
      </div>
      <div className="form-container">
        <form>
        <div className="fgroup">
            <label htmlFor="name"> full name</label>
            <input type="text" name="name" id="name" required></input>
          </div>

          <div className="fgroup">
            <label htmlFor="user"> username</label>
            <input type="text" name="user" id="user" required></input>
          </div>
          <div className="fgroup">
            <label htmlFor="pass"> password</label>
            <input type="text" name="pass" id="pass" required></input>
          </div>
          <div className="fgroup">
            <input type="submit" value="Register" className="btn"></input>
            <button onClick={() => props.handler()}> Already register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
