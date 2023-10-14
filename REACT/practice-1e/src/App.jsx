import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Ex from "./Component/Ex";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Ex2 from "./Component/Ex2";
function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("white");
  return (
    <>
      <h1 className=" rounded-l text-6xl">COUNTER APPS</h1>
      <h2 className="text-3xl ">NOW COUNT={count}</h2>
      <button
        className="text-4xl  text-white rounded-3xl bg-slate-950"
        onClick={function () {
          setCount(count + 1);
          console.log(count);
        }}
      >
        ADD BUTTON
      </button>
      <button
        className="text-4xl rounded-3xl bg-slate-950 text-white"
        onClick={function () {
          setCount(count - 1);
          console.log(count);
        }}
      >
        MINUS BUTTON
      </button>

      <Ex />

      <div>
        <BrowserRouter>
          <Link to="/home">HOME</Link>
          <Link to="/ABOUT">ABOUT</Link>

          <Link to=""></Link>
          <Routes>
            <Route path="/home" element={<Ex2 />} />
            <Route path="/ABOUT" element={<Ex2 />} />
          </Routes>
        </BrowserRouter>

        <a href="">GOLDI</a>
      </div>
    </>
  );
}

export default App;
