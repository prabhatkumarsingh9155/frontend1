import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [add, setAdd] = useState(1);

  const mul = useMemo(
    function () {
      console.log("op");
      return count * 5;
    },
    [count]
  );
  return (
    <>
      <h1>COUNT:{count}</h1>

      <button
        onClick={function () {
          setCount(count + 1);
        }}
      >
        COUNT BTN
      </button>

      <h1>ADD:{add}</h1>
      <h1>MULL:{mul}</h1>

      <button
        onClick={function () {
          setAdd(add + 1);
        }}
      >
        ADD BTN
      </button>
    </>
  );
}

export default App;
