import React from "react";
let x = 20; 
let y = 30;

const title = " welcome to string variable";
const isView = false;

const colors = ["red", "green", "blue", "gold"];

const emp = {
  name: "raju",
};

function Ex1(props) {
  return (
    <div>
      <h1>example -1</h1>
      <h3> x={x}</h3>
      <h3> y={y}</h3>
      <h3> product ={x * y}</h3>
      <hr />
      <h4>{title}</h4>
      <h3> boolean ={isView ? "say true" : "say false"}</h3>
      <hr />

      {colors.map((item, index) => {
        return (
          <div>
            <ol>
              <li> {item}</li>
            </ol>
          </div>
        );
      })}

      <hr />
      <h3> emp name={emp.name}</h3>
    </div>
  );
}

export default Ex1;
