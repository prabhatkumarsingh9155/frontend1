import React, { useState } from "react";
import Login from "./screen/Login"
import Register from "../screen/Register";
function Ex6(props) {
  const [view, setView] = useState(true);
  const viewHandler = () => {
    setView(!view);
  };
  return (
    <div>
      <h1> state value as boolean</h1>

      <section>
        {view ? (
          <Login handler={viewHandler}/>
        ) : (
          <Register handler={viewHandler} />
        )}
      </section>
    </div>
  );
}

export default Ex6;
