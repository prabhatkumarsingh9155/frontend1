import React from "react";

function login(props) {
  return (
    <div className="conatainer">
      <div className="header">
        <h1>login</h1>
      </div>
      <div className="form-container">
        <form>
          <div className="fgroup">
            <label htmlFor="user"> username</label>
            <input type="text" name="user" id="user" required></input>
          </div>
          <div className="fgroup">
            <label htmlFor="pass"> password</label>
            <input type="text" name="pass" id="pass" required></input>
          </div>
          <div className="fgroup">
            <input type="submit" value="login" className="btn"></input>

            <button onClick={() => props.handler()}> new user</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default login;
